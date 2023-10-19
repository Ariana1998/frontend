import React, { Component } from "react";
import { Accordion } from "react-bootstrap";
import GetPokemon from "./getPokemon";
import axios from "axios";

export default class Pokemones extends Component {
  state = {
    favoritos: [],
    pokemones: [],
  };
  async componentDidMount() {
    const resFavoritos = await axios.get(
      process.env.REACT_APP_HOSTNAME +
        "/pokemones/user/" +
        localStorage.getItem("user_id")
    );
    const response = await axios.get("https://pokeapi.co/api/v2/pokemon/");
    this.setState({
      favoritos: resFavoritos.data,
      pokemones: response.data.results,
    });
    console.log(this.state.favoritos);
  }

  deleteFav = async (id) =>{
    await axios.delete(process.env.REACT_APP_HOSTNAME +
      "/pokemones/" + id)
      window.location.reload();
  }

  eliminarPokemon = async (id) => {
    await axios.delete(process.env.REACT_APP_HOSTNAME + "/pokemones/" + id);
    window.location.reload();
  };

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <h3 style={{ textAlign: "center" }}>Favoritos</h3>
            <ul className="list-group">
              {this.state.favoritos.map((fav) => (
                <li className="list-group-item list-group-item-active" onDoubleClick={() => this.deleteFav(fav._id)}>
                  <img
                    src={fav.imagen}
                    alt="foto"
                    style={{
                      display: "inline-block",
                      marginRight: "40px",
                      width: "100px",
                    }}
                  />
                  <p style={{ display: "inline-block", marginRight: "20px" }}>
                    Nombre: {fav.name}
                  </p>
                  <p style={{ display: "inline-block", marginRight: "20px" }}>
                    Tipo: {fav.types}
                  </p>
                </li>
              ))}
            </ul>
          </div>
          <div className="col-lg-6">
            <h3 style={{ textAlign: "center" }}>Pokemones</h3>
            <Accordion>
              {this.state.pokemones.map((pokemon) => (
                <Accordion.Item key={pokemon.name} eventKey={pokemon.name}>
                  <Accordion.Header>{pokemon.name}</Accordion.Header>
                  <Accordion.Body>
                    <GetPokemon url={pokemon.url} />
                  </Accordion.Body>
                </Accordion.Item>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    );
  }
}
