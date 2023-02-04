import React from "react"
import im from './images/banner2.jpg';

const Back = () => {
  return (
    <>
      <div className='back'>
        <div className='con'>
          <span>Remplire les champs pour creer une annonce.</span>
          <h1>Ajouter une annonce</h1>
        </div>
        <img className ='imgback' src={im} alt='' />
      </div>
    </>
  )
}

export default Back
