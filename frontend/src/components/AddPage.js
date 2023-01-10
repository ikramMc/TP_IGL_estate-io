import { Component } from "react";
import React from "react";
import axios from "axios";
import Footer from './footer';
import Nav from './nav';
import "./AddPage.css"


class AddPage extends Component{
  render()
  { 
  return  <div className="addpage">
  <Nav />
  <div  className="body">

      <div className="container">
      <div className="title">Ajouter une annonce</div>
      <form className="form">      
          
       <div className="partOne">
       <div className="tiitre">Informations sur l'annonce</div>
       <div className="fields">
          <div className="input-field">
               <label>Titre</label>
               <input type='text' placeholder="   titre"/>
          </div>
          

          <div className="input-field">
               <label>Categorie</label>
               <select className="    categorie">
               </select>
          </div>


          <div className="input-field">
               <label>Type</label>
               <select className="type">
               </select>
          </div>


          <div className="input-field">
               <label>Wilaya</label>
               <select className="wilaya">
               </select>
          </div>


          <div className="input-field">
               <label>Commune</label>
               <select className="commune">
               </select>
          </div>


          <div className="input-field">
               <label>Adresse</label>
               <input type='text' placeholder="    adresse" />
          </div>


          <div className="input-field">
               <label>Image</label>
               <input type='file' accept="image/*" />
          </div>
          


          <div className="input-field">
               <label>Surface</label>
               <input type='number' placeholder="     surface en metre carée" />
          </div>


          <div className="input-field">
               <label>Description</label>
               <input type='text' placeholder="     description"/>
          </div>



          <div className="input-field">
               <label>Prix</label>
               <input type='number' placeholder="    prix" />
          </div>

       </div>
       </div> 
          
       <div className="partTwo">
       <div className="tiitre">Vos informations</div>
       <div className="fields">

          <div className="input-field">
               <label>Nom</label>
               <input type='text' placeholder="    nom"/>
          </div>


          <div className="input-field">
               <label>Prenom</label>
               <input type='text' placeholder="     prenom"/>
          </div>


          <div className="input-field">
               <label>Numero de telephone</label>
               <input type='phoneNumber' placeholder="     numero de telephone"/>
          </div>


          <div className="input-field">
               <label>Adresse</label>
               <input type='text' placeholder="     adresse"/>
          </div>

          <div className="input-field">
               <label>E-mail</label>
               <input type='email' placeholder="     email"/>
          </div>

        
     </div>
     </div>

          <button className="btnBtn">Ajouter</button>
     </form>
     
  </div>
  
  </div>
  <Footer />
  </div>
  

  }
}
export default AddPage;