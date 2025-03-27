import { createContext, useContext, useState, useEffect } from "react";

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  //create helper function  set 'isDarkTheme' to the opposite value when 'toggleDarkTheme' is invoked
  const toggleDarkTheme = () => {
    const newDarkTheme = !isDarkTheme
    setIsDarkTheme(newDarkTheme)

  }

  return <AppContext.Provider value={{isDarkTheme, toggleDarkTheme}}>{children}</AppContext.Provider>;
};

export const useGlobalContext = () => useContext(AppContext);
