import { useState } from 'react';
import '../../utils/products';
import './ItemCount.css';
import { Link } from 'react-router-dom';

const ItemCount = ({ onAdd, initial, stock }) => {
  const [qty, setQty] = useState(initial);
  const addProduct = (num) => {
    setQty(qty + num);
  };

  return (
    <div className="cart-container">
      <div className="count-container__contador">
        <button
          className="btn-cart-operacion"
          onClick={() => addProduct(-1)}
    
          disabled={qty === initial}
        >
          -
        </button>
        <span className="count-container__qty">{qty}</span>
        <button
          className="btn-cart-operacion"
          onClick={() => addProduct(+1)}
       
          disabled={qty === stock}
        >
          +
        </button>
      </div>

      <Link to={`/cart`}>
      <button
        className="btn-cart"
        onClick={() => {
          onAdd(qty);
        }}
        disabled={stock === 0 ? true : null}
      >
        Add to Cart
      </button>
      </Link>
    </div>
  );
};

export default ItemCount;