import React, { Component } from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import AnnonceSlide from './AnnonceSlide';
import "./style/AnnoncesSlider.css";
import Heading from './Heading';
import { responsive } from "./data";
//import Popup from './popup';
import './style/popup.css'


export class AnnoncesSlider extends Component {

   constructor(props){
      super();
      this.state = {
         annonces:props.annonces,
         bienImob:props.bienImob,
         images:props.images,
      }
   }

  render(){
   
    const annonces=this.state.annonces.map((item) => {
      let bien=this.state.bienImob.find(bien=>bien.bienImmobilierId===item.bien);
     return  <AnnonceSlide bien={bien}
     annonce={item}  
     />}
      )
  
  return ( 
    
    <div>
    <div className="contentSlider">
      <div className="slider">
      <Carousel responsive={responsive}>
      {annonces}
      </Carousel>
      </div>

      </div>       
  
   </div>
  )
}
}

export default AnnoncesSlider



