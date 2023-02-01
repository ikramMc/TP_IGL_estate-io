import './nav.css';
import { Component } from 'react';
import './homeBody.css'
import AnnoncesSlider from './AnnoncesSlider';

class HomeBody extends Component{
  constructor()
  {
    super();
    this.state = {
      annonces:[],
      bienImob:[],
      images:[],
      user:JSON.parse(window.localStorage.getItem('user'))
     
        
       
      
   }
   this.refreshList=this.refreshList.bind(this);
 
  
  }
  componentDidMount(){
    this.refreshList();
   
}
    searchBtnHandler()
    {
      window.location='/searchPage'
    }
    addBtnHandler()
    {
      window.location='/ajouterAnnonce';
    }
    refreshList(){
      fetch('http://127.0.0.1:8000/bienImob/')
      .then(response => response.json())
      .then(biens => {
          this.setState({
             bienImob:biens
          }); 
      })
       fetch('http://127.0.0.1:8000/Annonce/')
       .then(response => response.json())
       .then(annonces => {
           this.setState({
              annonces:annonces
           })
       })
      
       
     };
  
  render()
  {
     let slider;
    if(this.state.annonces.length!==0 && this.state.bienImob.length!==0) slider= <AnnoncesSlider annonces={this.state.annonces} bienImob={this.state.bienImob}  />
    return <div class='home-body'>
        <div class='home-body-element'><h2 class='welcome-text'>Bienvenue dans Estate.io !</h2></div>
        <div class='home-body-element'><h1 class='slogan-text'>SOME SLOGAN HERE CUZ I THINK IT WOULDD LOOK COOL</h1></div>
        <div class='home-body-element btn-div'>
          <button class='search-btn' onClick={this.searchBtnHandler}><h3>Rechercher des annonces !</h3></button>
          <button class='add-btn' onClick={this.addBtnHandler}><h3>Ajouter une annonce</h3></button>
        </div>
       <div>{slider}</div>
        
       
       
    </div>

  }


}

export default HomeBody;