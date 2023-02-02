import react from 'react';
import {Component} from 'react';
import Nav from './nav';
import Footer from './footer';
import HomeBody from './homeBody';
import {  GoogleLogout } from 'react-google-login';
import { gapi } from 'gapi-script';
import { AuthManager } from '../Controllers/authManager';
const clientId = '599313117054-mm6kj6ljvd0frt6553sgbqqcmq6mahqf.apps.googleusercontent.com';
class HomePage extends Component{
  logOut(){
   const authManager=new AuthManager();
   authManager.logOut();
   
  };
  render()
  {
    return <div>
        <GoogleLogout clientId={clientId} buttonText="Log out" onLogoutSuccess={this.logOut} onFailure={console.log("fail")}/>
        <Nav/>
        <HomeBody/>
        <Footer/>
        </div>
  }


}
export default HomePage;