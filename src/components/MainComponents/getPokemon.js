import React, { Component } from "react";
import { Button } from "react-bootstrap";
import axios from "axios";

export default class GetPokemon extends Component {
  state = {
    id: 0,
    name: '',
    img: '',
    tipo: ''
  };

  async componentDidMount(){
    const res = await axios.get(this.props.url);
    this.setState({
        id: res.data.id,
        name: res.data.name,
        img: res.data.sprites.other.home.front_default,
        tipo: res.data.types[0].type.name
    })
  }

  addMeToFavoritos = async () =>{
    await axios.post(process.env.REACT_APP_HOSTNAME + "/pokemones", {
      name: this.state.name,
      types: this.state.tipo,
      imagen: this.state.img,
      idPokemon: this.state.id,
      idUsuario: localStorage.getItem("user_id")

    })
    window.location.reload()
  }

  render() {
    return (
      <div>
        <img
          src={this.state.img}
          alt="foto"
          style={{ display: "inline-block", marginRight: "40px", width: "100px"}}
        />
        <p style={{ display: "inline-block", marginRight: "20px" }}>
          Nombre: {this.state.name}
        </p>
        <p style={{ display: "inline-block", marginRight: "20px" }}>
          Tipo: {this.state.tipo}
        </p>
        <Button onClick={this.addMeToFavoritos} variant="warning" >Add me to Favoritos</Button>
      </div>
    );
  }
}
