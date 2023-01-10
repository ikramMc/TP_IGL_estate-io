import React, {  Component } from 'react';
import { GoogleLogin, GoogleLogout } from 'react-google-login';
import { gapi } from 'gapi-script';
import "./Login.css";
import NavBarLogin from './NavBarLogin';
import Footer from './footer';
import Apropos from './Apropos';
import HomePage from './homePage'
import { useNavigate } from 'react-router-dom';

const clientId = '599313117054-mm6kj6ljvd0frt6553sgbqqcmq6mahqf.apps.googleusercontent.com';
class App extends Component {
  constructor(){
    super();
    this.state={profile:false,} 
    const initClient = () => {
      gapi.client.init({
          clientId: clientId,
          scope: ''
      });};
      gapi.load('client:auth2', initClient); }
    /*const [ profile, setProfile ] = useState([]);
   
    useEffect(() => {
        const initClient = () => {
            gapi.client.init({
                clientId: clientId,
                scope: ''
            });
        };
        gapi.load('client:auth2', initClient);
    });*/

     onSuccess(res)  {
      fetch('http://127.0.0.1:8000/User/',{
        method:'POST',
        headers:{
            'Accept':'application/json',
            'Content-Type':'application/json',
        },
        body:JSON.stringify({
            userId:null,
            nom:res['wt']['uT'],
            prenom:res['wt']['rV'],
            email:res['wt']['cu'],
            tel:null,
            adresse:null,
        })
    }).then(response=>response.json())
    .then((result)=>{
        alert(result);
        window.location = '/pageuser'
        console.log('hello')
    },
    (error)=>{
        alert("Failed to add announce");
        
    });
      //create row in database using Userapi 
      //navigate to home  page and send user data to it
    
    }

   onFailure(err){
        console.log('failed', err);
        //give the user a message
    }

     logOut(){
      console.log("logout");
      //navigate to before 
        //setProfile(null);
    };
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
                <a href="" className="Seconnecter">Se connecter avec google</a>
                {this.state.profile ? (
                <div>
                   
                    <h3>User Logged in</h3>
                    <br />
                    <GoogleLogout clientId={clientId} buttonText="Log out" onLogoutSuccess={this.logOut} />
                </div>
            ) : (
                <GoogleLogin
                    clientId={clientId}
                    buttonText="se connecter"
                    onSuccess={this.onSuccess}
                    onFailure={this.onFailure}
                    cookiePolicy={'single_host_origin'}
                    isSignedIn={true}
                />
            )}
            </div>
            <Apropos />
            <Footer />
        </div>
    }
}
export default App;