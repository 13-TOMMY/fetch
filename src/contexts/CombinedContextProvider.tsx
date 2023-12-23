import { FC, ReactNode } from "react";
import FavouriteContextProvider from "./FavouriteContext";
import ThemeContextProvider, { ThemeContext } from "./ThemeContext";

interface CombinedContextProviderProps {
  children: ReactNode;
}

const CombinedContextProvider: FC<CombinedContextProviderProps> = ({
  children,
}) => {
  return (
    <ThemeContextProvider>
      <FavouriteContextProvider>{children}</FavouriteContextProvider>
    </ThemeContextProvider>
  );
};
export default CombinedContextProvider;
