import React, { useContext } from "react";
import { LangContext } from "../provider/langContext";
import SocialCard from "./SocialCard";

const HeaderContent = () => {
  const { datalang } = useContext(LangContext);
  const { info } = datalang;
  return (
    <header className="d-print-none">
      <div className="container text-center text-lg-left">
        <div className="py-3 clearfix">
          <h1 className="site-title mb-0">{info.name}</h1>
          <div className="site-nav">
            <nav role="navigation">
              <ul className="nav justify-content-center">
                {info.social.map((item, i) => {
                  const { name, icon, link } = item;
                  return (
                    <SocialCard
                      key={i}
                      name={name}
                      icon={icon}
                      link={link}
                    ></SocialCard>
                  );
                })}
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default HeaderContent;
