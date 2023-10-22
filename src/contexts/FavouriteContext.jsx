import React, { createContext, useEffect, useState } from "react";

export const FavouriteContext = createContext;

export default function FavouriteContextProvider({ children }) {
  const [favourite, setFavourite] = useState([]);
  const [favouriteCount, setFavouriteCount] = useState(0);

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

  const addToFavourite = function (fetch) {
    let newFavourite = [...favourite, fetch];
    setFavourite(newFavourite);
  };

  const removeFromFavourite = (fetchId) => {
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
}
