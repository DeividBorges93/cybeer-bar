import { Link } from 'react-router-dom';
import beerIcon from '../assets/images/products.png';
import MyOrder from '../assets/images/myorder.png';
import './styles/navBar.css';

function NavbarCustomer() {
  return (
    <div>
      <div className="IconDiv">
        <Link to="/customer/products">
          <img
            data-testid="customer_products__element-navbar-link-products"
            className="beerIcon"
            src={ beerIcon }
            alt="Beer icon"
          />
        </Link>
        <Link to="/customer/orders">
          <img
            className="myOrderIcon"
            src={ MyOrder }
            alt="My Order"
            data-testid="customer_products__element-navbar-link-orders"
          />
        </Link>
      </div>
    </div>
  );
}

export default NavbarCustomer;
