import { Link } from 'react-router-dom';

function NavbarSeller() {
  return (
    <Link to="/seller/orders">
      <span
        data-testid="customer_products__element-navbar-link-orders"
        style={ { marginRight: '30px' } }
      >
        Pedidos
      </span>
    </Link>
  );
}

export default NavbarSeller;
