import './nav.css';
import { Component } from 'react';
import './homeBody.css'
import AnnoncesSlider from './AnnoncesSlider';

class HomeBody extends Component{
    
  render()
  {
    return <div class='home-body'>
        <div class='home-body-element'><h2 class='welcome-text'>Bienvenue dans Estate.io !</h2></div>
        <div class='home-body-element'><h1 class='slogan-text'>SOME SLOGAN HERE CUZ I THINK IT WOULDD LOOK COOL</h1></div>
        <div class='home-body-element btn-div'>
          <button class='search-btn'><h3>Rechercher des annonces !</h3></button>
          <button class='add-btn'><h3>Ajouter une annonce</h3></button>
        </div>
        <AnnoncesSlider/>
        <AnnoncesSlider/>
    </div>

  }


}

export default HomeBody;