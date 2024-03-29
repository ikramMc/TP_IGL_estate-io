
import { Component } from 'react';
import './style/profileBody.css'
import pfp from './images/profilepic.png'
import AnnoncesSlider from './AnnoncesSlider';
import {  GoogleLogout } from 'react-google-login';
import { AuthManager } from '../Controllers/authManager';
import Heading from './Heading';

class ProfileBody extends Component{
    constructor()
    {
        super();
        this.state={
            biens:JSON.parse(window.localStorage.getItem("biens")),
            user:JSON.parse(window.localStorage.getItem("user")),
            annonces:JSON.parse(window.localStorage.getItem("annonces")).filter(annonce=>annonce.user===JSON.parse(window.localStorage.getItem("user")).id),
        }
       
    }
    
    logOut(){
        const authManager=new AuthManager();
        authManager.logOut();
        
       };
    checkMsg(){
        window.location='/notifications';
    }   
  render()
  {  console.log(this.state.annonces)
    console.log(this.state.biens)
    return <div class='profile-body'>
        <div class='profile'>
            <div class='profile-pic profile-content'>
                <img src={pfp} class='pfp'/>
            </div>
            <div class='profile-info '>
                <div class='profile-name'>{this.state.user.nom+"  "+this.state.user.prenom}</div>
                <div class='profile-text'>{this.state.user.email}</div>
                <div class='profile-text'>{this.state.user.tel}</div>
                <div class='btns'>
                    <button class='modify-btn' onClick={this.checkMsg}>Consulter messages</button>
                    <button class='modify-btn'>Modifier mon profile</button>
                </div>
            </div>
        </div>
        <div class='profile-line'></div>
        <br></br>
        <br></br>
        <Heading title='Mes annonces' subtitle='' />
        <br></br>
        <AnnoncesSlider annonces={this.state.annonces} bienImob={this.state.biens}/>
    </div>

  }


}

export default ProfileBody;
