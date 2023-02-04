import './style/nav.css';
import { Component } from 'react';
import './style/homeBody.css'
import AnnoncesSlider from './AnnoncesSlider';
import Featured from './Featured';
import Hero from './Hero'
import Heading from './Heading';
import { RequeteController } from '../Controllers/requeteController';

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
      let rqtctrl=new RequeteController();
     rqtctrl.getAllAnnonces();
     this.setState({bienImob:JSON.parse(window.localStorage.getItem('biens')),annonces:JSON.parse(window.localStorage.getItem('annonces')),}) 
    
    };
   profileBtnHandler()
   {
    window.location='/Profile'
   }
  render()
  { console.log(this.state.annonces);
    console.log(this.state.bienImob.length);
     let slider;
    this.state.annonces.length!==0 && this.state.bienImob.length!==0? slider= <AnnoncesSlider annonces={this.state.annonces} bienImob={this.state.bienImob}  />:slider=<div>pas d'annonces encore</div>
    return <>
        <Hero />
        <div class='home-body'>
        <div class='home-body-element btn-div'>
          <button class='add-btn' onClick={this.addBtnHandler}><span>Ajouter une annonce</span></button>
        </div>
        </div>
        <Featured />
        <br>
        </br>
        <br>
        </br>
        <Heading title='Annonces récentes' subtitle='Consulter les annonces partagées récemment.' />
        <br>
        </br>
       <div>{slider}</div>
       
       
    </>

  }


}

export default HomeBody;