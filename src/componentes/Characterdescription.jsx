import React from "react";
import "./Characterdescription.css";

const Characterdescription = ({ personaje }) => {
  return (
    <>
      <img className="profileImg" src={personaje.image} alt={`avatar de ${personaje.name}`} />
      <div className="descripcion">
        <h3>Nombre: {personaje.name} - Especie: {personaje.species}</h3>
        <h4>Estado: {personaje.status} - Género: {personaje.gender}</h4>
      </div>
    </>
  );
};

export default Characterdescription;
/* // Characterdescription.jsx
import React from "react";
import "./Characterdescription.css";

const Characterdescription = ({ character }) => {
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

export default Characterdescription;
 */