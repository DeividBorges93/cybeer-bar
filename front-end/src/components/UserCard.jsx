import PropTypes from 'prop-types';

function UserCard({ data }, index) {
  const { item, name, email, type } = data;

  return (
    <tr>
      <th
        data-testid={ `admin_manage__element-user-table-item-number-${index}` }
      >
        {item}
      </th>
      <th data-testid={ `admin_manage__element-user-table-name-${index}` }>{name}</th>
      <th data-testid={ `admin_manage__element-user-table-email-${index}` }>{email}</th>
      <th data-testid={ `admin_manage__element-user-table-role-${index}` }>{type}</th>
      <th data-testid={ `admin_manage__element-user-table-remove-${index}` }>Excluir</th>
    </tr>
  );
}

UserCard.propTypes = {
  data: PropTypes.shape({
    name: PropTypes.string,
    item: PropTypes.number,
    email: PropTypes.string,
    type: PropTypes.string,
  }),
  index: PropTypes.number,
}.isRequired;

export default UserCard;
