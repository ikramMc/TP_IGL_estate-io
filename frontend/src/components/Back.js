import React from "react"
import im from './images/banner2.jpg';

const Back = () => {
  return (
    <>
      <div className='back'>
        <div className='con'>
          <span>Ajouter annonce chabab</span>
          <h1>Remplire les champs hado</h1>
        </div>
        <img className ='imgback' src={im} alt='' />
      </div>
    </>
  )
}

export default Back
