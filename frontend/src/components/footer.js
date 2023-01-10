import React from 'react'
import { Component } from 'react';
import fb from './images/facebook.png'
import ig from './images/instagram.png'
import tw from './images/twitter.png'
import li from './images/linkedin.png'
import "./footer.css";

export class footer extends Component{
  render () {
  return (
    <>
      <div className="footer">
        <div className="footer_container">
            <h1 className="logo">
                Estate.io
            </h1>
            <p>NOUS SUIVRE</p>
            <div className="footer_social">
                <img src={fb} className="icon"></img>
                <img src={ig} className="icon"></img>
                <img src={tw} className="icon"></img>
                <img src={li} className="icon"></img>
            </div>
            <span className="footer_copy">
                &#169; 2022 estate.io tous droits réservés
            </span>
        </div>
      </div>
    </>
  )
 }
}

export default footer
