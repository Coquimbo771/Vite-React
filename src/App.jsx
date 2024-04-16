import React, { useEffect, useState } from "react";
import "./App.css";
import Card from "./componentes/Card.jsx";

function App() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch("https://661037cf0640280f219c98d3.mockapi.io/api/v2/users")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setUsers(data);
        console.log(data);
      });
  }, []);
  return (
    <>
      {users.map((user) => (
        <Card key={user.id} user={user}/>
      ))}
    </>
  );
}

export default App;
