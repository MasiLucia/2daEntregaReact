import { AiOutlineShoppingCart } from 'react-icons/ai'
import { Link } from 'react-router-dom';
import './CartWidget.css';

const CartWidget = () => {

    return ( 
        <Link to="/cart"> 
        <div className='cart'><AiOutlineShoppingCart />
        <span className='nmCart'>0</span>
        </div>
        </Link>
     );
}
 
export default CartWidget;