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
                        <p>hna description hna description hna description hna description hna description hna description hna description hna description hna description hna description </p>
                    </div> 

                    <div className="cardtwo">
                        <img className='image' src={img2}></img>
                        <h2>Publier annonce</h2>
                        <p>hna description hna description hna description hna description hna description hna description hna description hna description hna description hna description </p>
                    </div> 

                    <div className="cardtwo">
                        <img className='image' src={img3}></img>
                        <h2>Rechercher</h2>
                        <p>hna description hna description hna description hna description hna description hna description hna description hna description hna description hna description </p>
                    </div> 

                      
                      
                  
                </div>
            </div>
          </div>
      )
  }
}

export default Apropos
