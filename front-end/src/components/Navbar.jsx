import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  const [user, setUser] = useState('');

  useEffect(() => setUser(JSON.parse(localStorage.getItem('user'))?.name || ''), []);

  return (
    <div style={ { display: 'flex', justifyContent: 'space-between' } }>
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
      <span data-testid="customer_products__element-navbar-user-full-name">
        { user }
      </span>
      <button
        onClick={ localStorage.removeItem('user') }
        data-testid="customer_products__element-navbar-link-logout"
        type="button"
      >
        Sair
      </button>
    </div>
  );
}

export default Navbar;
