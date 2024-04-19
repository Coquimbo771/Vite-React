import React, { useEffect, useState } from "react";
import "./App.css";
import Card from "./componentes/Card.jsx";

function App() {
  const [characters, setCharacters] = useState([]);
  useEffect(() => {
    const randomNumbers = Array.from({ length: 8 }, () => Math.floor(Math.random() * 800) + 1);
    const characterURLs = randomNumbers.map(number => `https://rickandmortyapi.com/api/character/${number}`);
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
