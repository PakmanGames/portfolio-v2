import React from "react";
import "./HoloCard.css";

const HoloCard = ({ children, className = "" }) => (
  <div className={`holo-card holo-card__content ${className}`}>
    {children}
    <div className="holo-card__shine"></div>
  </div>
);

export default HoloCard;