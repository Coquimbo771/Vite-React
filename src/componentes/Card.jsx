// Card.jsx
import React, { useEffect, useState } from "react";
import Userdetails from "./Userdetails.jsx";
import "./Card.css";

function Card({ character }) {
  const [episodes, setEpisodes] = useState([]);

  useEffect(() => {
    // Obtener los datos de los episodios del personaje
    Promise.all(character.episode.map(url => fetch(url)))
      .then(responses => Promise.all(responses.map(res => res.json())))
      .then(episodesData => {
        // Llenar con objetos vacíos si hay menos de 4 episodios
        const filledEpisodes = episodesData.concat(
          Array.from({ length: Math.max(0, 4 - episodesData.length) }).fill({})
        );
        // Mostrar solo los primeros 4 episodios
        setEpisodes(filledEpisodes.slice(0, 4));
      })
      .catch(error => console.error("Error fetching episodes:", error));
  }, [character.episode]);

  return (
    <div className="container">
      <Userdetails character={character} />
      <div className="episodes-container">
        <h3>Episodes:</h3>
        <div className="episode-row">
          {episodes.map((episode, index) => (
            <div key={index} className="episode-card">
              {episode.name && (
                <>
                  <p className="episode-name">{episode.name}</p>
                  <p className="episode-episode">{episode.episode}</p>
                  <p className="episode-air-date">{episode.air_date}</p>
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Card;
