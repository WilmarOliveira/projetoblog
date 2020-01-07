import React, { Component } from 'react';
import firebase from '../../firebase';
import './home.css';

class Home extends Component {

    state = {
        posts: []
    }

    componentDidMount() {
        firebase.app.ref('posts').once('value', (snapshot => {
            let state = this.state;
            state.posts = [];

            snapshot.forEach((childItem) => {
                state.posts.push({
                    key: childItem.key,
                    titulo: childItem.val().titulo,
                    autor: childItem.val().autor,
                    imagem: childItem.val().imagem,
                    descricao: childItem.val().descricao
                });
            });
            state.posts.reverse();
            this.setState(state);
        }));
    }

    render() {
        return(
            <section id="main-section">
                {this.state.posts.map((post) => {
                    return(
                        <article key={post.key} >
                                <header>
                                    <div className="content-title">
                                        <strong>{post.titulo}</strong><br/>
                                        <p>Autor: {post.autor}</p>
                                    </div>
                                </header>
                                <img src={post.imagem} alt="Capa"/>
                                <footer>
                                    <p>{post.descricao}</p>
                                </footer>
                        </article>
                    );
                })}
            </section>
        );
    }
}

export default Home;