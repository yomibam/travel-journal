import React from "react";

export default function Card(props) {
  return (
    <div className="card">
      <img
        src={require(`../images/${props.img}`)}
        alt="location img"
        className="location--photo"
      />
      <div className="card--stats">
        <div className="first-line">
          <img
            src={require(`../images/location-icon.png`)}
            alt="location icon"
            className="location--icon"
          />
          <span className="country--name">{props.location}</span>
          <a href={`${props.map}`} className="map--link">
            Vi on Google Maps
          </a>
        </div>

        <span className="location--name">{props.title}</span>
        <span className="travel--date">{`${props.startDate} - ${props.endDate}`}</span>
        <span>{props.description}</span>
      </div>
    </div>
  );
}
