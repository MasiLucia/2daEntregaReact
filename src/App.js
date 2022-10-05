
import './App.css';
import ItemListContainer from './components/ItemList/ItemListContainer'
import NavBar from './components/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemCount from './components/ItemDetail/ItemDetail'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Cart from './components/Cart/Cart';
import Checkout from './components/Checkout';
import ItemDetailContainer from './components/ItemDetail/ItemDetailContainer.js';

function App() {
  return (
    <>

<BrowserRouter basename='/2daEntregaReact'>
<NavBar />
        <Routes>
          <Route path='/' element={<ItemListContainer greeting={'Bienvenidos a Petshop Buddies!'} />} />
          <Route path='/category/:categoryId' element={<ItemListContainer greeting={'Bienvenidos a Petshop Buddies!'} />} />
          <Route path='/item/:id' element={<ItemDetailContainer />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/checkout' element={<Checkout />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
