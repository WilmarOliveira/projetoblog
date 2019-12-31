import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import firebase from '../../firebase';

import './login.css';

class Login extends Component{

    constructor(props) {
        super(props);
        this.state = {
            email: '',
            senha: ''
        };

        this.entrar = this.entrar.bind(this);
        this.login = this.login.bind(this);
    }

    componentDidMount() {
        if(firebase.getCurrent()) {
            this.props.history.replace('/dashboard');
        }
    }

    entrar(e) {
        e.preventDefault();

        this.login()
    }

    login = async () => {
        const { email, senha } = this.state;

        try{
            await firebase.login(email, senha)
            .then(() => {
                return this.props.history.replace('/dashboard');
            })
            .catch((error) => {
            if(error.code === 'auth/user-not-found') {
                alert('Usuário não cadastrado');
            } else {
                alert('Código de erro: ' + error.code);
                return null;
            }
        });

        } catch(error) {
            alert(error.message);
        }

        

    }

    render() {
        return(
            <div>
                <form onSubmit={this.entrar} id="login">
                    <h1>Bem-vindo</h1>
                    <label>Email:</label><br/>
                    <input type="text" autoComplete="off" autoFocus value={this.state.email} 
                    onChange={(e) => this.setState({email: e.target.value})} placeholder="Insira aqui seu email..." /><br/>

                    <label>Senha:</label><br/>
                    <input type="password" autoComplete="off" value={this.state.senha}
                    onChange={(e) => this.setState({senha: e.target.value})} placeholder="Insira aqui sua senha..." /><br/>

                    <div className="content-button">
                        <button type="submit">Entrar</button>
                    </div>
                    
                    <Link to="/register" >Ainda não é cadastrado?</Link>
                </form>
            </div>
        );
    }
}

export default withRouter(Login);