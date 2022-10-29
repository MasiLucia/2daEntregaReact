
import './App.css';
import ItemListContainer from './components/ItemList/ItemListContainer'
import NavBar from './components/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemCount from './components/ItemDetail/ItemDetail'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Cart from './components/Cart/Cart';
import Checkout from './components/Checkout';
import ItemDetailContainer from './components/ItemDetail/ItemDetailContainer.js';
import { CartProvider } from './contexts/CartContext';
import { FavouritesProvider } from './contexts/FavouritesContext';
import Favourites from './components/Favourites' 
import { useState } from 'react';
import Footer from './components/Footer/Footer';
import { FavouritesContextProvider } from './components/FavouritesContext/FavouritesContext';

function App() {

  return (
    <>

<BrowserRouter basename='/2daEntregaReact'>
  <CartProvider>
   <NavBar />
      <FavouritesContextProvider>
        
        <Routes>
          <Route path='/' element={<ItemListContainer greeting={'Bienvenidos a Petshop Buddies!'} />} />
          <Route path='/category/:categoryId' element={<ItemListContainer greeting={'Bienvenidos a Petshop Buddies!'} />} />
          <Route path='/item/:id' element={<ItemDetailContainer />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/checkout' element={<Checkout />} />
          <Route path='/favourites' element={<Favourites />} />
        </Routes>
        <Footer />
        </FavouritesContextProvider>
        </CartProvider>
      </BrowserRouter>
    
    </>
  );
}

export default App;
