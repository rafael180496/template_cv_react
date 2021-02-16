import React from "react";

const SocialCard = ({
  name = "",
  icon = "",
  text = "",
  link = "!#",
  action = () => {},
}) => {
  return (
    <li className="nav-item">
      <a className="nav-link" href={link} title={name} onClick={action}>
        <i className={icon}>{text}</i>
        <span className="menu-title sr-only">{name}</span>
      </a>
    </li>
  );
};

export default SocialCard;
