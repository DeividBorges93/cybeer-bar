import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../style/login.css';

export default function Register() {
  const [emailState, setEmail] = useState('');
  const [passwordState, setPassword] = useState('');
  const [loginButtonState, setloginButton] = useState(true);
  const [formatError, setFormatError] = useState('');

  const validateEmail = (email) => {
    setEmail(email);
    const regexEmail = /^[\w-.]+@([\w-]+.)+[\w-]{2,4}$/;
    const validate = email.match(regexEmail);
    setloginButton(!validate);
    if (!validate) return setFormatError('Padrão de E-mail incorreto');
    return setFormatError('');
  };

  const validatePassword = (password) => {
    setPassword(password);
    const passwordLength = 6;
    const validate = password.length < passwordLength;
    setloginButton(validate);
    if (validate) return setFormatError('Digite um formato de senha valido');
    return setFormatError('');
  };

  return (
    <section>
      <h1 className="Title">CyBeer Bar</h1>
      <form>
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
