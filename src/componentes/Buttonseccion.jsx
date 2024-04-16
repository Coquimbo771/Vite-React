import React from 'react';
import "./Buttonseccion.css";

const Buttonseccion = ({ socialLinks }) => {
  return (
    <div className="social-buttons">
      {socialLinks.map(socialLink => (
        <a 
          key={socialLink.name} 
          href={socialLink.URL} 
          className="social-button"
          target="_blank" 
          rel="noopener noreferrer"
        >
          {socialLink.name}
        </a>
      ))}
    </div>
  )
}

export default Buttonseccion;
