import React from 'react'
import Userdetails from './Userdetails.jsx'
import Buttonseccion from './Buttonseccion.jsx'
import "./Card.css"

const Card = () => {
  return (
    <div className="container">
      <Userdetails/>
      <Buttonseccion/>
    </div>
  )
}

export default Card