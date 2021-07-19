import React from "react";
import "./Card.css";
import CardList from "./CardList";

const Card = () => {
  return (
    <div className="card-container">
      <h1>Robots</h1>
      <input
        placeholder="Search robots
  "
      />
      <CardList />
    </div>
  );
};

export default Card;
