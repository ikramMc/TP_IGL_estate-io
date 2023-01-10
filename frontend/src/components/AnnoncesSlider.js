import React, {useState} from 'react'
import { Component } from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import AnnonceSlide from './AnnonceSlide';
import "./AnnoncesSlider.css";
import { responsive } from "./data";
import Popup from './popup';
import './popup.css'


export class AnnoncesSlider extends Component {

   constructor(){
      super();
      this.state = {
         deps:[]
      }
   }

   refreshList(){
     fetch('http://127.0.0.1:8000/Annonce/')
     .then(response => response.json())
     .then(deps => {
         this.setState({
            deps:deps
         }); 
         console.log('hhhhhhhhhhhhhhhhhhhhhhhhhhhhhhdjfhdkjf')
         console.log(deps);
     })
   };

   componentDidMount(){
       this.refreshList();
   }

   componentDidUpdate(){
       this.refreshList();
   }




  render(){
   const AnnoncesData = this.state.deps;



      
   const annonces = AnnoncesData.map((item2) => (
    <AnnonceSlide
      categorie={item2.annonceId}
      url={item2.date}
      prix={item2.userId}
      description={item2.bienId}
    />
  ));
    
 
  return ( 
    <>
    <div className="contentSlider">
      <h1 className='h11'>Annonces récentes</h1>
      <div className="slider">
      <Carousel responsive={responsive}>
        {annonces}
      </Carousel>
      </div>

      </div>       
  
   </>
  )
}
}

export default AnnoncesSlider



