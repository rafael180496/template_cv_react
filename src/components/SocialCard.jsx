import React from "react";

const SocialCard = ({ name = "", icon = "", text = "", link = "", delay = 0 }) => {
  const getHoverColor = () => {
    if (name.toLowerCase().includes('github')) return 'hover:bg-gray-700 hover:text-white';
    if (name.toLowerCase().includes('linkedin')) return 'hover:bg-blue-600 hover:text-white';
    if (name.toLowerCase().includes('twitter')) return 'hover:bg-blue-400 hover:text-white';
    return 'hover:bg-primary-600 hover:text-white';
  };

  return (
    <a 
      href={link} 
      title={name}
      target="_blank"
      rel="noopener noreferrer"
      className={`
        w-10 h-10 rounded-full flex items-center justify-center
        bg-gray-100 text-gray-600 transition-all duration-200
        hover:scale-110 hover:shadow-lg transform
        ${getHoverColor()}
        focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2
      `}
      data-aos="zoom-in"
      data-aos-delay={delay}
      data-aos-duration="400"
    >
      <i className={`${icon} text-sm`}>
        {text && <span className="ml-1 text-xs">{text}</span>}
      </i>
      <span className="sr-only">{name}</span>
    </a>
  );
};

export default SocialCard;
