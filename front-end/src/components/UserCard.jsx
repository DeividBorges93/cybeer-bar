import PropTypes from 'prop-types';

function UserCard({ data }) {
  const { iten, name, email, type } = data;

  return (
    <tr>
      <th data-testid="69">{iten}</th>
      <th data-testid="70">{name}</th>
      <th data-testid="71">{email}</th>
      <th data-testid="72">{type}</th>
      <th data-testid="73">Excluir</th>
    </tr>
  );
}

UserCard.propTypes = {
  data: PropTypes.shape({
    name: PropTypes.string,
    iten: PropTypes.number,
    email: PropTypes.string,
    type: PropTypes.string,
  }),
}.isRequired;

export default UserCard;
