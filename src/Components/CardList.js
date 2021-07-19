import React from "react";
import "./CardLis.css";
import { Robots } from "./Robot";

const CardList = ({ name, email, id }) => {
  return (
    <div className="card-list-container">
      <div
        style={{
          backgroundImage: `url("https://robohash.org/2a06:98c0:3600::103.png")`,
        }}
        className="card"
        key={id}
      >
        <h1>{name}</h1>
        <p>{email}</p>
      </div>
      ))
    </div>
  );
};

export default CardList;
