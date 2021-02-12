import React from "react";

const SocialCard = ({ name = "", icon = "", link = "" }) => {
  return (
    <li className="nav-item">
      <a className="nav-link" href={link} title={name}>
        <i className={icon}></i>
        <span className="menu-title sr-only">{name}</span>
      </a>
    </li>
  );
};

export default SocialCard;
