import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import NavbarAdmin from './NavBarAdmin';
import NavbarSeller from './NavBarSeller';
import NavbarCustumer from './NavBarCustomer';

function Navbar() {
  const [userName, setUserName] = useState('');
  const [userRole, setUserRole] = useState('');
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem('user');
    navigate('/login');
  };

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user'));
    setUserName(user?.name);
    setUserRole(user?.role);
  }, []);

  return (
    <header>
      {userRole === 'administrator' && <NavbarAdmin />}
      {userRole === 'seller' && <NavbarSeller />}
      {userRole === 'customer' && <NavbarCustumer />}
      <span data-testid="customer_products__element-navbar-user-full-name">
        {userName}
      </span>
      <button
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
