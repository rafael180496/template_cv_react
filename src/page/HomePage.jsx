import BackToTop from "../components/BackToTop";
import BodyContent from "../components/BodyContent";
import FooterContent from "../components/FooterContent";
import HeaderContent from "../components/HeaderContent";
import { useLang } from "../provider/langContext";

const HomePage = () => {
  const { datalang } = useLang();
  const { ui } = datalang;

  return (
    <>
      <a href="#contenido" className="skip-link">
        {ui.skipToContent}
      </a>
      <HeaderContent />
      <BodyContent />
      <FooterContent />
      <BackToTop label={ui.backToTop} />
    </>
  );
};

export default HomePage;
