import { Component } from "react";
import React from "react";
import AnnoncesSlider from "./AnnoncesSlider";

// eslint-disable-next-line no-undef
class SearchPage extends Component{
  constructor()
  {
    super()
    this.state={dateDebut:"2022-12-05",dateFin:"2022-12-05",wilaya:"Adrar",result:[]}
    this.get=this.get.bind(this)
  }
  get()
  {  fetch('http://127.0.0.1:8000/Annonce/'+this.state.dateDebut+'/'+this.state.dateFin+'/'+this.state.wilaya+'/'+this.state.commune+'/'+this.state.motsClés).then(response=>response.json()).then((result)=>{
    this.setState({result:result})

      },)
   

}
  render()
  {
    let slider;
    if(this.state.result.length!==0)slider=<AnnoncesSlider annonces={this.state.result[0]} bienImob={this.state.result[1]}/>
    const {wilayas_communes}= require('dz-communes');
  let wilayas=wilayas_communes.map(wilaya=>wilaya.name);
  let communes=wilayas_communes[wilayas.indexOf(this.state.wilaya)]["communes"];

    return<div> 
      <input type="text" placeholder="mots clés"onChange={(event=>{this.setState({motsClés:event.target.value})})}/>
      <input type="date" placeholder="Date Debut" onChange={(event=>{this.setState({dateDebut:event.target.value})})}/>
      <input type="date" placeholder="Date Fin" onChange={(event=>{this.setState({dateFin:event.target.value})})}/>
      <select className="wilaya" onChange={event=>this.setState({wilaya:event.target.value})}>
    {wilayas.map((wilaya)=>{return <option value={wilaya}> {wilaya}</option>
    })}
    </select>
 <select className="commune" onChange={event=>this.setState({commune:event.target.value})}>
    {communes.map((commune)=>{return <option value={commune["name"]}> {commune["name"]}</option>
  })}
  </select>
      <button onClick={this.get}>click</button>
      <div>{slider}</div>
    </div>
  }
}
export default SearchPage;