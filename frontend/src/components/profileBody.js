
import { Component } from 'react';
import './style/profileBody.css'
import pfp from './images/facebook.png'
import AnnoncesSlider from './AnnoncesSlider';
import {  GoogleLogout } from 'react-google-login';
import { AuthManager } from '../Controllers/authManager';
const clientId = '599313117054-mm6kj6ljvd0frt6553sgbqqcmq6mahqf.apps.googleusercontent.com';
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
            <div class='profile-info profile-content'>
                <div class='profile-name'>{this.state.user.nom+"  "+this.state.user.prenom}</div>
                <div class='profile-text'>{this.state.user.email}</div>
                <div class='profile-text'>{this.state.user.tel}</div>
                <div class='btns'>
                    <button onClick={this.checkMsg}>notification</button>
                    <button class='modify-btn'>Modifier mon profile</button>
                    <button class='deconnect-btn'>Déconnecter</button>
                    <GoogleLogout clientId={clientId} buttonText="Log out" onLogoutSuccess={this.logOut} onFailure={console.log("fail")}/>
                </div>
            </div>
        </div>
        <div class='profile-line'></div>
        <h1 className='h11'>Mes annonces</h1>
        <AnnoncesSlider annonces={this.state.annonces} bienImob={this.state.biens}/>
    </div>

  }


}

export default ProfileBody;