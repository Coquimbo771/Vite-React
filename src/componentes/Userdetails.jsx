import React from 'react'
import "./Userdetails.css"

const Userdetails = () => {
  return (
    <div className="profile-card">
          <img className="profile-img" src="./public/avatar-jessica.jpeg" alt="Foto de perfil"></img>
          <h2 className="profile-title">Jessica Randall</h2>
          <h5 className="location">London, United Kingdom</h5>
          <h5 className="profile-subtitle">Front-end developer and avid reader</h5>
    </div>
  )
}

export default Userdetails