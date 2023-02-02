import React from 'react'
import image from './images/habobi.jpg'
import './style/popup.css'

const popup = ({open, onClose}) => {
  if (!open) return null
  return (
    <>
        <div className="divo">
          <div className="modelContainer">
              <img src={image}></img>
              <div className="modalRight">
                  <p onClick={onClose} className="closeBtn">X
                  </p>
                  <div className="contentA">
                      <p>hello</p>
                      <h1>how are you</h1>
                      <p>ok ok ok</p>
                  </div>
              </div>
          </div>
        </div>
    </>
  )
}

export default popup