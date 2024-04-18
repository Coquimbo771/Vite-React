import React, { useEffect, useState } from "react";
import "./App.css";
import Card from "./componentes/Card.jsx";

function App() {
  const [characters, setCharacters] = useState([]);
  useEffect(() => {
    function generarNumerosAleatorios(cantidad, min, max) {
      const numerosAleatorios = [];
      while (numerosAleatorios.length < cantidad) {
        const numero = Math.floor(Math.random() * (max - min + 1)) + min;
        if (!numerosAleatorios.includes(numero)) {
          numerosAleatorios.push(numero);
        }
      }
      return numerosAleatorios.join(",");
    }
    const numerosAPI = generarNumerosAleatorios(8, 1, 800);
    const apiUrl = `https://rickandmortyapi.com/api/character/${numerosAPI}`;
    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        setCharacters(data);
      })
      .catch((error) => {
        console.error('Error al obtener datos de la API:', error);
      });
  }, []);
  return (
    <div className="App">
      {characters.map((character) => (
        <Card key={character.id} character={character} />
      ))}
    </div>
  );
}

export default App;
