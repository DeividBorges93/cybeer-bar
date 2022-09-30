import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Navbar from '../components/Navbar';
import OderDetailsCard from '../components/OrderDetailsCard';
import CyBeerBarAPI from '../services/CyBeerBarAPI.service';

export default function CustomerOrderDetail() {
  const [order, setOrder] = useState({});

  const { id } = useParams();
  useEffect(() => {
    new CyBeerBarAPI().getOrdersDetails(id).then(setOrder);
  }, []);

  return (
    <div>
      <Navbar />
      <OderDetailsCard key={ order.id } order={ order } />
    </div>
  );
}
