import React from 'react';

export default function Register() {
  return (
    <div>
      <h1>Cadastro</h1>

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
