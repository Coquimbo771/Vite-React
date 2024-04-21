import React from "react";
import Characterdescription from "./Characterdescription";
import Episode from "./Episodes";
import "./Character.css";
import { NavLink } from "react-router-dom";

const Character = ({ personaje, episodios }) => {
  return (
    <div className="personaje">
      <Characterdescription personaje={personaje} />
      <Episode episodios={episodios} />
      <NavLink to="/">
        <button className="home">Home</button>
      </NavLink>
    </div>
  );
};

export default Character;
/* // Character.jsx
import React from "react";
import "./Character.css";
import Characterdescription from "./Characterdescription";
import Episodes from "./Episodes";

const Character = ({ character }) => {
  return (
    <div className="character-container">
      <Characterdescription character={character} />
      <Episodes character={character} />
    </div>
  );
};

export default Character;
 */