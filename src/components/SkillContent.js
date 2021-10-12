import React from "react";

const CardSkill = ({ title, val, delay, color }) => {
  const styles = `progress-bar bg-${color}`;
  return (
    <div className="col-sm-6 col-md-4">
      <span>{title}</span>
      <div className="progress my-1">
        <div
          className={styles}
          role="progressbar"
          data-aos="zoom-in-right"
          data-aos-delay={delay}
          data-aos-anchor=".skills-section"
          style={{
            width: `${val}%`,
          }}
          aria-valuenow={val}
          aria-valuemin="0"
          aria-valuemax="100"
        >{val}%</div>
      </div>
    </div>
  );
};
const SkillContent = ({ skills, title, color = "primary" }) => {
  return (
    <div className="skills-section px-3 px-lg-4">
      <h2 className="h3 mb-3">{title}</h2>
      <div className="row">
        {skills.map((item, i) => {
          return (
            <CardSkill
              key={i}
              delay={i * 100}
              title={item.title}
              val={item.val}
              color={color}
            ></CardSkill>
          );
        })}
      </div>
    </div>
  );
};

export default SkillContent;
