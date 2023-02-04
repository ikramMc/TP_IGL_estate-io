import { Component, useState } from "react";
import React from "react";
import Footer from './footer';
import Nav from './nav';
import Back from './Back';
import "./style/AddPage.css"
import { Annonce } from "../entities/Annonce";
import MapPicker from 'react-google-map-picker';
import { Bien } from "../entities/Bien";
import { RequeteController } from "../Controllers/requeteController";
const DefaultLocation = { lat: 36.7, lng: 2.985 };
const DefaultZoom = 10;

class AddPage extends Component {
     constructor() {
          super();
          this.state = {
               location: DefaultLocation,
               Zoom: DefaultZoom,
               adresse: null, commune: null, wilaya: 'Adrar', titre: '', images: [], bienimob: { id: '', description: '', surface: '', prix: '', type: '' }
          }
          this.handleChangeLocation = this.handleChangeLocation.bind(this);
          this.handleChangeZoom = this.handleChangeZoom.bind(this);
          this.render = this.render.bind(this)
          this.submitHandler = this.submitHandler.bind(this);
          this.imageHandler = this.imageHandler.bind(this);
     }
     handleChangeLocation(newLat, newLng) {
          this.setState({ location: { lat: newLat, lng: newLng } });
     }

     handleChangeZoom(newZoom) {
          this.setState({ Zoom: newZoom });
     }
     submitHandler(event) {
          event.preventDefault();
          console.log("hey")
          let date = new Date();
          let month = date.getMonth() + 1
          let dateexct = date.getFullYear() + '-' + month + '-' + date.getDate();
          let annonce = new Annonce(null, dateexct, JSON.parse(window.localStorage.getItem('user')).id, null, this.state.categorie)
          let bien = new Bien(null, this.state.titre, this.state.bienimob.description, this.state.bienimob.prix, this.state.bienimob.surface, this.state.location, this.state.wilaya, this.state.commune, this.state.adresse, this.state.bienimob.type);
          let rqt = new RequeteController();
          rqt.addNewAnnonce(annonce, bien, this.state.images);
     }


     imageHandler(event) {
          this.setState({ images: event.target.files });

     }

     state = {
          isOpen: false
     };

     toggleModal = () => {
          this.setState({ isOpen: !this.state.isOpen });
     };


     render() {
          const { wilayas_communes } = require('dz-communes');
          let wilayas = wilayas_communes.map(wilaya => wilaya.name);
          let communes = wilayas_communes[wilayas.indexOf(this.state.wilaya)]["communes"];
          let categories = ["vente", "echange", "location", "location pour vacance"];
          let types = ["terrain", "terrain agricole", "appartement", "bungalow", "maison"];
         


          return <div className="addpage">
               <Nav />
               <Back />
               <div className="body">

                    <div className="container">
                         <div className="title">Ajouter une annonce</div>
                         <form className="form" onSubmit={this.submitHandler}>

                              <div className="partOne">
                                   <div className="titre">Informations sur l'annonce</div>
                                   <div className="fields">
                                        <div className="input-field">
                                             <label>Titre</label>
                                             <input type='text' placeholder="   titre" onChange={event => this.setState({ titre: event.target.value })} required />
                                        </div>


                                        <div className="input-field">
                                             <label>Categorie</label>
                                             <select className="categorie" onChange={event => this.setState({ categorie: event.target.value })} required >
                                                  <option value="" selected disabled>Categorie</option>
                                                  {categories.map((categorie) => {
                                                       return <option value={categorie}> {categorie}</option>
                                                  })}
                                             </select>
                                        </div>


                                        <div className="input-field">
                                             <label>Type</label>
                                             <select className="type" onChange={event => this.setState(prevState => ({ bienimob: { ...prevState.bienimob, type: event.target.value } }))} required>
                                                  <option value="" selected disabled>type</option>
                                                  {types.map((type) => {
                                                       return <option value={type}> {type}</option>
                                                  })}
                                             </select>
                                        </div>


                                        <div className="input-field">
                                             <label>Wilaya</label>
                                             <select className="wilaya" onChange={event => this.setState({ wilaya: event.target.value })} required>
                                                  <option value="" selected disabled>wilaya</option>
                                                  {wilayas.map((wilaya) => {
                                                       return <option value={wilaya}> {wilaya}</option>
                                                  })}
                                             </select>
                                        </div>


                                        <div className="input-field">
                                             <label>Commune</label>
                                             <select className="commune" onChange={event => this.setState({ commune: event.target.value })} required>
                                                  <option value="" selected disabled>commune</option>
                                                  {communes.map((commune) => {
                                                       return <option value={commune["name"]}> {commune["name"]}</option>
                                                  })}
                                             </select>
                                        </div>


                                        <div className="input-field">
                                             <label>Adresse</label>
                                             <input type='text' placeholder="    adresse" onChange={event => this.setState({ adresse: event.target.value })} required />
                                        </div>

                                        <MapPicker defaultLocation={this.state.location}
                                             zoom={this.state.Zoom}
                                             mapTypeId="roadmap"
                                             style={{ height: '700px' }}
                                             onChangeLocation={this.handleChangeLocation}
                                             onChangeZoom={this.handleChangeZoom}
                                             apiKey='AIzaSyD55lI3l65Vy6vvRL-sylk3hjJWy83iO3s' />
                                        <div className="input-field">
                                             <label>Image</label>
                                             <input type='file' accept="image/*" multiple onChange={this.imageHandler} />
                                        </div>



                                        <div className="input-field">
                                             <label>Surface</label>
                                             <input type='number' placeholder="     surface en metre carée" onChange={event => this.setState(prevState => ({ bienimob: { ...prevState.bienimob, surface: event.target.value } }))} required />
                                        </div>


                                        <div className="input-field">
                                             <label>Description</label>
                                             <input type='text' placeholder="     description" onChange={event => this.setState(prevState => ({ bienimob: { ...prevState.bienimob, description: event.target.value } }))} required />
                                        </div>



                                        <div className="input-field">
                                             <label>Prix</label>
                                             <input type='number' placeholder="    prix" onChange={event => this.setState(prevState => ({ bienimob: { ...prevState.bienimob, prix: event.target.value } }))} required />
                                        </div>

                                   </div>
                              </div>
                              <button className="btnBtn" >Ajouter</button>
                         </form>

                    </div>

               </div>
               <Footer />
          </div>


     }
}
export default AddPage;