export default function OrderProducts() {
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
        {items.map((item, i) => (
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
              { item.name }
            </td>
            <td
              data-testid={ `customer_order_details__element-order-table-quantity-${i}` }
            >
              <p>{ (item.quantity).toString().replace('.', ',') }</p>

            </td>
            <td
              data-testid={
                `customer_order_details__element-order-table-unit-price-${i}`
              }
            >
              { (item.price).replace('.', ',') }

            </td>
            <td
              data-testid={ `customer_order_details__element-order-table-sub-total-${i}` }
            >
              { (item.quantity * item.price).toFixed(2).replace('.', ',') }

            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
