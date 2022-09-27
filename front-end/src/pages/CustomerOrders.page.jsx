import React, { useState, useEffect } from 'react';
import OrderCard from '../components/OrderCard';
import CyBeerBarAPI from '../services/CyBeerBarAPI.service';

function CustomerOrders() {
  const [orders, setOrders] = useState([]);

  useEffect(() => new CyBeerBarAPI().getOrders().then(setOrders), []);

  return (
    <section>
      { orders.map((order) => (
        <OrderCard key={ order.id } orderId={ order.id } />
      )) }
    </section>
  );
}

export default CustomerOrders;
