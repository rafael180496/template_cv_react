import React, { useContext } from "react";
import { LangContext } from "../provider/langContext";
import SocialCard from "./SocialCard";


const SocialArray = ({ social, datalang, isfooter }) => {
  const { dispatch } = useContext(LangContext);
  const { data } = useContext(LangContext);

  const langAction = () => {
    dispatch({
      lang: data.locale,
    });
  };
  return (
    <nav role="navigation">
      <ul className="nav justify-content-center">
        {!isfooter && (
          <>
            <li className="nav-item">
              <button className="btn btn-dark" onClick={langAction}>
                <i className="far fa-language">{data.locale}</i>
                <span className="menu-title sr-only">{data.locale}</span>
              </button>
            </li>
          </>
        )}

        {social.map((item, i) => {
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
  );
};
const HeaderContent = ({ isfooter = false, datalang }) => {
  return (
    <>
      {isfooter ? (
        <footer className="pt-4 pb-4 text-muted text-center d-print-none">
          <div className="container">
            <div className="my-3">
              <div className="h4">{datalang.info.name}</div>
              <div className="footer-nav">
                <SocialArray
                  social={datalang.info.social}
                  datalang={datalang}
                  isfooter={isfooter}
                ></SocialArray>
              </div>
            </div>
          </div>
        </footer>
      ) : (
        <header className="d-print-none">
          <div className="container text-center text-lg-left">
            <div className="py-3 clearfix">
              <h1 className="site-title mb-0">{datalang.info.name}</h1>

              <div className="site-nav">
                <SocialArray
                  social={datalang.info.social}
                  datalang={datalang}
                  isfooter={isfooter}
                ></SocialArray>
              </div>
            </div>
          </div>
        </header>
      )}
    </>
  );
};

export default HeaderContent;
