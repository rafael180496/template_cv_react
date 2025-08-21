import React from "react";
import AboutContent from "./AboutContent";
import CoverContent, { CoverPDF } from "./CoverContent";
import SkillContent from "./SkillContent";
import WorkContent from "./WorkContent";
import skillsData from "../assets/skills.json";

const BodyContent = ({ datalang }) => {
  const { info, titles } = datalang;
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="cv-container">
          <CoverContent name={info.name} post={info.post}></CoverContent>
          
          <div className="cv-section">
            <AboutContent info={info} titles={titles}></AboutContent>
          </div>
          
          <div className="cv-section bg-gray-50">
            <SkillContent
              skills={skillsData.language_skills}
              title={titles.skilleng}
            ></SkillContent>
          </div>
          
          <div className="cv-section">
            <SkillContent
              skills={skillsData.lib_skills}
              title={titles.skilfra}
              color="success"
            ></SkillContent>
          </div>
          
          <div className="cv-section bg-gray-50">
            <WorkContent
              title={titles.workt}
              works={info.workitems}
            ></WorkContent>
          </div>
          
          <div className="cv-section">
            <WorkContent
              title={titles.edugt}
              works={info.educationitems}
              color="success"
            ></WorkContent>
          </div>
        </div>
      </div>
    </div>
  );
};

export const BodyPDF = ({ datalang }) => {
  const { info, titles } = datalang;
  return (
    <div className="max-w-4xl mx-auto bg-white">
      <CoverPDF name={info.name} post={info.post}></CoverPDF>
      
      <div className="p-6 border-b border-gray-200">
        <AboutContent info={info} titles={titles}></AboutContent>
      </div>
      
      <div className="p-6 border-b border-gray-200">
        <SkillContent
          skills={skillsData.language_skills}
          title={titles.skilleng}
        ></SkillContent>
      </div>
      
      <div className="p-6 border-b border-gray-200">
        <SkillContent
          skills={skillsData.lib_skills}
          title={titles.skilfra}
          color="success"
        ></SkillContent>
      </div>
      
      <div className="p-6 border-b border-gray-200">
        <WorkContent title={titles.workt} works={info.workitems}></WorkContent>
      </div>
      
      <div className="p-6">
        <WorkContent
          title={titles.edugt}
          works={info.educationitems}
          color="success"
        ></WorkContent>
      </div>
    </div>
  );
};

export default BodyContent;
