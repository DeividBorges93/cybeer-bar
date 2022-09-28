import { useContext, useRef, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import TableGenerator from '../components/TableGenerator';
import Navbar from '../components/Navbar';
import { ShoppingCartContext } from '../contexts/ShoppingCartProvider.context';
import CyBeerBarAPI from '../services/CyBeerBarAPI.service';
import { formatOrderRequest } from '../utils/formatters';

export default function CustomerCheckout() {
  const navigate = useNavigate();
  const [sellers, setSellers] = useState();
  const { items, getTotalPrice } = useContext(ShoppingCartContext);
  const deliveryAddressRef = useRef();
  const deliveryNumberRef = useRef();
  const sellerRef = useRef();

  useEffect(() => {
    new CyBeerBarAPI().getSellers()
      .then((data) => setSellers(data));
  }, []);

  const saveOrder = () => {
    new CyBeerBarAPI().saveOrder(
      formatOrderRequest({
        items,
        totalPrice: getTotalPrice(),
        sellerRef,
        deliveryAddressRef,
        deliveryNumberRef,
      }),
      navigate,
    );
  };

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
            ref={ sellerRef }
            name="pVendedora"
            data-testid="customer_checkout__select-seller"
          >
            { sellers?.map((seller) => (
              <option key={ seller.id } value={ seller.id }>{ seller.name }</option>
            ))}
          </select>
        </label>
        <label htmlFor="endereco">
          Endereço
          <input
            id="endereco"
            name="endereco"
            ref={ deliveryAddressRef }
            data-testid="customer_checkout__input-address"
            placeholder="Ex: rua minha rua, Bairro meu bairro"
          />
        </label>
        <label htmlFor="numero">
          Número
          <input
            id="numero"
            name="numero"
            ref={ deliveryNumberRef }
            data-testid="customer_checkout__input-address-number"
            placeholder="Ex: 198"
          />
        </label>
      </div>
      <button
        onClick={ saveOrder }
        type="button"
        data-testid="customer_checkout__button-submit-order"
      >
        Finalizar Pedido
      </button>
    </div>
  );
}
