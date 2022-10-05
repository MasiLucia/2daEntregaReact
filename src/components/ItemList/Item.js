import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import Swal from "sweetalert2";
import { FaHeart } from "react-icons/fa";
import './Item.css'; 
import ItemCount from '../ItemCount/ItemCount';

const Item = ({ product }) => {
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
    <div><FaHeart className="card-action"/></div>

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

        
          <div className='cartContainer'>
          <ItemCount stock={product.stock} onAdd={onAdd} initial={1} />
          </div>
   
    </Card.Body>
  </Card>

    
  );
}
 
export default Item;