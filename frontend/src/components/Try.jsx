import './style/try.scss';
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/thumbs'
//import FooterTry from './footertry';
import lc from './images/location.png'
import pr from './images/person.png'
import ph from './images/phone.png'
import ma from './images/email.png'
import axios from "axios";
import "./style/footertry.css";

import ProductImagesSlider from './product-images-slider';
//import { productImages } from './assets'
//import { useParams } from 'react-router-dom';
import  withRouter  from "./withRouter";
import React,{  Component} from 'react';
//import MapPicker from 'react-google-map-picker'
import GoogleMapReact from 'google-map-react';
//import axios from 'axios'

class Try extends Component {
  constructor(props)
  {
    super();
    this.state={userId:JSON.parse(window.localStorage.getItem('user')).id,annonce:JSON.parse(window.localStorage.getItem('annonces')).find((annonce)=>annonce.annonceId==props.params.annonceId),bien:{},Zoom:10,owner:{},images:[],isLoading:true,message:''};
   // this.onChangeZoom=this.onChangeZoom.bind(this);
   this.refreshList=this.refreshList.bind(this);
    this.createmessage=this.createmessage.bind(this);
    this.retriveOwnerandImages=this.retriveOwnerandImages.bind(this);
  
  }
  retriveOwnerandImages()
  {
    fetch('http://127.0.0.1:8000/User/')
    .then(response => response.json())
    .then(users => {
        this.setState({
           owner:users.find((user)=>user.userId==this.state.annonce.user)
          
        })
      
        let formData=new FormData();
axios.get('http://localhost:8000/Image/', formData, {
  headers: {
    'content-type': 'multipart/form-data'
  }
}).then(res => {

  let images=[];
  
  for(let i=0;i<res.data.length;i++)
  {
    if(res.data[i].bien==this.state.annonce.bien)images.push(res.data[i].image)

  }
  this.setState({images:images,isLoading:false});
 
      
    })
    .catch(err => console.log(err))
     
    })

    
  }
  refreshList(callback){
   
       this.setState({
          bien:JSON.parse(window.localStorage.getItem('biens')).find((bien)=>bien.bienImmobilierId==this.state.annonce.bien)
       })
       callback();//synchronisation
      };

   componentDidMount(){
       this.refreshList(this.retriveOwnerandImages);
       
   }
   handleChangeZoom (newZoom){
    this.setState({Zoom:newZoom});
  }
  sendMessage(event){
    //create anew row in message
  }
  createmessage(event)
    {
      event.preventDefault();
      fetch('http://127.0.0.1:8000/message/',{
      method:'POST',
      headers:{
          'Accept':'application/json',
          'Content-Type':'application/json',
      },
      body:JSON.stringify({
         msgId:null,
         emiteurId:this.state.owner.userId,
         recepteurId:this.state.userId,
         contenu:this.state.message,
      })
  }).then(response=>response.json())
  .then((result)=>{
      console.log(result);
  },
  (error)=>{
      console.log("Failed");
      
  })
  }

render()
{
  return (this.state.isLoading===false?
   <div>
    <div className="yo">
        <div  className="yoyo">
          {this.state.images.length!==0? <ProductImagesSlider images={this.state.images} />:<div></div>}
        </div>
        <div className="contentdetails">
            <h1 className='bigtitle'>{this.state.bien.titre}</h1>
            <h1 className='bigtitle1'>{this.state.annonce.date}</h1>
            <p className='simpletext'>{this.state.annonce.Categorie}</p>
            <div className="trait_dessus"> </div>
            <p className='t1'>Surface</p>
            <p className='simpletext1' >{this.state.bien.surface}</p>
            <p className='t1'>Description</p> 
            <p className='simpletext1' >{this.state.bien.description}</p>
            <p className='t1'>Localisation</p>
            <p className='simpletext1'>Wilaya : {this.state.bien.wilaya}</p>
            <p className='simpletext1'>Commune : {this.state.bien.commune}</p>
            <p className='simpletext1'>Adresse : {this.state.bien.adresse}</p>
            <div style={{ height: '50vh', width: '70%' }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyD55lI3l65Vy6vvRL-sylk3hjJWy83iO3s" }}
        defaultCenter={{ lat:this.state.bien?.latitude, lng: this.state.bien?.longitude}}
        yesIWantToUseGoogleMapApiInternals="true"
        defaultZoom={15}
      >
         <div
       lat={this.state.bien?.latitude}
        lng={this.state.bien?.longitude}
        text="My Marker"
       ></div>
      </GoogleMapReact>
    </div>
      </div>
    </div>
    <div className="footer1">
        <div className="footer_container1">
            <h1 className="contactetcoord">
                Contact & coordonnees
            </h1>
           
            <div>
              <div className="footer_social1">
                <img src={pr} alt={"img"} className="icon1"></img> <a className='infoo'>{this.state.owner.nom} {this.state.owner.prenom}</a>
                <img src={ma} alt={"img"} className="icon1"></img> <a className='infoo'>{this.state.owner.email}</a>

                <img src={lc} alt={"img"} className="icon1"></img> <a className='infoo'>{this.state.owner.adresse}</a>
                <img src={ph} alt={"img"} className="icon1"></img> <a className='infoo'>{this.state.owner.tel}</a>
            </div>
            {this.state.owner.userId===this.state.userId?<div></div>:<div><button className="button-75" role="button" ><span className="text">Envoyer message</span></button>
            <input type='text' placeholder='write your message'onChange={event=>this.setState({message:event.target.value})}/><button onClick={this.createmessage}>send</button></div>}</div>
          
        </div>
      </div>
      
    </div>
  : <div>loading</div>);
}
}
export default withRouter(Try);
