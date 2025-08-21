import React from "react";
import { getCurrentAge } from "../service/util";

const Aboutme = ({ titles, info }) => {
  return (
    <div
      className="lg:col-span-2"
      data-aos="fade-up"
      data-aos-delay="100"
    >
      <h2 className="section-title">{titles.about}</h2>
      <div className="max-w-none">
        <p className="text-gray-600 leading-relaxed whitespace-pre-line text-base">{info.aboutme}</p>
      </div>
    </div>
  );
};

const CardInfo = ({ title, val, delay, icon }) => {
  // Si el valor es "DYNAMIC_AGE", calculamos la edad actual
  const displayValue = val === "DYNAMIC_AGE" ? getCurrentAge() : val;

  return (
    <div
      className="contact-info"
      data-aos="fade-up"
      data-aos-delay={delay}
    >
      {icon && <i className={`${icon} text-primary-600 w-5 text-center`}></i>}
      <div className="flex-1">
        <span className="font-medium text-gray-700">{title}:</span>
        <span className="text-gray-600 ml-2">{displayValue}</span>
      </div>
    </div>
  );
};

const CardInfoArray = ({ aboutmeitems }) => {
  const iconMap = {
    'Edad': 'fas fa-birthday-cake',
    'Age': 'fas fa-birthday-cake',
    'Correo': 'fas fa-envelope',
    'Email': 'fas fa-envelope',
    'Telefono': 'fas fa-phone',
    'Phone': 'fas fa-phone',
    'Direccion': 'fas fa-map-marker-alt',
    'Address': 'fas fa-map-marker-alt',
    'Cedula': 'fas fa-id-card',
    'ID': 'fas fa-id-card'
  };

  return (
    <div className="lg:col-span-1">
      <h3 className="text-xl font-semibold text-gray-900 mb-4">Información de Contacto</h3>
      <div className="space-y-3">
        {aboutmeitems.map((item, i) => {
          return (
            <CardInfo
              key={i}
              delay={i * 100 + 200}
              title={item.title}
              val={item.val}
              icon={iconMap[item.title]}
            />
          );
        })}
      </div>
    </div>
  );
};

const AboutContent = ({ titles, info }) => {
  const { aboutmeitems } = info;
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
      <Aboutme titles={titles} info={info} />
      <CardInfoArray aboutmeitems={aboutmeitems} />
    </div>
  );
};

export default AboutContent;
