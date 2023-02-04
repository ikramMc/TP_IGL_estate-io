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
import Footer from './footer';
import Nav from './nav';
import "./style/footertry.css";

import ProductImagesSlider from './product-images-slider';
//import { productImages } from './assets'
//import { useParams } from 'react-router-dom';
import withRouter from "./withRouter";
import React, { Component } from 'react';
//import MapPicker from 'react-google-map-picker'
import GoogleMapReact from 'google-map-react';
//import axios from 'axios'

class Try extends Component {
  constructor(props) {
    super();
    this.state = { userId: JSON.parse(window.localStorage.getItem('user')).id, annonce: JSON.parse(window.localStorage.getItem('annonces')).find((annonce) => annonce.annonceId == props.params.annonceId), bien: {}, Zoom: 10, owner: {}, images: [], isLoading: true, message: '' };
    this.refreshList = this.refreshList.bind(this);
    this.createmessage = this.createmessage.bind(this);
    this.retriveOwnerandImages = this.retriveOwnerandImages.bind(this);

  }
  onChangeZoom(newZoom) {
    this.setState({ Zoom: newZoom });
  }
  retriveOwnerandImages() {
    fetch('http://127.0.0.1:8000/User/')
      .then(response => response.json())
      .then(users => {
        this.setState({
          owner: users.find((user) => user.userId == this.state.annonce.user)

        })

        let formData = new FormData();
        axios.get('http://localhost:8000/Image/', formData, {
          headers: {
            'content-type': 'multipart/form-data'
          }
        }).then(res => {

          let images = [];

          for (let i = 0; i < res.data.length; i++) {
            if (res.data[i].bien == this.state.annonce.bien) images.push(res.data[i].image)

          }
          this.setState({ images: images, isLoading: false });


        })
          .catch(err => console.log(err))

      })


  }
  refreshList(callback) {

    this.setState({
      bien: JSON.parse(window.localStorage.getItem('biens')).find((bien) => bien.bienImmobilierId == this.state.annonce.bien)
    })
    callback();//synchronisation
  };

  componentDidMount() {
    this.refreshList(this.retriveOwnerandImages);

  }

  sendMessage(event) {
    //create anew row in message
  }
  createmessage(event) {
    event.preventDefault();
    fetch('http://127.0.0.1:8000/message/', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        msgId: null,
        emiteur: this.state.userId,
        recepteur: this.state.owner.userId,
        contenu: this.state.message,
      })
    }).then(response => response.json())
      .then((result) => {
        console.log(result);
      },
        (error) => {
          console.log("Failed");

        })
  }
  state = {
    isOpen: false
  };

  toggleModal = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };

  render() {
    const styles = {
      overlay: {
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: "rgba(0,0,0,0.5)"
      },
      modal: {
        position: "fixed",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        backgroundColor: "#fff",
        padding: 20
      },

    };
    const { children } = this.props;
    const { isOpen } = this.state;
    return (this.state.isLoading === false ?
      <div>
        <Nav />
        <div className="yo">
          <div className="yoyo">
            {this.state.images.length !== 0 ? <ProductImagesSlider images={this.state.images} /> : <div></div>}
          </div>


          <table className="invoice-table" >
            <thead>
              <tr>
                <td colSpan="2">
                  <i class="fa-solid fa-file"></i>  Informations sur l'annonce</td>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th>Titre</th>
                <td>{this.state.bien?.titre}</td>
              </tr>
              <tr>
                <th>Date de publication</th>
                <td>{this.state.annonce?.date}</td>
              </tr>
              <tr>
                <th>Surface</th>
                <td>{this.state.bien.surface}</td>
              </tr>
              <tr>
                <th>Description</th>
                <td>{this.state.bien.description}</td>
              </tr>
              <tr>
                <th>Wilaya</th>
                <td>{this.state.bien.wilaya}</td>
              </tr>
              <tr>
                <th>Commune</th>
                <td>{this.state.bien.commune}</td>
              </tr>
              <tr>
                <th>Adresse</th>
                <td> {this.state.bien.adresse}</td>
              </tr>

              <tr>
                <td colSpan="2" className='map'>
                  <div style={{ height: '50vh', width: '70%' }}>
                    <GoogleMapReact
                      bootstrapURLKeys={{ key: "AIzaSyD55lI3l65Vy6vvRL-sylk3hjJWy83iO3s" }}
                      defaultCenter={{ lat: this.state.bien?.latitude, lng: this.state.bien?.longitude }}
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
                </td>
              </tr>

            </tbody>
            <thead>
              <tr>
                <td colSpan="2">
                  <i class="fa-solid fa-user"></i>  Contact et coordonnees</td>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th>Nom</th>
                <td>{this.state.owner.nom} </td>
              </tr>
              <tr>
                <th>Prenom</th>
                <td>{this.state.owner.prenom}</td>
              </tr>
              <tr>
                <th>Adresse</th>
                <td>{this.state.owner.adresse}</td>
              </tr>
              <tr>
                <th>Email</th>
                <td>{this.state.owner.email}</td>
              </tr>
              <tr>
                <th>Numero de telephone</th>
                <td>{this.state.owner.tel}</td>
              </tr>

            </tbody>
            <thead>
              <tr>
                <td colSpan="2">
                  {this.state.owner.userId === this.state.userId ? <div></div> : <button className="button-75" role="button" onClick={this.toggleModal}><span className="text">Envoyer message</span></button>}
                  {isOpen && (
                    <div style={styles.overlay}>
                      <div style={styles.modal}>
                        {children}
                        <button className="closeBtn" onClick={this.toggleModal}>X</button>
                        <input type='text' className='inp' placeholder='ecrire votre message' onChange={event => this.setState({ message: event.target.value })} /><button className="button6" onClick={this.createmessage}>Envoyer</button>
                      </div>
                    </div>
                  )} </td>
              </tr>
            </thead>
          </table>
        </div>










        <Footer />
      </div>
      : <div>loading</div>);
  }

}
export default withRouter(Try);
