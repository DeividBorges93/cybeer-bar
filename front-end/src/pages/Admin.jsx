import { useState, useRef, useEffect } from 'react';
import Navbar from '../components/NavBar';
import UserCard from '../components/UserCard';
import CyBeerBarAPI from '../services/CyBeerBarAPI.service';
import constants from '../utils/constants.util';
import validate from '../utils/validations';

const { status_code: { CREATED } } = constants;

export default function Admin() {
  const formRef = useRef();
  const [user, setUser] = useState({ name: '', email: '', password: '', role: 'none' });
  const [users, setUsers] = useState([]);
  const [messages, setMessages] = useState([]);
  const [registerButtonState, setRegisterButton] = useState(true);

  const valueInput = (event) => {
    setUser({ ...user, [event.target.name]: event.target.value });
  };

  const addUser = (e) => {
    e.preventDefault();
    const formProps = formRef.current.elements;
    const userData = Array.from(formProps).reduce((acc, { id, value }) => {
      acc[id] = value;
      return acc;
    }, {});

    if (!registerButtonState) {
      new CyBeerBarAPI().adminUserRegister(userData)
        .then((response) => {
          if (response?.status !== CREATED) {
            setMessages([{
              type: 'error',
              message: `Erro: ${response?.data?.message}`,
            }]);
          }
        })
        .catch((error) => {
          setMessages([{
            type: 'error',
            message: `Erro: ${error?.message}`,
          }]);
        });
    }
  };

  useEffect(() => {
    new CyBeerBarAPI().getUsers().then((data) => setUsers(data));
  }, []);

  useEffect(() => {
    console.log();
    if (user?.name !== ''
      || user?.email !== ''
      || user?.password !== ''
      || user?.role !== 'none') {
      const hasError = validate(user, 'admin-manage');
      console.log(hasError);
      setMessages(hasError);
      setRegisterButton(!hasError.every((field) => !field));
    }
  }, [user]);

  return (
    <>
      <span data-testid="64">errorMensage</span>
      <Navbar />
      <div
        style={ { display: 'flex', flexDirection: 'column' } }
      >
        {
          messages?.map((error, index) => (
            <span
              key={ `${index}-message-error` }
              data-testid="admin_manage__element-invalid-register"
            >
              {error?.message}
            </span>
          ))
        }
      </div>
      <form ref={ formRef } onSubmit={ addUser }>
        <h2>Cadastrar novo usuário</h2>
        <input
          onChange={ valueInput }
          id="name"
          name="name"
          type="text"
          data-testid="admin_manage__input-name"
        />
        <input
          onChange={ valueInput }
          id="email"
          name="email"
          type="email"
          data-testid="admin_manage__input-email"
        />
        <input
          onChange={ valueInput }
          id="password"
          name="password"
          type="password"
          data-testid="admin_manage__input-password"
        />
        <select
          onChange={ valueInput }
          id="role"
          name="role"
          data-testid="admin_manage__select-role"
        >
          <option defaultValue value="none">Tipo de usuário</option>
          <option value="seller">Vendedor</option>
          <option value="administrator">Administrador</option>
          <option value="customer">Cliente</option>
        </select>
        <button
          aria-label="cadastrar"
          type="submit"
          data-testid="admin_manage__button-register"
          disabled={ registerButtonState }
        >
          Cadastrar
        </button>
      </form>
      <table>
        <thead>
          <tr>
            <th>Item</th>
            <th>Nome</th>
            <th>E-mail</th>
            <th>Tipo</th>
            <th>Excluir</th>
          </tr>
        </thead>
        <tbody>
          {
            users?.map((data, index) => (
              <UserCard key={ `${index}-${data.email}` } data={ data } />
            ))
          }
        </tbody>
      </table>
    </>
  );
}
