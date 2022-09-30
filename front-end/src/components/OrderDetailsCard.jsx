import { useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import OrderProducts from './OrderProducts';

function OrderDetailsCard({ order }) {
  const { role } = JSON.parse(localStorage.getItem('user'));
  const { id, status, saleDate, totalPrice, sellers, Products } = order;

  const deliveryButton = useRef();
  const prepareOrderButton = useRef();
  const dispatchDeliveryButton = useRef();

  useEffect(() => {
    if (deliveryButton.current) {
      deliveryButton.current.disabled = order.status !== 'Entregue';
    }

    if (prepareOrderButton.current) {
      prepareOrderButton.current.disabled = order.status !== 'Pendente';
    }

    if (dispatchDeliveryButton.current) {
      dispatchDeliveryButton.current.disabled = order.status !== 'Preparando';
    }
  }, [order.status]);

  return (
    <div>
      <h1>Detalhes do Pedido</h1>
      <p>
        <span
          data-testid={
            `${role}_order_details__element-order-details-label-order-id`
          }
        >
          {id}
        </span>
        {
          role === 'customer' && (
            <span
              data-testid={
                `${role}_order_details__element-order-details-label-seller-name`
              }
            >
              {sellers?.name}
            </span>
          )
        }
        <span
          data-testid={ `${role}_order_details__element-order-details-label-order-date` }
        >
          {new Date(saleDate).toLocaleDateString('pt-BR')}
        </span>
        <span
          data-testid={
            `${role}_order_details__element-order-details-label-delivery-status${0}`
          }
        >
          {status}
        </span>
        {
          role === 'customer' ? (
            <button
              ref={ deliveryButton }
              type="button"
              data-testid="customer_order_details__button-delivery-check"
            >
              MARCAR COMO ENTREGUE
            </button>
          ) : (
            <span>
              <button
                ref={ prepareOrderButton }
                type="button"
                data-testid="seller_order_details__button-preparing-check"
              >
                PREPARAR PEDIDO
              </button>
              <button
                ref={ dispatchDeliveryButton }
                type="button"
                data-testid="seller_order_details__button-dispatch-check"
              >
                SAIU PARA ENTREGA
              </button>
            </span>
          )
        }
      </p>
      <OrderProducts items={ Products } />
      <p data-testid={ `${role}_order_details__element-order-total-price` }>
        {totalPrice?.replace('.', ',')}
      </p>
    </div>
  );
}

OrderDetailsCard.propTypes = {
  order: PropTypes.shape({
    id: PropTypes.number,
    status: PropTypes.string,
    saleDate: PropTypes.string,
    totalPrice: PropTypes.string,
    sellers: PropTypes.shape({
      name: PropTypes.string,
    }),
    Products: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
      price: PropTypes.string,
      urlImage: PropTypes.string,
      SalesProducts: PropTypes.shape({
        saleId: PropTypes.number,
        productId: PropTypes.number,
        quantity: PropTypes.number,
      }),
    })),
  }).isRequired,
};

export default OrderDetailsCard;
