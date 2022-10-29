import ItemList from './ItemList';
import './ItemListContainer.css';
import Container from 'react-bootstrap/Container';
import { useEffect, useState } from 'react';
import { getAllProducts, getProductsByCategory } from '../../utils/products';
import { useParams} from 'react-router-dom';
import fondo from '../../assets/41604-Labrador-dog-underwater-cute-animals-funny.jpg'


const ItemListContainer = ( { greeting }) => {
const {categoryId } = useParams();
const [products, setProducts] = useState([])

useEffect(()=> {
    console.log(categoryId)
}, [categoryId]);

useEffect(() => {
    if (categoryId) {
      getProductsByCategory(categoryId)
        .then((data) => setProducts(data))
        .catch((error) => console.warn(error))
    } else {
      getAllProducts()
        .then((data) => setProducts(data))
        .catch((error) => console.warn(error))
    }
  }, [categoryId])

    return ( 
        <Container> 
        <h3 className='titulo'>{greeting}</h3>
        <img src ={fondo} className="fondo"></img>
        <h3 className='titulo'>Productos</h3>
       
        <ItemList className="cards" products ={products} />
        </Container>
     );
}
 
export default ItemListContainer ;