import { createContext, useEffect, useState, ReactNode, FC } from "react";

interface FavouriteContextProviderProps {
  children: ReactNode;
}

interface FavouriteContextValue {
  favourite: any[]; 
  favouriteCount: number;
  addToFavourite: (fetch: any) => void; 
  removeFromFavourite: (fetchId: number) => void;
  clearFavourite: () => void;
}

export const FavouriteContext = createContext<FavouriteContextValue>({
  favourite: [],
  favouriteCount: 0,
  addToFavourite: () => {},
  removeFromFavourite: () => {},
  clearFavourite: () => {},
});

const FavouriteContextProvider: FC<FavouriteContextProviderProps> = ({
  children,
}) => {
  const [favourite, setFavourite] = useState<any[]>([]); 
  const [favouriteCount, setFavouriteCount] = useState<number>(0);

  useEffect(() => {
    const storedFavourite = localStorage.getItem("favourite");
    if (storedFavourite) {
      setFavourite(JSON.parse(storedFavourite));
      setFavouriteCount(JSON.parse(storedFavourite).length);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("favourite", JSON.stringify(favourite));
    setFavouriteCount(favourite.length);
  }, [favourite]);

  const addToFavourite = function (fetch: any) {
    let newFavourite = [...favourite, fetch]; 
    setFavourite(newFavourite);
  };

  const removeFromFavourite = (fetchId: number) => {
    setFavourite((prevFavourite) =>
      prevFavourite.filter((favourite) => favourite.id !== fetchId)
    );
  };

  const clearFavourite = () => {
    setFavourite([]);
  };

  return (
    <FavouriteContext.Provider
      value={{
        favourite,
        favouriteCount,
        addToFavourite,
        removeFromFavourite,
        clearFavourite,
      }}
    >
      {children}
    </FavouriteContext.Provider>
  );
};

export default FavouriteContextProvider;
