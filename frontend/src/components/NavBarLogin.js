 import React,{useState} from 'react';
 import { Component } from 'react';
 import "./NavBarLogin.css";
 import { BrowserRouter , Route} from 'react-router-dom';
 import { Link } from 'react-router-dom';

 
export class NavBarLogin extends Component{
  render () {
   return (
     <>
        <nav className="navbarlogin">
        <a href="index.html" className="nav_Logo">Estate.io</a>
               <div className="nav_Menu">
                   <ul className="navlist_Grid">
                      <li className="nav_item">
                        <a href="/slider" className="nav_link">Annonces</a>
                      </li>
                      <li className="nav_item">
                        <a href="" className="nav_linkAdmin">Admin</a>
                      </li>
                   </ul>
               </div>
        </nav>
     </>
   )
 }
}
 
 export default NavBarLogin;