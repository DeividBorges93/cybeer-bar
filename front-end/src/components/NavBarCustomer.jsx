import { Link } from 'react-router-dom';

function NavbarCustomer() {
  return (
    <>
      <Link to="/customer/products">
        <span
          style={ { marginRight: '30px' } }
          data-testid="customer_products__element-navbar-link-products"
        >
          Produtos
        </span>
      </Link>
      <Link to="/customer/orders">
        <span
          style={ { marginRight: '30px' } }
          data-testid="customer_products__element-navbar-link-orders"
        >
          Meus pedidos
        </span>
      </Link>
    </>
  );
}

export default NavbarCustomer;
