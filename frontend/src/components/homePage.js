import react from 'react';
import {Component} from 'react';
import Nav from './nav';
import Footer from './footer';
import HomeBody from './homeBody';
import {  GoogleLogout } from 'react-google-login';
import { gapi } from 'gapi-script';
import { AuthManager } from '../Controllers/authManager';

class HomePage extends Component{
  logOut(){
   const authManager=new AuthManager();
   authManager.logOut();
   
  };
  render()
  {
    return <div>
        <Nav/>
        <HomeBody/>
        <Footer/>
        </div>
  }


}
export default HomePage;
