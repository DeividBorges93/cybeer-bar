import { useEffect, useState, useRef } from 'react';
import { useParams } from 'react-router-dom';
import OrderProducts from '../components/OrderProducts';
import Navbar from '../components/Navbar';
import CyBeerBarAPI from '../services/CyBeerBarAPI.service';

export default function OrderDetail() {
  const [order, setOrder] = useState({});

  const deliveryButton = useRef();

  const { id } = useParams();
  useEffect(() => {
    new CyBeerBarAPI().getOrdersDetails(id).then(setOrder);
  }, []);

  useEffect(() => {
    deliveryButton.current.disabled = order.status !== 'Entregue';
  }, [order.status]);

  console.log(order);
  return (
    <div>
      <Navbar />
      <h1>Detalhes do Pedido</h1>
      <p>
        <span data-testid="customer_order_details__element-order-details-label-order-id">
          {order.id}
        </span>
        <span
          data-testid="customer_order_details__element-order-details-label-seller-name"
        >
          {order.sellers?.name}
        </span>
        <span
          data-testid="customer_order_details__element-order-details-label-order-date"
        >
          {new Date(order.saleDate).toLocaleDateString('pt-BR')}
        </span>
        <span
          data-testid={
            `customer_order_details__element-order-details-label-delivery-status${0}`
          }
        >
          {order.status}
        </span>
        <button
          ref={ deliveryButton }
          type="button"
          data-testid="customer_order_details__button-delivery-check"
        >
          MARCAR COMO ENTREGUE
        </button>
      </p>
      <OrderProducts items={ order.salesProduscts } />
      <p data-testid="customer_order_details__element-order-total-price">
        {order.totalPrice?.replace('.', ',')}
      </p>
    </div>
  );
}
