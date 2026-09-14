import skillsData from "../assets/skills.json";
import { useLang } from "../provider/langContext";
import AboutContent from "./AboutContent";
import CoverContent from "./CoverContent";
import SkillContent from "./SkillContent";
import WorkContent from "./WorkContent";

const BodyContent = () => {
  const { datalang, lang } = useLang();
  const { info, titles, skillLevels, stats, ui } = datalang;

  return (
    <main id="contenido" className="py-8 sm:py-10">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <article className="cv-container">
          <CoverContent datalang={datalang} />

          <section id="sobre-mi" className="cv-section">
            <AboutContent info={info} titles={titles} ui={ui} />
          </section>

          <section id="habilidades" className="cv-section cv-section-alt">
            <SkillContent
              skills={skillsData.language_skills}
              title={titles.skilleng}
              skillLevels={skillLevels}
            />
          </section>

          <section className="cv-section">
            <SkillContent
              skills={skillsData.lib_skills}
              title={titles.skilfra}
              skillLevels={skillLevels}
            />
          </section>

          <section id="experiencia" className="cv-section cv-section-alt">
            <WorkContent
              title={titles.workt}
              works={info.workitems}
              stats={stats}
              ui={ui}
              lang={lang}
            />
          </section>

          <section id="educacion" className="cv-section">
            <WorkContent
              title={titles.edugt}
              works={info.educationitems}
              color="success"
              stats={stats}
              ui={ui}
              lang={lang}
            />
          </section>
        </article>
      </div>
    </main>
  );
};

export default BodyContent;
