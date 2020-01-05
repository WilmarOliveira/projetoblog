import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import firebase from '../../firebase';
import './register.css';

class Register extends Component {

    constructor(props) {
        super(props);
        this.state = {
            nome: '',
            email: '',
            senha: ''
        }

        this.register = this.register.bind(this);
        this.onRegister = this.onRegister.bind(this);
    }

    componentDidMount() {
        if(firebase.getCurrent()) {
            this.props.history.replace('/dashboard');
        }
    }

    register(e) {
        e.preventDefault();
        this.onRegister();
    }

    onRegister = async () => {
        
        const {nome, email, senha} = this.state;

        try{
            await firebase.register(nome, email, senha);
            this.props.history.replace('/dashboard');

        }catch(error) {
            alert(error.message);
        }

    }

    render() {
        return(
            <div>
                <form onSubmit={this.register} id="content-register">
                    <h1>Novo Usuário</h1>
                    <label>Nome:</label><br/>
                    <input type="text" autoComplete="off" autoFocus value={this.state.nome}
                    onChange={(e) => this.setState({nome: e.target.value})} placeholder="Digite seu nome" /><br/>
                    <label>Email:</label><br/>
                    <input type="text" autoComplete="off" value={this.state.email}
                    onChange={(e) => this.setState({email: e.target.value})} placeholder="Digite seu melhor email" /><br/>
                    <label>Senha:</label><br/>
                    <input type="password" autoComplete="off" value={this.state.senha}
                    onChange={(e) => this.setState({senha: e.target.value})} placeholder="Digite sua melhor senha" /><br/>

                    <button type="submit" >Cadastrar</button>
                </form>
            </div>
        );
    }
}

export default withRouter(Register);