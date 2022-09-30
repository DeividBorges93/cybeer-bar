import { Link } from 'react-router-dom';

function NavbarCustomer() {
  return (
    <div>
      <Link to="/customer/products">
        <span data-testid="customer_products__element-navbar-link-products">
          Produtos
        </span>
      </Link>
      <Link to="/customer/orders">
        <span data-testid="customer_products__element-navbar-link-orders">
          Meus pedidos
        </span>
      </Link>
    </div>
  );
}

export default NavbarCustomer;
