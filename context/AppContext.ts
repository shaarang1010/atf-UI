import React, { createContext } from "react";
import { AdditionalPages } from "../models/ComponentModel";

type AppContextProps = {
  additionalPages: AdditionalPages;
  setAdditionalPages: (pageData: AdditionalPages) => any;
};

const setAdditionalPages = () => {};

const AppContext = createContext<AppContextProps>({
  setAdditionalPages,
  additionalPages: {
    glossarypage: "",
    homepage: "",
    aboutpage: "",
    toolspage: "",
    legalpage: ""
  }
});

export default AppContext;
