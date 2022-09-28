import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import CyBeerBarAPI from '../services/CyBeerBarAPI.service';
import '../style/login.css';
import routesByRole from '../utils/routesByRole';

export default function Login() {
  const navigate = useNavigate();

  const [emailState, setEmail] = useState('');
  const [passwordState, setPassword] = useState('');
  const [loginButtonState, setloginButton] = useState(true);
  const [formatError, setFormatError] = useState('');

  const validateEmail = (email) => {
    setEmail(email);
    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const validate = email.match(regexEmail);
    return validate;
  };

  const validatePassword = (password) => {
    setPassword(password);
    const passwordLength = 6;

    const validate = password.length >= passwordLength;
    return validate;
  };

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user'));

    if (user) {
      navigate(routesByRole[user.role]);
    }
  }, []);

  useEffect(() => {
    const canDisable = [validateEmail(emailState), validatePassword(passwordState)];

    console.log(canDisable.every((field) => field));

    setloginButton(!canDisable.every((field) => field));
  }, [passwordState, emailState]);

  const loginHandler = async (event) => {
    event.preventDefault();

    await new CyBeerBarAPI().login({
      email: emailState,
      password: passwordState,
    }, [navigate, setFormatError]);
  };

  return (
    <section>
      <h1 className="Title">CyBeer Bar</h1>
      <form onSubmit={ loginHandler }>
        <input
          aria-label="Login"
          type="text"
          data-testid="common_login__input-email"
          value={ emailState }
          onChange={ ({ target }) => { validateEmail(target.value); } }
          placeholder="Seu login"
        />
        <input
          aria-label="password"
          type="password"
          data-testid="common_login__input-password"
          value={ passwordState }
          onChange={ ({ target }) => { validatePassword(target.value); } }
          placeholder="***********"
        />
        <div>
          <button
            className="btnLogin"
            aria-label="Button Login"
            data-testid="common_login__button-login"
            type="submit"
            disabled={ loginButtonState }
          >
            Login
          </button>
        </div>
        <Link to="/register">
          <button
            className="registerOption"
            aria-label="Button Login"
            data-testid="common_login__button-register"
            type="button"
          >
            Ainda não tenho conta
          </button>
        </Link>

      </form>
      <span
        aria-label="Error"
        data-testid="common_login__element-invalid-email"
      >
        <p>{formatError}</p>
      </span>
    </section>
  );
}
