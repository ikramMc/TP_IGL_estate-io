import react from 'react';
import {Component} from 'react';

import './nav.css';

class Nav extends Component{
    
  render()
  {
    return <div>
    <div class="nav-elements" >
            <div class='nav-element resp'>
          
            </div>
            <div class='nav-icons'>
            <div class='resp'><button class='nav-btn'><i class="fa-regular fa-comment nav-icon"></i></button></div>
            <div class='resp'><button class='nav-btn'><i class="fa-regular fa-circle-user nav-icon"></i></button></div>
            </div>
    </div > 
    <div class='nav-line'>
    
    </div>  
    </div>
  }


}
export default Nav;