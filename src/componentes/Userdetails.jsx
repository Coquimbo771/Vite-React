import React from "react";
import "./Userdetails.css";

const Userdetails = ({ character }) => {
  return (
    <div className="profile-card">
      <img
        className="profile-img"
        src={character.image}
        alt={`avatar de ${character.name}`}
      ></img>
      <h2 className="profile-title">{character.name}</h2>
      <h5 className="location">{character.location.name}</h5>
      <h5 className="species">{character.species}</h5>
    </div>
  );
};

export default Userdetails;
