import React from "react"
import im from './images/banner2.jpg';

const BackSearch = () => {
  return (
    <>
      <div className='back'>
        <div className='con'>
          <span>Vous pouvez rechercher des annonces en introduisant des mots clés, puis faire des filtres sur les résultats de la recherche.</span>
          <h1>Rechercher des annnonces</h1>
        </div>
        <img className ='imgback' src={im} alt='' />
      </div>
    </>
  )
}

export default BackSearch
