import { useReducer } from "react";
import { Container } from "react-bootstrap";
import ItemDetailContainer from "../ItemDetail/ItemDetailContainer";

const Cart = () => {

    const addToCart = ()=> {}
    const delFromCart = ()=> {}
    const cleanCart = ()=> {}
  return (
    <Container>
      <article className="box"></article>
      <h3>Carrito</h3>
      <h4>Hola! Estos son los productos que elegiste:</h4>
      <article className="box"></article>
    </Container>
  );
}
 
export default Cart;