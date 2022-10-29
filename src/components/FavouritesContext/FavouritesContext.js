import { createContext } from "react";
import { useLocalStorage } from "../localStorage/useLocalStorage";

export const FavouritesListContext = createContext({});

export function FavouritesContextProvider({ children }) {
  const [favouritesList, setFavouritesList] = useLocalStorage("favouritesList", []);

  const addToFavouritesList = (product) => {
    if (!isInFavouritesList(product.id)) {
        favouritesList.push(product);
      setFavouritesList([...favouritesList]);
    } else {
      alert("El producto ya se encuentra en la lista de Favoritos");
    }
  };

  const deleteItem = (id) => {
    setFavouritesList(favouritesList.filter((product) => product.id !== id));
  };

  const isInFavouritesList = (id) => {
    return favouritesList.some((product) => product.id === id);
  };

  const data = {
    favouritesList,
    addToFavouritesList,
    deleteItem,
  };

  return (
    <FavouritesListContext.Provider value={data}>
      {children}
    </FavouritesListContext.Provider>
  );
}
