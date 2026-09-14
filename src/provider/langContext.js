import { createContext, useContext } from "react";

export const LangContext = createContext(null);

export const useLang = () => {
  const context = useContext(LangContext);
  if (!context) {
    throw new Error("useLang debe usarse dentro de <LangProvider>");
  }
  return context;
};
