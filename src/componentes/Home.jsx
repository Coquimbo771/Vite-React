import React, { useEffect, useState } from "react";
import Card from "./Card.jsx";

function Home() {
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
    const numerosAPI = generarNumerosAleatorios(10, 1, 800);
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
export default Home;
/* import React,{useEffect,useState}  from "react";
import Card from "./Card";

const Home = () => {
    const [characters, setCharacters]=useState([]);
 useEffect(() => {
    fetchRandomCharacters();
  }, []);

  const fetchRandomCharacters = () => {
    const randomIds = generateRandomIds(10, 826);
    const promises = randomIds.map((id) =>
      fetch(`https://rickandmortyapi.com/api/character/${id}`).then((res) =>
        res.json()
      )
    );

    Promise.all(promises).then((data) => {
      setCharacters(data);
    });
  };

  const generateRandomIds = (count, maxId) => {
    const ids = [];
    while (ids.length < count) {
      const randomId = Math.floor(Math.random() * (maxId + 1));
      if (!ids.includes(randomId)) {
        ids.push(randomId);
      }
    }
    return ids;
  };

  return (
    <>
      {characters.map((character, index) => (
        <Card key={index} character={character} />
      ))}
    </>
  );
};
export default Home; */
