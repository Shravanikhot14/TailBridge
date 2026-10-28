
import { createContext, useEffect, useState } from "react";

export const FavouritesContext = createContext();

export const FavouritesProvider = ({ children }) => {
  const [favourites, setFavourites] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem("favourites")) || [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem("favourites", JSON.stringify(favourites));
  }, [favourites]);

  const toggleFavourite = (petId) => {
    setFavourites((current) =>
      current.includes(petId)
        ? current.filter((id) => id !== petId)
        : [...current, petId]
    );
  };

  const isFavourite = (petId) => favourites.includes(petId);

  const removeFavourite = (petId) => {
    setFavourites((current) =>
      current.filter((id) => id !== petId)
    );
  };

  return (
    <FavouritesContext.Provider
      value={{
        favourites,
        toggleFavourite,
        isFavourite,
        removeFavourite,
      }}
    >
      {children}
    </FavouritesContext.Provider>
  );
};
