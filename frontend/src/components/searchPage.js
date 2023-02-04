import { Component } from "react";
import React from "react";
import AnnoncesSlider from "./AnnoncesSlider";
import './style/searchPage.css';
import Nav from "./nav";
import Footer from "./footer";
import Heading from "./Heading";
import Backsearch from "./BackSearch.js";

// eslint-disable-next-line no-undef
class SearchPage extends Component {
  constructor() {
    super()
    this.state = { dateDebut: "", dateFin: "", motsClés: "", wilaya: "", commune: "", result: [], type: "", firstResult: [] }
    this.get = this.get.bind(this);
    this.get();
    this.appliquerFiltre = this.appliquerFiltre.bind(this)
  }
  get() {
    fetch('http://127.0.0.1:8000/Annonce/filter/' + this.state.motsClés).then(response => response.json()).then((result) => {
      if (result !== "pas d'annonces") this.setState({ result: result, firstResult: result })
      else this.setState({ result: [], firstResult: [] })

    },)
  }

  appliquerFiltre() {
    let FinalResult = this.state.firstResult[0];
    let finalBien = this.state.firstResult[1];
    if (this.state.firstResult.length !== 0)
      FinalResult.map((annonce) => {
        if (this.state.dateDebut !== "") {
          if (annonce.date < this.state.dateDebut) FinalResult = FinalResult.filter(annonc => annonc != annonce);
        }
        if (this.state.dateFin !== "") {
          if (annonce.date > this.state.dateFin) FinalResult = FinalResult.filter(annonc => annonc != annonce);

        }
        if (this.state.wilaya !== "") {
          if (finalBien.find(bien => bien.bienImmobilierId == annonce.bien).wilaya !== this.state.wilaya) FinalResult = FinalResult.filter(annonc => annonc != annonce);

        }
        if (this.state.commune !== "") {
          if (finalBien.find(bien => bien.bienImmobilierId == annonce.bien).commune !== this.state.commune) FinalResult = FinalResult.filter(annonc => annonc != annonce);

        }
        if (this.state.type !== "") {
          if (finalBien.find(bien => bien.bienImmobilierId == annonce.bien).type !== this.state.type) FinalResult = FinalResult.filter(annonc => annonc != annonce);

        }
      })
    if (FinalResult.length !== 0) this.setState({ result: [FinalResult, finalBien] });
    else this.setState({ result: [] });

  }
  render() {
    let types = ["", "terrain", "terrain agricole", "appartement", "bungalow", "maison"];
    let slider;
    this.state.result.length !== 0 ? slider = <AnnoncesSlider key={new Date().getTime()} annonces={this.state.result[0]} bienImob={this.state.result[1]} /> : slider = <div>no result </div>
    const { wilayas_communes } = require('dz-communes');
    let wilayas = wilayas_communes.map(wilaya => wilaya.name);
    let communes = [];
    if (this.state.wilaya !== "") communes = wilayas_communes[wilayas.indexOf(this.state.wilaya)]["communes"];

    return <div>

      <Nav />
      <Backsearch />
      <div className='conn'>
         <div className="flex1">
          <div className="box">

            <span>Mots cles</span>
            <br></br>
            <input className="inputtext1" type='text' placeholder='Mot cles' onChange={(event => { this.setState({ motsClés: event.target.value }) })} />
            </div>
<div className="box">
            <button onClick={this.get}>Rechercher</button>
            </div>
          </div>

        <div className="flex" >
      
          <div className='box'>
            <span>Date debut</span>
            <input type='date' className="inputtext" placeholder='Date debut' onChange={(event => { this.setState({ dateDebut: event.target.value }) })} />
          </div>
          <div className='box'>
            <span>Date fin</span>
            <input type='date' className="inputtext" placeholder='Date fin' onChange={(event => { this.setState({ dateFin: event.target.value }) })} />
          </div>
          <div className='box'>
            <span>Wilaya</span>
            <select className="wilaya" onChange={event=>this.setState({wilaya:event.target.value})}>
            <option value={""}></option> 
            {
            wilayas.map((wilaya)=>{return <option value={wilaya}> {wilaya}</option>
            })}
            </select>
          </div>
          <div className='box'>
            <span>Commune</span>
            <select className="commune" onChange={event=>this.setState({commune:event.target.value})}>
    {communes.map((commune)=>{return <option value={commune["name"]}> {commune["name"]}</option>
  })}
  </select>
          </div>

          <div className='box'>
            <h4>Filtrer resultats</h4>
          </div>
          <button onClick={this.appliquerFiltre} className='btn'>
         
            <i className='fa fa-search'></i>
          </button>
        
        </div>
      </div>

      <div>{slider}</div>
      <Footer />
    </div>
   
  }
}
export default SearchPage;