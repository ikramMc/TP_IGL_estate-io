import React from 'react';
import "./style/Apropos.css";
import { Component } from 'react';
import img1 from "./images/message.png"
import img2 from "./images/publier.png"
import img3 from "./images/recherche.png"

export class Apropos extends Component {
  render () {

      return (
        < div className='ApropoBody'>
          <h1 className='apropostxt'>A propos de l'application</h1>
          <p className='notreapp'>Notre application vous permettez de </p>
          <div className="contentapropos">
                <div className="apropos">
                    

                    <div className="cardtwo">
                        <img className='image' src={img1}></img>
                        <h2>Enovoyer message</h2>
                        <p>Notre site Web offre une plate-forme de messagerie pratique qui vous permet de vous connecter directement avec les propriétaires. </p>
                    </div> 

                    <div className="cardtwo">
                        <img className='image' src={img2}></img>
                        <h2>Publier annonce</h2>
                        <p>Partagez votre maison avec le monde. Notre site Web fournit une plate-forme permettant aux propriétaires de présenter leurs propriétés à un large public.</p>
                    </div> 

                    <div className="cardtwo">
                        <img className='image' src={img3}></img>
                        <h2>Rechercher annonce</h2>
                        <p>Trouvez votre maison idéale en toute simplicité. Notre fonctionnalité de recherche avancée vous permet de filtrer facilement vos résultats pour trouver la maison idéale pour vous </p>
                    </div> 

                      
                      
                  
                </div>
            </div>
          </div>
      )
  }
}

export default Apropos
