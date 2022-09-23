import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../style/login.css';
import constants from '../utils/constants.util';

const { OK } = constants.status_code;

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
    const canDisable = [validateEmail(emailState), validatePassword(passwordState)];

    console.log(canDisable.every((field) => field));

    setloginButton(!canDisable.every((field) => field));
  }, [passwordState, emailState]);

  const loginHandler = (event) => {
    event.preventDefault();

    axios({
      method: 'post',
      baseURL: 'http://localhost:3001',
      url: '/login',
      headers: {
        'Access-Control-Allow-Origin': '*',
      },
      data: {
        email: emailState,
        password: passwordState,
      },
    }).then((response) => {
      if (response.status === OK) {
        localStorage.setItem('user', JSON.stringify({
          token: response.data,
        }));
        navigate('/customer/products');
      } else {
        setFormatError(response.data.message);
        console.log(response.data.message);
      }
    })
      .catch((error) => {
        setFormatError(error.message);
        console.log(error.message);
      });
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
