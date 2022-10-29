import React, {useEffect, useState, } from 'react'
import { Button, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './ItemCount.css';

const ItemCount = ({ initial, stock, onAdd }) => {
  const [count, setCount] = useState(parseInt(initial));

  const handleSubtract = () => {
    setCount(count - 1)
  }

  const handleAdd = () => {
    setCount(count + 1)
  }

  // stock = product.stock

  const handleClick = () => onAdd(count);

  useEffect(() => {
      setCount(parseInt(initial));
  },[initial])

  return (
    <div className='cartContainer'>
        <div>
          <button className='btn-cart ' disabled={count <= 1} onClick={handleSubtract}>
            -
          </button>
          <h5>{count}</h5>
          <button className='btn-cart ' disabled={count >= stock} onClick={handleAdd}>
            +
          </button>
        </div>
      <div>
      <button className='btn-cart-operacion ' disabled={stock <= 0} onClick={handleClick}>
        Agregar al  Carrito
      </button>
      </div>
  
    </div>
  )
}

export default ItemCount