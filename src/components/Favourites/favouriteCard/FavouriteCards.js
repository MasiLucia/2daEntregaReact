import { Card, Button, Stack } from "react-bootstrap";
import { useContext } from "react";
import { BsTrash } from "react-icons/bs";
import { MdOutlineShoppingBag } from "react-icons/md";
import { FavouritesListContext } from "../../FavouritesContext/FavouritesContext";
import { CartContext } from "../../CartContext/CartContext";
import "./FavouriteCard.css";

export function FavouriteCards({ data }) {
  const { deleteItem } = useContext(FavouritesListContext);
  const { addToCart } = useContext(CartContext);

  return (
    <Card className="wishList__container">
      <Card.Img src={data.image} className="wishList__image" />
      <Card.Body className="wishList__body">
        <Card.Title className="wishList__title">{data.title}</Card.Title>
        <Stack className="wishList--btn__container">
          <Button onClick={() => deleteItem(data.id)} className="wishList__btn">
            <BsTrash />
          </Button>
          <Button onClick={() => addToCart(data, 1)} className="wishList__btn">
            <MdOutlineShoppingBag />
          </Button>
        </Stack>
      </Card.Body>
    </Card>
  );
}
