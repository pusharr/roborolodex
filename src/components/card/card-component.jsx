import React from "react";
import "./card.styles.css";

function Card(props) {

  return (
    <div className="card-container">
      <img
        src={`https://robohash.org/${props.monster.id}?set=set3&size=180x180`}
        alt="kitty picture"
      />
      <h2>{props.monster.name}</h2>
      <div>
      {props.monster.email}
      <div>{props.monster.address.city}</div>
      </div>
    </div>
  );
}

export default Card;
