import React from 'react';
import { Component } from 'react';
import "./Login.css";
import NavBarLogin from './NavBarLogin';
import Footer from './footer';
import Apropos from './Apropos';

export class Login extends Component {
  render () {
  return (
    <div>
            <NavBarLogin />
            <div className="content">
                <p className='txt-first'>Bienvenue dans Estate.io</p>
                <div className='textone'>
                    Bienvenue dans Estate.io
                </div>
                    <h1>Publiez et consultez des annonces immobilières gratuitement !</h1>
                <p>
                    text text texte ettgfhdghgfhdstext text t
                </p>
                <a href="" className="Seconnecter">Se connecter avec google</a>
            </div>
            <Apropos />
            <Footer />
    </div>
  )
}
}

export default Login
