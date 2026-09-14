import { useCallback, useEffect, useState } from "react";
import dataes from "../assets/lang/es.json";
import dataen from "../assets/lang/en.json";
import { LangContext } from "./langContext";

const DICTIONARIES = { es: dataes, en: dataen };
const STORAGE_KEY = "cv-lang";

const initialLang = () => {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved && saved in DICTIONARIES) return saved;
  } catch {
    /* storage bloqueado: decide el navegador */
  }
  const browser =
    typeof navigator !== "undefined" ? navigator.language || "" : "";
  return browser.toLowerCase().startsWith("en") ? "en" : "es";
};

export const LangProvider = ({ children }) => {
  const [lang, setLang] = useState(initialLang);

  // El idioma del documento es lo que leen lectores de pantalla y traductores.
  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  const toggleLang = useCallback(() => {
    setLang((current) => {
      const next = current === "es" ? "en" : "es";
      try {
        localStorage.setItem(STORAGE_KEY, next);
      } catch {
        /* no se persiste; el cambio igual se aplica */
      }
      return next;
    });
  }, []);

  const value = {
    lang,
    otherLang: lang === "es" ? "en" : "es",
    datalang: DICTIONARIES[lang],
    toggleLang,
  };

  return <LangContext.Provider value={value}>{children}</LangContext.Provider>;
};

export default LangProvider;
