import { Link } from 'react-router-dom';

function NavbarAdmin() {
  return (
    <Link to="/admin/manage">
      <span
        style={ { marginRight: '30px' } }
        data-testid="customer_products__element-navbar-link-orders"
      >
        Gerenciar usuários
      </span>
    </Link>
  );
}

export default NavbarAdmin;
