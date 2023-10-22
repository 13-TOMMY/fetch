import React from "react";
import FavouriteContextProvider from "./FavouriteContext";
import { ThemeContext } from "./ThemeContext";

export default function CombinedContextProvider({ children }) {
  return (
    <FavouriteContextProvider>
      <ThemeContext>{children}</ThemeContext>
    </FavouriteContextProvider>
  );
}
