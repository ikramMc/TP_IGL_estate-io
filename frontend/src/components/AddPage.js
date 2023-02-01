import { Component } from "react";
import React from "react";
import axios from "axios";
import Footer from './footer';
import Nav from './nav';
import "./AddPage.css"
import MapPicker from 'react-google-map-picker'
const DefaultLocation = { lat: 36.7, lng: 2.985};
const DefaultZoom = 10;

class AddPage extends Component{
     constructor()
     {
          super();
          this.state={
               location:DefaultLocation,
               Zoom:DefaultZoom,
               titre:null,adresse:null,commune:null,wilaya:'Adrar',images:[],bienimob:{id:'',titre:'',description:'',surface:'',prix:'',type:''}
          }
          this.handleChangeLocation=this.handleChangeLocation.bind(this);
          this.handleChangeZoom=this.handleChangeZoom.bind(this);
          this.render=this.render.bind(this)
          this.submitHandler=this.submitHandler.bind(this);
          this.createImage=this.createImage.bind(this);
          this.imageHandler=this.imageHandler.bind(this);
     }
     handleChangeLocation (newLat, newLng){
         this.setState({location:{lat:newLat,lng:newLng}});
        }
        
        handleChangeZoom (newZoom){
          this.setState({Zoom:newZoom});
        }
      
       /* handleResetLocation(){
          setDefaultLocation({ ...DefaultLocation});
          setZoom(DefaultZoom);
        }*/
        submitHandler(event)
        {  event.preventDefault();
          let id;
          fetch('http://127.0.0.1:8000/bienImob/',{
              method:'POST',
              headers:{
                  'Accept':'application/json',
                  'Content-Type':'application/json',
              },
              body:JSON.stringify({
                  bienImmobilierId:null,
                  titre:this.state.titre,
                  description:this.state.bienimob.description,
                  surface:this.state.bienimob.surface,
                  prix:this.state.bienimob.prix,
                  wilaya:this.state.wilaya,
                  commune:this.state.commune,
                  adresse:this.state.adresse,
                  latitude:this.state.location.lat,
                  longitude:this.state.location.lng,
                  type:this.state.type,
              })
          }).then(response=>response.json())
          .then((result)=>{
            id=result[1];
            this.createImage(id);
            this.createAnnonce(id)
              alert(result[0]);
             window.location.reload();
          },
          (error)=>{
              alert("Failed");
              window.location.reload();
          });
         
      
          
        }
        createAnnonce(id)
        { 
          let date=new Date();
          let dateexct=date.getFullYear()+'-'+date.getMonth()+1+'-'+date.getDate();
          fetch('http://127.0.0.1:8000/Annonce/',{
            method:'POST',
            headers:{
                'Accept':'application/json',
                'Content-Type':'application/json',
            },
            body:JSON.stringify({
                annonceId:null,
                date:dateexct,
                userId:JSON.parse(window.localStorage.getItem('user')).id,
                bienId:id,
                categorie:this.state.categorie,
            })
        }).then(response=>response.json())
        .then((result)=>{
            alert(result);
        },
        (error)=>{
            alert("Failed to add announce -_-");
            
        });
        }
        createImage(id)
        {
          let formData=new FormData();
          let images=this.state.images;
          for (var i=0;i<images.length;i++)
          { formData.append('image', images[i],images[i].name);
            formData.append('id', null);
            formData.append('bienid',id);
                let url = 'http://localhost:8000/Image/';
                axios.post(url, formData, {
                  headers: {
                    'content-type': 'multipart/form-data'
                  }
                }).then(res => {
                      console.log(res.data);
                    })
                    .catch(err => console.log(err))
                   
                  }   
      
        }
        imageHandler(event)
        {
         this.setState({images:event.target.files});
         
        }
  render()
  { const {wilayas_communes}= require('dz-communes');
  let wilayas=wilayas_communes.map(wilaya=>wilaya.name);
  let communes=wilayas_communes[wilayas.indexOf(this.state.wilaya)]["communes"];
  let categories=["vente","echnage","location","location pour vacances"];
   let types=["terrain","terrain agricole","appartement","vila","maison"];
  return  <div className="addpage">
  <Nav />
  <div  className="body">

      <div className="container">
      <div className="title">Ajouter une annonce</div>
      <form className="form">      
          
       <div className="partOne">
       <div className="titre">Informations sur l'annonce</div>
       <div className="fields">
          <div className="input-field">
               <label>Titre</label>
               <input type='text' placeholder="   titre" onChange={event=>this.setState({titre:event.target.value})} />
          </div>
          

          <div className="input-field">
               <label>Categorie</label>
               <select  className="categorie" onChange={event=>this.setState({categorie:event.target.value})}>
                 {categories.map((categorie)=>{return <option value={categorie}> {categorie}</option>
                  })}
               </select>
          </div>


          <div className="input-field">
               <label>Type</label>
               <select className="type" onChange={event=>this.setState(prevState=>({bienimob:{...prevState.bienimob,type:event.target.value}}))}>
               {types.map((type)=>{return <option value={type}> {type}</option>
                 })}
               </select>
          </div>


          <div className="input-field">
               <label>Wilaya</label>
               <select className="wilaya"  onChange={event=>this.setState({wilaya:event.target.value})}>
               {wilayas.map((wilaya)=>{return <option value={wilaya}> {wilaya}</option>
                })}
               </select>
          </div>


          <div className="input-field">
               <label>Commune</label>
               <select className="commune" onChange={event=>this.setState({commune:event.target.value})}>
               {communes.map((commune)=>{return <option value={commune["name"]}> {commune["name"]}</option>
                })}
               </select>
          </div>


          <div className="input-field">
               <label>Adresse</label>
               <input type='text' placeholder="    adresse" onChange={event=>this.setState({adresse:event.target.value})}/>
          </div>

          <MapPicker defaultLocation={this.state.location}
    zoom={this.state.Zoom}
    mapTypeId="roadmap"
    style={{height:'700px'}}
    onChangeLocation={this.handleChangeLocation} 
    onChangeZoom={this.handleChangeZoom}
    apiKey='AIzaSyD55lI3l65Vy6vvRL-sylk3hjJWy83iO3s'/>
          <div className="input-field">
               <label>Image</label>
               <input type='file' accept="image/*" multiple onChange={this.imageHandler}/>
          </div>
          


          <div className="input-field">
               <label>Surface</label>
               <input type='number' placeholder="     surface en metre carée" onChange={event=>this.setState(prevState=>({bienimob:{...prevState.bienimob,surface:event.target.value}}))}/>
          </div>


          <div className="input-field">
               <label>Description</label>
               <input type='text' placeholder="     description"onChange={event=>this.setState(prevState=>({bienimob:{...prevState.bienimob,description:event.target.value}}))}/>
          </div>



          <div className="input-field">
               <label>Prix</label>
               <input type='number' placeholder="    prix"onChange={event=>this.setState(prevState=>({bienimob:{...prevState.bienimob,prix:event.target.value}}))} />
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

          <button className="btnBtn" onClick={this.submitHandler}>Ajouter</button>
     </form>
     
  </div>
  
  </div>
  <Footer />
  </div>
  

  }
}
export default AddPage;