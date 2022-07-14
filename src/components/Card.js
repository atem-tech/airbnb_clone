import React from "react";
import "../style.css";

function Card(props) {
  return (
    <div className="card">
      <img
        src={`../cardImages/${props.img}`}
        className="card--image"
        alt="cardImages"
      />
      <div className="card--stats">
        <img
          src="../cardImages/star.png"
          className="card--star"
          alt="starIcon"
        />
        <span>{props.rating}</span>
        <span className="gray">({props.reviewCount}) • </span>
        <span className="gray">{props.location}</span>
      </div>
      <p className="card--title">{props.title}</p>
      <p className="card--price">
        <span className="bold">From ${props.price}</span> /person
      </p>
    </div>
  );
}
export default Card;
