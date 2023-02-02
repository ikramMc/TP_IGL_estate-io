import { Component } from "react";
import React from "react";
import AnnoncesSlider from "./AnnoncesSlider";

// eslint-disable-next-line no-undef
class SearchPage extends Component{
  constructor()
  {
    super()
    this.state={dateDebut:"",dateFin:"",motsClés:"",wilaya:"",commune:"",result:[],type:"",firstResult:[]}
    this.get=this.get.bind(this);
    this.get();
    this.appliquerFiltre=this.appliquerFiltre.bind(this)
  }
  get()
  {  fetch('http://127.0.0.1:8000/Annonce/filter/'+this.state.motsClés).then(response=>response.json()).then((result)=>{
    if(result!=="pas d'annonces")this.setState({result:result,firstResult:result})
    else this.setState({result:[],firstResult:[]})
    
      },)
  }

appliquerFiltre()
 {
  let FinalResult=this.state.firstResult[0];
  let finalBien=this.state.firstResult[1]; 
  if(this.state.firstResult.length!==0)
  FinalResult.map((annonce)=>{
  if(this.state.dateDebut!==""){
    if(annonce.date<this.state.dateDebut)FinalResult=FinalResult.filter(annonc=>annonc!=annonce);
  }
  if(this.state.dateFin!==""){
    if(annonce.date>this.state.dateFin)FinalResult=FinalResult.filter(annonc=>annonc!=annonce);
    
  }
  if(this.state.wilaya!==""){
    if(finalBien.find(bien=>bien.bienImmobilierId==annonce.bien).wilaya!==this.state.wilaya)FinalResult=FinalResult.filter(annonc=>annonc!=annonce);
    
  }
  if(this.state.commune!==""){
    if(finalBien.find(bien=>bien.bienImmobilierId==annonce.bien).commune!==this.state.commune)FinalResult=FinalResult.filter(annonc=>annonc!=annonce);
    
  }
  if(this.state.type!==""){
    if(finalBien.find(bien=>bien.bienImmobilierId==annonce.bien).type!==this.state.type)FinalResult=FinalResult.filter(annonc=>annonc!=annonce);
    
  }
})
  if(FinalResult.length!==0)this.setState({result:[FinalResult,finalBien]});
  else this.setState({result:[]});
 
}
  render()
  { let types=["","terrain","terrain agricole","appartement","bungalow","maison"];
    let slider;
    this.state.result.length!==0?slider=<AnnoncesSlider  key={new Date().getTime()} annonces={this.state.result[0]} bienImob={this.state.result[1]}/>: slider=<div>no result </div>
    const {wilayas_communes}= require('dz-communes');
  let wilayas=wilayas_communes.map(wilaya=>wilaya.name);
  let communes=[];
  if(this.state.wilaya!=="") communes=wilayas_communes[wilayas.indexOf(this.state.wilaya)]["communes"];

    return<div> 
      <input type="text" placeholder="mots clés"onChange={(event=>{this.setState({motsClés:event.target.value})})}/>
      <button onClick={this.get}>click</button>
      <select className="type" onChange={event=>this.setState({type:event.target.value})}>
               {types.map((type)=>{return <option value={type}> {type}</option>
                 })}
      </select>
      <input type="date" placeholder="Date Debut" onChange={(event=>{this.setState({dateDebut:event.target.value})})}/>
      <input type="date" placeholder="Date Fin" onChange={(event=>{this.setState({dateFin:event.target.value})})}/>
      <select className="wilaya" onChange={event=>this.setState({wilaya:event.target.value})}>
      <option value={""}></option> 
    {
    wilayas.map((wilaya)=>{return <option value={wilaya}> {wilaya}</option>
    })}
    </select>
 <select className="commune" onChange={event=>this.setState({commune:event.target.value})}>
    {communes.map((commune)=>{return <option value={commune["name"]}> {commune["name"]}</option>
  })}
  </select>
  <button onClick={this.appliquerFiltre}>appliquer Filtre</button>
      
      <div>{slider}</div>
    </div>
  }
}
export default SearchPage;