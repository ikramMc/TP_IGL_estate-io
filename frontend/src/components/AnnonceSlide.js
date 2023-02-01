import React, { Component} from 'react';
//import Popup from './popup';
import './popup.css'
import './AnnoncesSlider.css'
import { Link } from 'react-router-dom';

export class AnnonceSlide extends Component{
     constructor(props)
     {
        super();
        this.state={bien:props.bien,annonce:props.annonce,};
       
     }
     render()
     {
    return (
        <div className="card">
        <img  className="product--image"  alt="product image" />
        <h2>{"categorie"}</h2>
        <p className="price">{this.state.bien?.prix}</p>
        <p>{this.state.bien.description}</p>
        <div className="btndetails">
            <Link className='btndetailsContent' to={`/slider/${this.state.annonce.annonceId}`} >Afficher les details</Link>
         </div>
         
      </div>
    );
     }
}
  
export default AnnonceSlide;
