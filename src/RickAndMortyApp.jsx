import React, { useEffect, useState } from "react";
import Character from "./componentes/Character";
import { useSearchParams } from "react-router-dom";

function RickAndMortyApp() {
  const [personaje, setPersonaje] = useState([]);
  const [episodios, setEpisodio] = useState([]);
  let [searchParams, setSearchParams] = useSearchParams();
const id=searchParams.get("id")

  useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/character/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setPersonaje(data);
        /* console.log(data); */
        fetchEpisodes(data.episode.slice(0, 4));
      });
  }, []);

  const fetchEpisodes = (episodesUrls) => {
    const promises = episodesUrls.map((url) =>
      fetch(url).then((res) => res.json())
    );

    Promise.all(promises)
      .then((episodios) => {
        setEpisodio(episodios);
/*         console.log(episodios);*/      })
      .catch((error) => console.error(error));
  };

  return (
    <>
      {personaje && (
        <Character
          key={personaje.id}
          personaje={personaje}
          episodios={episodios}
        />
      )}
    </>
  );
}

export default RickAndMortyApp;
/* import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import Userdetails from "./componentes/Userdetails";
import "./componentes/Card.css";

function rickAndMortyApp({ character }) {
  const [episodes, setEpisodes] = useState([]);
  useEffect(() => {
    Promise.all(character.episode.map(url => fetch(url)))
      .then(responses => Promise.all(responses.map(res => res.json())))
      .then(episodesData => {
        const filledEpisodes = episodesData.concat(
          Array.from({ length: Math.max(0, 4 - episodesData.length) }).fill({})
        );
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

export default rickAndMortyApp;
 */