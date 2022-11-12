import { createContext, useReducer } from "react";
import DarkModeReducer from "./DarkModeReducer";

const initialState = {
  darkMode: false,
};

export const DarkModeContext = createContext(initialState);

export const DarkModeContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(DarkModeReducer, initialState);

  return (
    <DarkModeContext.Provider value={{ darkMode: state.darkMode, dispatch }}>
      {children}
    </DarkModeContext.Provider>
  );
};