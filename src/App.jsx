// App.jsx
import React, { useEffect, useState } from "react";
import "./App.css";
import Card from "./componentes/Card.jsx";

function App() {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    // Generar 8 números aleatorios entre 1 y 800
    const randomNumbers = Array.from({ length: 8 }, () => Math.floor(Math.random() * 800) + 1);
    const characterURLs = randomNumbers.map(number => `https://rickandmortyapi.com/api/character/${number}`);
    
    // Realizar las solicitudes a la API para obtener los personajes
    Promise.all(characterURLs.map(url => fetch(url)))
      .then(responses => Promise.all(responses.map(res => res.json())))
      .then(charactersData => {
        setCharacters(charactersData);
      })
      .catch(error => console.error("Error fetching characters:", error));
  }, []);

  return (
    <div className="App">
      {characters.map(character => (
        <Card key={character.id} character={character} />
      ))}
    </div>
  );
}

export default App;
