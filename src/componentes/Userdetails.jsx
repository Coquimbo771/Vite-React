import React from "react";
import "./Userdetails.css";

const Userdetails = (props) => {
  const user=props.user;
  
  return (
    <div className="profile-card">
      <img
        className="profile-img"
        src={user.avatar}
        alt={`avatar de ${user.name}`}
      ></img>
      <h2 className="profile-title">{user.name}</h2>
      <h5 className="location">{user.location}</h5>
      <h5 className="profile-subtitle">{user.description}</h5>
    </div>
  );
};

export default Userdetails;
