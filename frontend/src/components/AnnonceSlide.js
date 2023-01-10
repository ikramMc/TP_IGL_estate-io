import React, { PureComponent, useState} from 'react';
import Popup from './popup';
import './popup.css'
import './AnnoncesSlider.css'
import { Link, useParams } from 'react-router-dom';

export function AnnonceSlide(props) {

    const [openModal, setOpenModal] = useState();
    return (
        <div className="card">
        <img className="product--image" src={props.url} alt="product image" />
        <h2>{props.categorie}</h2>
        <p className="price">{props.prix}</p>
        <p>{props.description}</p>
         <div className="btndetails">
            <Link className='btndetailsContent' to={`/slider/${props.categorie}`} >Afficher les details</Link>
         </div>
      </div>
    );
}
  
export default AnnonceSlide;
