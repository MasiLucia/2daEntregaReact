import { useState } from "react";
import Item from "../ItemList/Item"


const ItemDetail = ({ product }) => {
  const [count, setCount] = useState(0);

  const handleClick = (value) => {
    setCount(value);
  };

  return (
    <>
      <Item product={product} />
    
    </>
  );
}
 
export default ItemDetail;