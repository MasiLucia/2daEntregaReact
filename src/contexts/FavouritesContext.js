import { createContext, useState } from "react";
import Alert from 'react-bootstrap/Alert';

const FavouritesContext = createContext();

export default FavouritesContext;


export const FavouritesProvider = ({ children }) => {
  const [listaDeFavoritos, setListaDeFavoritos] = useState([]);

  const agregarAFavoritos = (itemNuevo) => {
    console.log('agregarAFavoritos: ', itemNuevo);
    const yaEstaEnFavoritos = listaDeFavoritos.some((item) => item.id === itemNuevo.id);
    if (yaEstaEnFavoritos) {
      // no lo agregamos de vuelva
      [
        'primary',
        'secondary',
        'success',
        'danger',
        'warning',
        'info',
        'light',
        'dark',
      ].map((variant) => (
        <Alert key={variant} variant={variant}>
          This is a {variant} alert—check it out!
        </Alert>
      ))
      alert('Este producto ya esta en tu lista de favoritos'); // NO USAR ALERT EN LA PF (proyecto final)
      return;
    } else {
      // no esta en favoritos, vamos a agregarlo
      setListaDeFavoritos([...listaDeFavoritos, itemNuevo]);
    }
  }

  return (
    <FavouritesContext.Provider value={{listaDeFavoritos, agregarAFavoritos}}>
      {children}
    </FavouritesContext.Provider>
  )
}