import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import './new.css';

class New extends Component {

    constructor(props) {
        super(props);
        this.state = {
            titulo: '',
            imagem: '',
            descricao: ''
        };

        this.postar = this.postar.bind(this);
    }

    postar() {

    }

    render() {
        return(
            <div>
                <div className="botaoVoltar">
                    <Link to="/dashboard" >Voltar</Link>
                </div>
                <form onSubmit={this.postar} className="formulario">
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