import PropTypes from 'prop-types';
import React from 'react';

function OrderCard(props) {
  const { orderId, status, date, value } = props;

  return (
    <div>
      <p data-testid={ `customer_orders__element-order-id-${orderId}` }>{ orderId }</p>
      <p data-testid={ `customer_orders__element-delivery-status-${orderId}` }>
        { status }
      </p>
      <p data-testid={ `customer_orders__element-order-date-${orderId}` }>{ date }</p>
      <p data-testid={ `customer_orders__element-card-price-${orderId}` }>{ value }</p>
    </div>
  );
}

OrderCard.propTypes = {
  orderId: PropTypes.number.isRequired,
  status: PropTypes.string.isRequired,
  date: PropTypes.instanceOf(Date).isRequired,
  value: PropTypes.number.isRequired,
};

export default OrderCard;
