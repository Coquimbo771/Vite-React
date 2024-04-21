import React from "react";
import "./Episodes.css";

const Episode = ({ episodios }) => {
  return (
    <div className="episodio">
      {episodios.map((episodio) => (
        <div key={episodio.id} className="episodioNea">
          <h4>Nombre: {episodio.name} </h4>
          <h4>Episodio: {episodio.episode} </h4>
          <h4>Fecha: {episodio.air_date} </h4>
        </div>
      ))}
    </div>
  );
};

export default Episode;