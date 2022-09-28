import React, { useState, useEffect } from 'react';
import OrderCard from '../components/OrderCard';
import CyBeerBarAPI from '../services/CyBeerBarAPI.service';

function CustomerOrders() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    new CyBeerBarAPI().getOrders()
      .then((data) => setOrders(data));
  }, []);

  return (
    <section>
      { orders?.map((order) => (
        <OrderCard key={ order.id } order={ order } />
      )) }
    </section>
  );
}

export default CustomerOrders;
