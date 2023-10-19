import React, { Component } from "react";
import { Link, Outlet } from 'react-router-dom'
import './Navigator.css'
export default class Navigator extends Component {
    state = {
        name: localStorage.getItem("user_name")
    }
    logout = () => {
        const { setLogged, navigate } = this.props;
        localStorage.removeItem("isLogged")
        localStorage.removeItem("user_name")
        localStorage.removeItem("user_id")
        setLogged(false)
        navigate("/")
    }
    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                    <div className="container">
                        <Link className="navbar-brand" to="/pokemones"><b>
                        Pokemon App
                        </b>
                        </Link>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNav">
                            <ul className="navbar-nav ml-auto">
                                <li className="nav-item active">
                                    <Link className="nav-link" to="#">{"Bienvenido " + this.state.name + "!"}</Link>
                                </li>
                                <li className="nav-item active">
                                    <Link className="nav-link" to="/pokemones">Pokemones</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" onClick={this.logout}>Cerrar sesión</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
                <Outlet />
            </div>
        )
    }
}