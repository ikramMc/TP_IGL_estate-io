import react from 'react';
import {Component} from 'react';
import './style/nav.css';

class Nav extends Component{
    
  render()
  {
    return <div id='navbar'>
    <div class="nav-elements" >
            <div class='nav-element resp'>
           
            </div>
            <div class='nav-icons'>
            <div class='resp'><button class='nav-btn'><i class="fa-regular fa-comment nav-icon"></i></button></div>
            <div class='dropdown resp'>
              <button class='nav-btn'><i class="fa-regular fa-circle-user nav-icon"></i></button>
              <div class="dropdown-content">
                  <a href="#">Visiter mon profile</a>
                  <a href="#">Modifer mon profile</a>
                  <a href="#">Se déconnecter</a>
                </div>
            </div>
            </div>
    </div > 
    <div class='nav-line'>
    
    </div>  
    </div>
  }


}
export default Nav;