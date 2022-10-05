import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import NavbarAdmin from './NavBarAdmin';
import NavbarSeller from './NavBarSeller';
import NavbarCustumer from './NavBarCustomer';
import './styles/navBar.css';
import userIcon from '../assets/images/usericon.png';
import logOutIcon from '../assets/images/logaout.png';

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
    <header style={ { display: 'flex' } }>
      {userRole === 'administrator' && <NavbarAdmin />}
      {userRole === 'seller' && <NavbarSeller />}
      {userRole === 'customer' && <NavbarCustumer />}
      <div className="IconDiv">
        <span
          data-testid="customer_products__element-navbar-user-full-name"
        >
          {userName}
        </span>
        <img className="userIcon" src={ userIcon } alt="User icon" />

        <button
          className="logOutButton"
          onClick={ logout }
          data-testid="customer_products__element-navbar-link-logout"
          type="button"
        >
          <img className="logOutIcon" src={ logOutIcon } alt="LogOut" />
        </button>
      </div>
    </header>
  );
}
export default Navbar;
