import { Link } from 'react-router-dom';

function NavbarAdmin() {
  return (
    <div>
      <Link to="/admin/manage">
        <span data-testid="customer_products__element-navbar-link-orders">
          Gerenciar usuários
        </span>
      </Link>
    </div>
  );
}

export default NavbarAdmin;
