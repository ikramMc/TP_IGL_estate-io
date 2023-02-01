import React, {  Component } from 'react';
import { GoogleLogin } from 'react-google-login';
import { gapi } from 'gapi-script';
import "./Login.css";
import NavBarLogin from './NavBarLogin';
import Footer from './footer';
import Apropos from './Apropos';
//import HomePage from './homePage'
//import { useNavigate } from 'react-router-dom';
import { User } from './entities/User';
import { AuthManager } from '../Controllers/authManager';
const clientId = '599313117054-mm6kj6ljvd0frt6553sgbqqcmq6mahqf.apps.googleusercontent.com';
class App extends Component {
  constructor(){
    super();
    const initClient = () => {
      gapi.client.init({
          clientId: clientId,
          scope: ''
      });};
      gapi.load('client:auth2', initClient); }

     onSuccess(userInfo)  {
        const authManager=new AuthManager()
        let user=new User(null,userInfo['wt']['cu'],userInfo['wt']['uT'],userInfo['wt']['rV']);
     authManager.login(user);
     console.log(user);
  
    }

   onFailure(err){
        console.log('failed', err);
        //give the user a message
    }

    
    render(){
    return <div>
            <NavBarLogin />
            <div className="content">
                <p className='txt-first'>Bienvenue dans Estate.io</p>
                <div className='textone'>
                    Bienvenue dans Estate.io
                </div>
                    <h1>Publiez et consultez des annonces immobilières gratuitement !</h1>
                <p>
                    text text texte ettgfhdghgfhdstext text t
                </p>
                <GoogleLogin
                    clientId={clientId}
                    buttonText="se connecter"
                    onSuccess={this.onSuccess}
                    onFailure={this.onFailure}
                    cookiePolicy={'single_host_origin'}
                    isSignedIn={true}
                />
            </div>
            <Apropos />
            <Footer />
        </div>
    }
}
export default App;