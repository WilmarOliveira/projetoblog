import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import './new.css';
import firebase from '../../firebase';

class New extends Component {

    constructor(props) {
        super(props);
        this.state = {
            titulo: '',
            imagem: '',
            descricao: '',
            alert: ''
        };

        this.postar = this.postar.bind(this);
    }

    componentDidMount() {

        if (!firebase.getCurrent()) {
            this.props.history.replace('/login');
        }
    }

    postar = async(e) => {
        e.preventDefault();

        let posts = firebase.app.ref('posts');
        let chave = posts.push().key;

        if(this.state.titulo !== '' && this.state.imagem !== '' && this.state.descricao !== '') {
            await posts.child(chave).set({
                titulo: this.state.titulo,
                imagem: this.state.imagem,
                descricao: this.state.descricao,
                autor: localStorage.nome
            })

            this.props.history.replace('/dashboard')
            alert('Nova postagem cadastrada com sucesso!');
        } else {
            this.setState({alert: 'Por favor, preencha todos os campos!'})
        }

    }

    render() {
        return(
            <div>
                <div className="botaoVoltar">
                    <Link to="/dashboard" >Voltar</Link>
                </div>
                <form onSubmit={this.postar} className="formulario">
                    <span>{this.state.alert}</span>
                    <h1>Nova Postagem</h1>
                    <label>Título:</label><br/>
                    <input type="text" autoFocus autoComplete="off" value={this.state.titulo}
                    onChange={(e) => this.setState({titulo: e.target.value})} placeholder="Insira um título aqui..."  /><br/>
                    <label>Url da imagem:</label><br/>
                    <input type="text" autoComplete="off" value={this.state.imagem}
                    onChange={(e) => this.setState({imagem: e.target.value})} placeholder="Insira um título aqui..."  /><br/>
                    <label>Descrição:</label><br/>
                    <textarea type="text" autoComplete="off" value={this.state.descricao}
                    onChange={(e) => this.setState({descricao: e.target.value})} placeholder="Insira um título aqui..."  /><br/>

                    <button type="submit">Cadastrar</button>
                </form>
            </div>
        );
    }
}

export default withRouter(New);