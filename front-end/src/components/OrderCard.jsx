import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'react-router-dom';

function OrderCard({ order }) {
  const { id, status, saleDate, totalPrice } = order;

  return (
    <Link to={ `/customer/orders/${id}` }>
      <p data-testid={ `customer_orders__element-order-id-${id}` }>{id}</p>
      <p data-testid={ `customer_orders__element-delivery-status-${id}` }>
        {status}
      </p>
      <p data-testid={ `customer_orders__element-order-date-${id}` }>
        {new Date(saleDate).toLocaleDateString('pt-BR')}
      </p>
      <p data-testid={ `customer_orders__element-card-price-${id}` }>
        {totalPrice.replace('.', ',')}
      </p>
    </Link>
  );
}

OrderCard.propTypes = {
  order: PropTypes.shape({
    id: PropTypes.number,
    status: PropTypes.string,
    saleDate: PropTypes.string,
    totalPrice: PropTypes.string,
  }).isRequired,
};

export default OrderCard;
