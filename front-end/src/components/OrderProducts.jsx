import PropTypes from 'prop-types';

function OrderProducts({ items }) {
  const columns = [{ value: 'Item' },
    { value: 'Descrição' },
    { value: 'Quantidade' },
    { value: 'Valor Unitário' },
    { value: 'Sub-total' }];

  return (
    <table>
      <thead>
        <tr>
          {columns.map((column, index) => <th key={ index }>{ column.value }</th>)}
        </tr>
      </thead>
      <tbody>
        {items?.map(({ name, price, quantity }, i) => (
          <tr key={ i }>
            <td
              data-testid={
                `customer_order_details__element-order-table-item-number-${i}`
              }
            >
              { i + 1 }
            </td>
            <td
              data-testid={ `customer_order_details__element-order-table-name-${i}` }
            >
              { name }
            </td>
            <td
              data-testid={ `customer_order_details__element-order-table-quantity-${i}` }
            >
              <p>{ quantity }</p>

            </td>
            <td
              data-testid={
                `customer_order_details__element-order-table-unit-price-${i}`
              }
            >
              { (price).replace('.', ',') }

            </td>
            <td
              data-testid={ `customer_order_details__element-order-table-sub-total-${i}` }
            >
              { (quantity * price).toString().replace('.', ',') }

            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

OrderProducts.defaultProps = {
  items: [],
};

OrderProducts.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string,
    price: PropTypes.string,
    quantity: PropTypes.number,
  })),
};

export default OrderProducts;
