import React from "react"
import Heading from "./Heading"
import "./style/Featured.css"
import FeaturedCard from "./FeaturedCard"

const Featured = () => {
  return (
    <>
      <section className='featured background'>
        <div className='con'>
          <Heading title='Types Du Bien Immobilier' subtitle='Consulter tous les types des biens immobiliers.' />
          <FeaturedCard />
        </div>
      </section>
    </>
  )
}

export default Featured
