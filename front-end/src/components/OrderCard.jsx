import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'react-router-dom';

function OrderCard({ order }) {
  const { role } = JSON.parse(localStorage.getItem('user'));
  const { id, status, saleDate, totalPrice, deliveryAddress, deliveryNumber } = order;
  return (
    <Link to={ `/${role}/orders/${id}` }>
      <p data-testid={ `${role}_orders__element-order-id-${id}` }>{id}</p>
      <p data-testid={ `${role}_orders__element-delivery-status-${id}` }>
        {status}
      </p>
      <p data-testid={ `${role}_orders__element-order-date-${id}` }>
        {new Date(saleDate).toLocaleDateString('pt-BR')}
      </p>
      <p data-testid={ `${role}_orders__element-card-price-${id}` }>
        {totalPrice.replace('.', ',')}
      </p>
      {
        role === 'seller' && (
          <p data-testid={ `seller_orders__element-card-address-${id}` }>
            {`${deliveryAddress},${deliveryNumber}`}
          </p>
        )
      }
    </Link>
  );
}

OrderCard.propTypes = {
  order: PropTypes.shape({
    id: PropTypes.number,
    status: PropTypes.string,
    saleDate: PropTypes.string,
    totalPrice: PropTypes.string,
    deliveryAddress: PropTypes.string,
    deliveryNumber: PropTypes.string,
  }).isRequired,
};

export default OrderCard;
