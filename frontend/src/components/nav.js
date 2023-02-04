import react from 'react';
import {Component} from 'react';
import {  GoogleLogout } from 'react-google-login';
import { AuthManager } from '../Controllers/authManager';
import './style/nav.css';

const clientId = '599313117054-mm6kj6ljvd0frt6553sgbqqcmq6mahqf.apps.googleusercontent.com';



class Nav extends Component{
  logOut(){
    console.log('logout')
   const authManager=new AuthManager();
   authManager.logOut();
   
  };
    
  searchBtnHandler()
  {
    window.location='/searchPage'
  }
  addBtnHandler()
  {
    window.location='/ajouterAnnonce';
  }
  profileBtnHandler()
  {
    window.location='/Profile'
  }

  notificationBtnHandler()
  {
    window.location='/notifications'
  }

  homeBtnHandler()
  {
    window.location='/pageuser'
  }

  render()
  {
    return <>
    <header>
        <div className='con flexx'>
          <div onClick={this.homeBtnHandler} className='logo'>
            Estate.io
          </div>
          <div className='button flexx'>
          <i onClick={this.addBtnHandler}  class="fa-solid fa-circle-plus"></i>
          <i onClick={this.notificationBtnHandler} class="fa-solid fa-comment"></i>
          <i onClick={this.profileBtnHandler}  class="fa-solid fa-circle-user"></i>
          <GoogleLogout clientId={clientId} buttonText="Log out" onLogoutSuccess={this.logOut} onFailure={console.log("fail")}/>
          </div>   
        </div>
      </header>
    </>}


}
export default Nav;