import { useContext } from 'react';
import { Link } from 'react-router-dom';
import TableGenerator from '../components/TableGenerator';
import Navbar from '../components/Navbar';
import { ShoppingCartContext } from '../contexts/ShoppingCartProvider.context';

export default function CustomerCheckout() {
  const { getTotalPrice } = useContext(ShoppingCartContext);

  return (
    <div>
      <Navbar />
      <h1>Finalizar Pedidos</h1>
      <TableGenerator />
      <p data-testid="customer_checkout__element-order-total-price">
        {`${getTotalPrice().toFixed(2).replace('.', ',')}`}
      </p>
      <div>
        <label htmlFor="pVendedora">
          P. vendedora Responsável
          <select
            id="pVendedora"
            name="pVendedora"
            data-testid="customer_checkout__select-seller"
          >
            <option value="PV1">Vendedor1</option>
          </select>
        </label>
        <label htmlFor="endereco">
          Endereço
          <input
            id="endereco"
            name="endereco"
            data-testid="customer_checkout__input-address"
            placeholder="Ex: rua minha rua, Bairro meu bairro"
          />
        </label>
        <label htmlFor="numero">
          Número
          <input
            id="numero"
            name="numero"
            data-testid="customer_checkout__input-address-number"
            placeholder="Ex: 198"
          />
        </label>
      </div>
      <Link to="/customer/orders">
        <button
          type="button"
          data-testid="customer_checkout__button-submit-order"
        >
          Finalizar Pedido
        </button>
      </Link>
    </div>
  );
}
