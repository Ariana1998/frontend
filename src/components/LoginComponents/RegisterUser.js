import React, { Component } from "react";
import axios from "axios";
import './LoginUser.css'

export default class RegisterUser extends Component {
    state = {
        name: '',
        nickname: '',
        password: '',
    }
    createAccount = async e => {
        e.preventDefault();
        const res = await axios.post(process.env.REACT_APP_HOSTNAME+'/users', {
            name: this.state.name,
            nickname: this.state.nickname,
            password: this.state.password
        });
        alert(res.data.message)
        window.location.href = "/"
    }

    onChangeNickname = (e) =>{
        this.setState({
            nickname: e.target.value
        })
    }
    onChangePassword = (e) =>{
        this.setState({
            password: e.target.value
        })
    }
    onChangeName = (e) =>{
        this.setState({
            name: e.target.value
        })
    }
    render() {
        return (
            <div>
                <div className="title-login">
                    <h1>Pokemon App</h1>
                </div>
                <form className="container-login" onSubmit={this.createAccount}>
                    <div >
                        <h3 className="log">Registro</h3>
                    </div>
                    <div className="form-outline mb-4">
                        <input onChange={this.onChangeName} value={this.state.name} placeholder="e.g. Juna" type="text" className="form-control" />
                        <label className="form-label">Nombre</label>
                    </div>
                    <div className="form-outline mb-4">
                        <input onChange={this.onChangeNickname} value={this.state.nickname} placeholder="e.g. Juna99" type="text" className="form-control" />
                        <label className="form-label">Nickname</label>
                    </div>
                    <div className="form-outline mb-4">
                        <input onChange={this.onChangePassword} value={this.state.password} placeholder="******" type="password" className="form-control" />
                        <label className="form-label">Password</label>
                    </div>

                    <button type="submit" className="btn btn-primary mb-4">Sign in</button>
                </form>
            </div>
        );
    }
}