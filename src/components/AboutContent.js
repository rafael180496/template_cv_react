import React from "react";

const Aboutme = ({ titles, info }) => {
  return (
    <div
      className="col-md-6"
      data-aos="zoom-in-right"
      data-aos-delay="100"
    >
      <h2 className="h3 mb-3">{titles.about}</h2>
      <p>{info.aboutme}</p>
    </div>
  );
};

const CardInfo = ({ title, val, delay }) => {
  return (
    <>
      <div
        className="col-sm-4"
        data-aos="zoom-in-right"
        data-aos-delay={delay}
      >
        <div className="pb-1">{title}</div>
      </div>
      <div
        className="col-sm-8"
        data-aos="zoom-in-right"
        data-aos-delay={delay}
      >
        <div className="pb-1 text-secondary">{val}</div>
      </div>
    </>
  );
};
const CardInfoArray = ({ aboutmeitems }) => {
  return (
    <div className="col-md-5 offset-md-1">
      <div className="row mt-2">
        {aboutmeitems.map((item, i) => {
          return (
            <CardInfo
              key={i}
              delay={i * 100}
              title={item.title}
              val={item.val}
            ></CardInfo>
          );
        })}
      </div>
    </div>
  );
};

const AboutContent = ({ titles, info }) => {
  const { aboutmeitems } = info;
  return (
    <div className="about-section pt-1 px-sm-3 px-5 mt-5">
      <div className="row">
        <Aboutme titles={titles} info={info}></Aboutme>
        <CardInfoArray aboutmeitems={aboutmeitems}></CardInfoArray>
      </div>
    </div>
  );
};

export default AboutContent;
