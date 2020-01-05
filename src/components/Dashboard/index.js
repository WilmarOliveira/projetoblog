import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import firebase from '../../firebase';

class Dashboard extends Component{

    constructor(props) {
        super(props);
        this.state = {
            nome: localStorage.nome
        };

        this.logout = this.logout.bind(this);
    }

    async componentDidMount() {
        if(!firebase.getCurrent()) {
            this.props.history.replace('/login');
            return null;
        }

        firebase.getUserName((info) => {
            localStorage.nome = info.val().nome;
            this.setState({nome: localStorage.nome});
        })
    }

    logout() {

    }

    render() {
        return(
            <div>
                <div>
                    <h1>Bem-vindo {this.state.nome}</h1>
                    <Link to="/dashboard/new">Novo Post</Link>
                </div>
                <p>Logado com email: wilmar@hotmail.com</p>
                <button onClick={this.logout} >Sair</button>
            </div>
        );
    }
}

export default withRouter(Dashboard);