import { useContext, useState } from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import CartContext from "../../contexts/CartContext";
import ItemCount from "../ItemCount/ItemCount";
import Item from "../ItemList/Item"
import './ItemDetail.css'; 

const ItemDetail = ({ product }) => {
  const { addItem } = useContext(CartContext);
  const [count, setCount] = useState(0);
  const [showItemCount, setShowItemCount] = useState(true);

  const handleAdd = (value) => {
    setCount(value);
    setShowItemCount(false);
    addItem(product, value);
  };

  return (
    <div className='itemDetailContainer'>
      <Item product={product} />
      {showItemCount && (<ItemCount
          initial={1}
          stock={10}
          onAdd={handleAdd}
        />)}
      {!showItemCount && (
        <div>
          <Link to='/cart'>
            <Button className="btn-comprar" variant="success">
                Ir al Carrito
            </Button>
          </Link>

           <Link to='/'>
           <Button className="btn-comprar" variant="success">
               Seguir Comprando
           </Button>
         </Link>
         </div>

          
      )}
    </div>
  );
}
 
export default ItemDetail;