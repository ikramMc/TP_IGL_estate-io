import react from 'react';
import {Component} from 'react';
import logo from './images/facebook.png';

import './style/nav.css';

class NavP extends Component{
    
  render()
  {
    return <div>
    <div class="nav-elements" >
            <div class='nav-element resp'>
            <img src={logo} class='logo'/>
            </div>
            <div class='nav-icons'>
            <div class='resp'><button class='nav-btn'><i class="fa-regular fa-comment nav-icon"></i></button></div>
            <div class='resp'><button class='nav-btn'><i class="fa-solid fa-house nav-icon"></i></button></div>
            </div>
    </div > 
    <div class='nav-line'>
    
    </div>  
    </div>
  }


}
export default NavP;