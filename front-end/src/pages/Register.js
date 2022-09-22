import React from 'react';
import Input from '../components/inputs';

export default function Register() {
  return (
    <section>
      <form>
        <Input
          type="text"
          data-testid="common_register__input-name"
          id="name"
          name="name"
          placeholder="Seu nome"
        />
        <Input
          type="email"
          data-testid="common_register__input-email"
          id="email"
          name="email"
          placeholder="seu-email@site.com.br"
        />
        <Input
          type="password"
          data-testid="common_register__input-password"
          id="password"
          name="password"
          placeholder="***********"
        />
        <button
          data-testid="common_register__button-register"
          type="submit"
        >
          Cadastrar

        </button>
      </form>
    </section>
  );
}
