import React from "react";
import AboutContent from "./AboutContent";
import CoverContent, { CoverPDF } from "./CoverContent";
import SkillContent from "./SkillContent";
import WorkContent from "./WorkContent";
import skillsData from "../assets/skills.json";

const BodyContent = ({ datalang }) => {
  const { info, titles } = datalang;
  return (
    <div className="page-content">
      <div className="container">
        <div className="cover shadow-lg bg-white">
          <CoverContent name={info.name} post={info.post}></CoverContent>
          <AboutContent info={info} titles={titles}></AboutContent>
          <hr className="d-print-none" />
          <SkillContent
            skills={skillsData.language_skills}
            title={titles.skilleng}
          ></SkillContent>
          <hr className="d-print-none" />
          <SkillContent
            skills={skillsData.lib_skills}
            title={titles.skilfra}
            color="success"
          ></SkillContent>
          <hr className="d-print-none" />
          <WorkContent
            title={titles.workt}
            works={info.workitems}
          ></WorkContent>
          <hr className="d-print-none" />
          <WorkContent
            title={titles.edugt}
            works={info.educationitems}
            color="success"
          ></WorkContent>
        </div>
      </div>
    </div>
  );
};

export const BodyPDF = ({ datalang }) => {
  const { info, titles } = datalang;
  return (
    <>
      <CoverPDF name={info.name} post={info.post}></CoverPDF>
      <AboutContent info={info} titles={titles}></AboutContent>
      <SkillContent
        skills={skillsData.language_skills}
        title={titles.skilleng}
      ></SkillContent>
      <SkillContent
        skills={skillsData.lib_skills}
        title={titles.skilfra}
        color="success"
      ></SkillContent>
      <WorkContent title={titles.workt} works={info.workitems}></WorkContent>
      <WorkContent
        title={titles.edugt}
        works={info.educationitems}
        color="success"
      ></WorkContent>
    </>
  );
};

export default BodyContent;
