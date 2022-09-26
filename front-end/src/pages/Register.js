import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import CyBeerBarAPI from '../services/CyBeerBarAPI.service';
import validate from '../utils/validations';

export default function Register() {
  const [user, setUser] = useState({
    name: '',
    email: '',
    password: '',
  });
  const [status, setStatus] = useState([]);
  const [disableRegisterButton, setDisableRegisterButton] = useState(true);
  const navigate = useNavigate();

  const valueInput = (event) => {
    setUser({ ...user, [event.target.name]: event.target.value });
  };

  useEffect(() => {
    setDisableRegisterButton(() => {
      if (status.length === 0) return true;
      return !(status.every((err) => !err));
    });
  }, [status]);

  useEffect(() => {
    if (user.email !== '' || user.name !== '' || user.password !== '') {
      setStatus(validate(user, 'register'));
    }
  }, [user]);

  const addUser = async (event) => {
    event.preventDefault();

    const hasError = validate(user, 'register');
    const noError = hasError.every((err) => !err);

    if (noError) await new CyBeerBarAPI().register(user, [navigate, setStatus]);
    else setStatus(hasError);
  };

  return (
    <div>
      <h1>Cadastro</h1>

      { status?.map((error, index) => (
        <p
          data-testid="common_register__element-invalid_register"
          key={ index }
          style={ { color: 'red' } }
        >
          {error?.message}
        </p>
      ))}

      <section>
        <form onSubmit={ addUser }>
          <input
            type="text"
            data-testid="common_register__input-name"
            id="name"
            name="name"
            placeholder="Seu nome"
            onChange={ valueInput }
            value={ user.name }
          />
          <input
            type="email"
            data-testid="common_register__input-email"
            id="email"
            name="email"
            placeholder="seu-email@site.com.br"
            onChange={ valueInput }
            value={ user.email }
          />
          <input
            type="password"
            data-testid="common_register__input-password"
            id="password"
            name="password"
            placeholder="***********"
            onChange={ valueInput }
            value={ user.password }
          />
          <button
            disabled={ disableRegisterButton }
            data-testid="common_register__button-register"
            type="submit"
          >
            Cadastrar

          </button>
        </form>
      </section>
    </div>
  );
}
