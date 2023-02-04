import React from "react"
import img1 from './images/h1.png'
import img2 from './images/h2.png'
import img3 from './images/h4.png'
import img4 from './images/h6.png'

const FeaturedCard = () => {
  return (
    <>
      <div className='contento grid5 mtop'>
          <div className='box' >
            <img src={img1} alt='' />
            <h4>Terrain</h4>
            <label>houses total</label>
          </div>
          <div className='box' >
            <img src={img2} alt='' />
            <h4>Terrain Agricole</h4>
            <label>houses total</label>
          </div>
          <div className='box' >
            <img src={img3} alt='' />
            <h4>Appartement</h4>
            <label>houses total</label>
          </div>
          <div className='box' >
            <img src={img4} alt='' />
            <h4>Maison</h4>
            <label>houses total</label>
          </div>
          <div className='box' >
            <img src={img1} alt='' />
            <h4>Bungalow</h4>
            <label>houses total</label>
          </div>
      </div>
    </>
  )
}

export default FeaturedCard
