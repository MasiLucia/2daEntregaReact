import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import Swal from "sweetalert2";
import { FaHeart } from "react-icons/fa";
import './Item.css'; 

import { useContext, useState } from 'react';
import {FavouritesListContext} from '../FavouritesContext/FavouritesContext'

const Item = ({ product }) => {
  const { favouritesList, addToFavouritesList, deleteItem } = useContext(FavouritesListContext);
  const [fav, setFav] = useState(false);

  const onAdd = (qty) => {
    Swal.fire({
      icon: 'success',
      title: 'New product added to cart',
      text:`Added ${qty} units of ${product.title} `,
      confirmButtonColor: "#444444"
  });
  };
  return (
    <Card className='card' style={{ width: '20rem' }}>
    <Card.Img className='cardImg' variant="top" src={product.pictureUrl} />
    {favouritesList.some((item) => item.id === product.id) ? (
        <FaHeart
          className="card-action"
          onClick={() => {
            deleteItem(product.id);
            setFav(!fav);
          }}
        />
      ) : (
        <FaHeart
          className="card-action"
          onClick={() => {
            addToFavouritesList(product);
            setFav(!fav);
          }}
        />
      )}
    {/* <div><FaHeart className="card-action"  onClick={() => {
            addToFavouritesList(product);
            setFav(!fav);}}/></div> */}

    <Card.Body className='body'>
      <Card.Title className="card-heading">{product.title}</Card.Title>
      <Card.Text>
        $ {product.price}
      </Card.Text>
      <Card.Text>
        {product.description}
        (Stock: {product.stock})
      </Card.Text>
        <Link to={`/item/${product.id}`}>
          <Button className='card-button' variant="primary">
            Ver detalle
          </Button>
        </Link>

{/*         
          <div className='cartContainer'>
          <ItemCount stock={product.stock} onAdd={onAdd} initial={1} />
          </div>
    */}
    </Card.Body>
  </Card>

    
  );
}
 
export default Item;