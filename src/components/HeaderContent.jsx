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
    <nav role="navigation" className="flex items-center justify-center">
      <div className="flex items-center space-x-3">
        {!isfooter && (
          <button
            className="btn-primary px-4 py-2 rounded-lg font-medium text-sm transition-all duration-200 hover:scale-105 flex items-center space-x-2"
            onClick={langAction}
            data-aos="fade-down"
            data-aos-delay="300"
          >
            <i className="fas fa-language"></i>
            <span>{data.locale === "EN" ? "ES" : "EN"}</span>
          </button>
        )}

        <div className="flex items-center space-x-2">
          {social.map((item, i) => {
            const { name, icon, link } = item;
            return (
              <SocialCard
                key={i}
                name={name}
                icon={icon}
                link={link}
                delay={i * 50 + 350}
              />
            );
          })}
        </div>
      </div>
    </nav>
  );
};
const HeaderContent = ({ isfooter = false, datalang }) => {
  return (
    <>
      {isfooter ? (
        <footer className="pt-8 pb-8 text-gray-500 text-center d-print-none bg-gray-900">
          <div className="max-w-4xl mx-auto px-4">
            <div className="space-y-6">
              <div
                className="text-2xl font-bold text-white"
                style={{ fontFamily: "'Poppins', system-ui, sans-serif" }}
                data-aos="fade-up"
                data-aos-delay="100"
              >
                {datalang.info.name}
              </div>

              <div className="border-t border-gray-700 pt-6">
                <SocialArray
                  social={datalang.info.social}
                  datalang={datalang}
                  isfooter={isfooter}
                />
              </div>

              <div
                className="text-sm text-gray-400 pt-4 border-t border-gray-800"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                <p>©{ new Date().getFullYear()} {datalang.info.name}. Desarrollador Full Stack.</p>
                <p className="mt-1">Construido con React + Vite + Tailwind CSS</p>
              </div>
            </div>
          </div>
        </footer>
      ) : (
        <header className="d-print-none bg-white/95 backdrop-blur-md border-b border-gray-200 sticky top-0 z-50 shadow-sm">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between py-4">
              <div
                className="flex items-center space-x-4"
                data-aos="fade-right"
                data-aos-delay="100"
              >
                <div className="w-10 h-10 rounded-full bg-primary-600 flex items-center justify-center">
                  <span className="text-white font-bold text-sm">
                    {datalang.info.name.split(' ').map(n => n[0]).slice(0, 2).join('')}
                  </span>
                </div>
                <h1
                  className="text-xl font-bold text-gray-900 hidden sm:block"
                  style={{ fontFamily: "'Poppins', system-ui, sans-serif" }}
                >
                  {datalang.info.name}
                </h1>
              </div>

              <div
                className="flex items-center"
                data-aos="fade-left"
                data-aos-delay="150"
              >
                <SocialArray
                  social={datalang.info.social}
                  datalang={datalang}
                  isfooter={isfooter}
                />
              </div>
            </div>
          </div>
        </header>
      )}
    </>
  );
};

export default HeaderContent;
