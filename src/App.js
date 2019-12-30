import React, { Component } from 'react';

import firebase from './firebase';
import Routes from './routes';

import './global.css';

class App extends Component {

    state= {
        firebaseInitialized: false
    };

    componentDidMount() {
        firebase.isInitialized().then(resultado => {
            //Devolve o usuário
            this.setState({firebaseInitialized: true});
        })
    }

    render() {
        return this.state.firebaseInitialized !== false ? 
        (
            <div>
                <Routes />
            </div>
        ) : (
            <h1>Carregando...</h1>
        );
    }
}

export default App;