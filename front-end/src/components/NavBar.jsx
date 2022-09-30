import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import NavbarAdmin from './NavBarAdmin';
import NavbarSeller from './NavBarSeller';
import NavbarCustumer from './NavBarCustomer';

function Navbar() {
  const [userName, setUserName] = useState('');
  const [userRole, setUserRole] = useState('');
  const navigate = useNavigate();
  const { state } = useLocation();

  const logout = () => {
    localStorage.removeItem('user');
    navigate('/login');
  };

  useEffect(() => {
    localStorage.setItem('user', JSON.stringify(state));
    setUserName(state?.name);
    setUserRole(state?.role);
  }, []);

  return (
    <header style={ { display: 'flex' } }>
      {userRole === 'administrator' && <NavbarAdmin />}
      {userRole === 'seller' && <NavbarSeller />}
      {userRole === 'customer' && <NavbarCustumer />}
      <span
        style={ { marginRight: '30px' } }
        data-testid="customer_products__element-navbar-user-full-name"
      >
        {userName}
      </span>
      <button
        style={ { marginRight: '30px' } }
        onClick={ logout }
        data-testid="customer_products__element-navbar-link-logout"
        type="button"
      >
        Sair
      </button>

    </header>
  );
}
export default Navbar;
