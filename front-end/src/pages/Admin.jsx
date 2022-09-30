import Navbar from '../components/NavBar';
/* import UserCard from '../components/UserCard'; */

export default function Admin() {
  return (
    <>
      <span data-testid="64">errorMensage</span>
      <Navbar />
      <form>
        <h2>Cadastrar novo usuário</h2>
        <input type="text" data-testid="64" />
        <input type="email" data-testid="65" />
        <input type="password" data-testid="66" />
        <select data-testid="68">
          <option value="">vendedor</option>
          <option value="">adiministrador</option>
          <option value="">cliente</option>
        </select>
        <button aria-label="cadastrar" type="submit" data-testid="67" />
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
        {/* <tbody>
          {
            userList?.map((data) => (
              <UserCard key={ data.email } data={ data } />
            ))
          }
        </tbody> */}
      </table>
    </>
  );
}
