import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Navbar() {
  const [userName, setUserName] = useState('');
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem('user');
    navigate('/login');
  };

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user'));
    if (user) setUserName(user.name);
  }, []);

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
        { userName }
      </span>
      <button
        onClick={ logout }
        data-testid="customer_products__element-navbar-link-logout"
        type="button"
      >
        Sair
      </button>
    </div>
  );
}

export default Navbar;
