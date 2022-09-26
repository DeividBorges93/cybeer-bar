import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import validate from '../utils/validations';
import CyBeerBarAPI from '../services/CyBeerBarAPI.service';

export default function Register() {
  const [user, setUser] = useState();
  const navigate = useNavigate();

  const [status, setStatus] = useState();
  const [registerButtonState, setRegisterButton] = useState(false);

  const valueInput = (event) => {
    setUser({ ...user, [event.target.name]: event.target.value });
  };

  useEffect(() => {
    if (user?.name !== '' || user?.email !== '' || user?.password) {
      const hasError = validate(user, 'register');
      setStatus(hasError);

      console.log(hasError, 'hasError');

      console.log(!hasError.every((field) => field));

      setRegisterButton(!hasError.every((field) => !field));
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

      { console.log(status, 'status')}
      { (user?.name !== '' || user?.email !== '' || user?.password !== '')
        && status?.map((error, index) => (
          error?.type === 'success'
            ? <p key={ index } style={ { color: 'green' } }>{error?.message}</p>
            : (
              <p
                data-testid="common_register__element-invalid_register"
                key={ index }
                style={ { color: 'red' } }
              >
                {error?.message}
              </p>
            )
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
            value={ user?.name }
          />
          <input
            type="email"
            data-testid="common_register__input-email"
            id="email"
            name="email"
            placeholder="seu-email@site.com.br"
            onChange={ valueInput }
            value={ user?.email }
          />
          <input
            type="password"
            data-testid="common_register__input-password"
            id="password"
            name="password"
            placeholder="***********"
            onChange={ valueInput }
            value={ user?.password }
          />
          <button
            data-testid="common_register__button-register"
            type="submit"
            disabled={ registerButtonState }
          >
            Cadastrar

          </button>
        </form>
      </section>
    </div>
  );
}
