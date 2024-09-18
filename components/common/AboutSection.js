import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function AboutSection({ title, text, className, icon }) {
  return (
    <div className="about-feature-item style2 margin-20">
          <FontAwesomeIcon icon={icon} className="about-section-icon" />
        <div className="about-feature-text">
          <h4>{title}</h4>
          <p>{text}</p>
        </div>
    </div>
  );
}
