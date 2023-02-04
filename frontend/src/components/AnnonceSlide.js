import React, { Component} from 'react';
//import Popup from './popup';
import './style/popup.css'
import './style/AnnoncesSlider.css'
import { Link } from 'react-router-dom';
import img from './images/house.jpg';

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
        <img  src={img} className="product--image"  alt="product image" />
        <h2>{this.state.annonce.Categorie}</h2>
        <p className="price">{this.state.bien.prix}</p>
        <p>{this.state.bien.titre}</p>
        <div className="btndetails">
            <Link className='btndetailsContent' to={`/slider/${this.state.annonce.annonceId}`} >Afficher les details</Link>
         </div>
         
      </div>
    );
     }
}
  
export default AnnonceSlide;
