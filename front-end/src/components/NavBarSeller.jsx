import { Link } from 'react-router-dom';

function NavbarSeller() {
  return (
    <div>
      <Link to="/seller/orders">
        <span data-testid="customer_products__element-navbar-link-orders">
          Pedidos
        </span>
      </Link>
    </div>
  );
}

export default NavbarSeller;
