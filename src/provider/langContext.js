import { createContext } from "react";
import dataes from "../assets/lang/es.json";
import dataen from "../assets/lang/en.json";
export const LangContext = createContext();

export const langReducer = (state = {}, action) => {
  switch (action.lang) {
    case "ES":
      return {
        ...state,
        locale:"EN",
        datalang: dataes,
      };

    case "EN":
      return {
        ...state,
        locale:"ES",
        datalang: dataen,
      };

    default:
      return state;
  }
};
