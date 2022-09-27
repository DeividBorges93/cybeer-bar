import { useContext } from 'react';
import { ShoppingCartContext } from '../contexts/ShoppingCartProvider.context';

const columns = [{ value: 'Item' },
  { value: 'Descrição' },
  { value: 'Quantidade' },
  { value: 'Valor Unitário' },
  { value: 'Sub-total' },
  { value: 'Remover Item' }];

export default function TableGenerator() {
  const { items, removeItem } = useContext(ShoppingCartContext);
  return (
    <table>
      <thead>
        <tr>
          {columns.map((column, index) => <th key={ index }>{ column.value }</th>)}
        </tr>
      </thead>
      <tbody>
        {items.map((item, id) => (
          <tr key={ id }>
            <td
              data-testid={ `customer_checkout__element-order-table-item-number-${id}` }
            >
              { item.id }
            </td>
            <td
              data-testid={ `customer_checkout__element-order-table-name-${id}` }
            >
              { item.name }
            </td>
            <td
              data-testid={ `customer_checkout__element-order-table-quantity-${id}` }
            >
              { item.quantity }

            </td>
            <td
              data-testid={ `customer_checkout__element-order-table-unit-price-${id}` }
            >
              { item.price }

            </td>
            <td
              data-testid={ `customer_checkout__element-order-table-sub-total-${id}` }
            >
              { (item.quantity * item.price).toFixed(2) }

            </td>
            <td
              data-testid={ `customer_checkout__element-order-table-remove-${id}` }
            >
              <button
                type="button"
                onClick={ () => removeItem(item) }
              >
                Remover
              </button>

            </td>
          </tr>
        ))}
      </tbody>

    </table>
  );
}
