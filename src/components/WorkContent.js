import React from "react";

const WorkCard = ({ work, emp, time, descrip, color, delay }) => {
  const styles = `timeline-card timeline-card-${color} card shadow-sm`;
  return (
    <div
      className={styles}
      data-aos="zoom-in-right"
      data-aos-delay={delay}
      data-aos-anchor=".skills-section"
    >
      <div className="card-body">
        <div className="h5 mb-1">
          {work}
          <span className="text-muted h6"> {emp}</span>
        </div>
        <div className="text-muted text-small mb-2">{time}</div>
        <div>{descrip}</div>
      </div>
    </div>
  );
};

const WorkContent = ({ works, title, color = "primary" }) => {
  return (
    <div className="work-experience-section px-3 px-lg-4">
      <h2 className="h3 mb-4">{title}</h2>
      <div className="timeline">
        {works.map((item, i) => {
          return <WorkCard {...item} color={color} key={i}></WorkCard>;
        })}
      </div>
    </div>
  );
};

export default WorkContent;
