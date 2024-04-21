import React from "react";
import Userdetails from "./Userdetails";
import "./Card.css";
import { NavLink } from "react-router-dom";

function Card({ character }) {
  return (
    <NavLink to={`/character?id=${character.id}`}>
      <div className="container">
        <Userdetails character={character} />
      </div>
    </NavLink>
  );
}

export default Card;
/* // Card.jsx
import React from 'react';
import Userdetails from './Userdetails.jsx';
import "./Card.css";

function Card({ character }) {
  return (
    <div className="container">
      <Userdetails character={character} />
    </div>
  );
}

export default Card;
 */
