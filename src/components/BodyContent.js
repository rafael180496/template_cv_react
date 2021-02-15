import React, { useContext } from "react";
import { LangContext } from "../provider/langContext";
import AboutContent from "./AboutContent";
import CoverContent from "./CoverContent";
import SkillContent from "./SkillContent";

const BodyContent = () => {
  const { datalang } = useContext(LangContext);
  const { info, titles } = datalang;
  return (
    <div className="page-content">
      <div className="container">
        <div className="cover shadow-lg bg-white">
          <CoverContent name={info.name} post={info.post}></CoverContent>
          <AboutContent info={info} titles={titles}></AboutContent>
          <hr className="d-print-none" />
          <SkillContent
            skills={info.language_skills}
            title={titles.skilleng}
          ></SkillContent>
          <hr className="d-print-none" />
          <SkillContent
            skills={info.lib_skills}
            title={titles.skilfra}
            color="success"
          ></SkillContent>
          <hr className="d-print-none" />
        </div>
      </div>
    </div>
  );
};

export default BodyContent;
