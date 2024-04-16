import React from 'react'
import Userdetails from './Userdetails.jsx'
import Buttonseccion from './Buttonseccion.jsx'
import "./Card.css"

function Card(props) {
  const user=props.user
  const socialLinks=user["Social-links"];
  console.log(user);
  return (
    <div className="container">
      <Userdetails user={user} />
      <Buttonseccion socialLinks={socialLinks} />
    </div>
  )
}

export default Card
