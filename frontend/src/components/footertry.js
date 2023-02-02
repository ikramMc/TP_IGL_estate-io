import React from 'react'
import { Component } from 'react';
import lc from './images/location.png'
import pr from './images/person.png'
import ph from './images/phone.png'
import ma from './images/email.png'
import "./style/footertry.css";
export class footertry extends Component {
  render() {
  return (
    <>
      <div className="footer1">
        <div className="footer_container1">
            <h1 className="contactetcoord">
                Contact & coordonnees
            </h1>
            <div className="footer_social1">
                <img src={pr} className="icon1"></img> <a className='infoo'>Filali Sara</a>
                <img src={ma} className="icon1"></img> <a className='infoo'>Js_filali@esi.dz</a>
                <img src={lc} className="icon1"></img> <a className='infoo'>Ain Salah</a>
                <img src={ph} className="icon1"></img> <a className='infoo'>0727872823</a>
            </div>

            <button class="button-75" role="button" ><span class="text">Envoyer message</span></button>
        </div>
      </div>
    </>
  )
}
}

export default footertry
