import { useContext } from 'react';
import { ShoppingCartContext } from '../contexts/ShoppingCartProvider.context';

const columns = [{ value: 'Item' },
  { value: 'Descrição' },
  { value: 'Quantidade' },
  { value: 'Valor Unitário' },
  { value: 'Sub-total' },
  { value: 'Remover Item' }];

export default function TableGenerator() {
  const { role } = JSON.parse(localStorage.getItem('user'));
  const { items, removeItem } = useContext(ShoppingCartContext);
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
              data-testid={ `${role}_checkout__element-order-table-item-number-${i}` }
            >
              { i + 1 }
            </td>
            <td
              data-testid={ `${role}_checkout__element-order-table-name-${i}` }
            >
              { item.name }
            </td>
            <td
              data-testid={ `${role}_checkout__element-order-table-quantity-${i}` }
            >
              <p>{ (item.quantity).toString().replace('.', ',') }</p>

            </td>
            <td
              data-testid={ `${role}_checkout__element-order-table-unit-price-${i}` }
            >
              { (item.price).replace('.', ',') }

            </td>
            <td
              data-testid={ `${role}_checkout__element-order-table-sub-total-${i}` }
            >
              { (item.quantity * item.price).toFixed(2).replace('.', ',') }

            </td>
            <td
              data-testid={ `${role}_checkout__element-order-table-remove-${i}` }
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
