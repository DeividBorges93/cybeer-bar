import { useContext, useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Navbar from '../components/NavBar';
import ProductCard from '../components/ProductCard';
import { ShoppingCartContext } from '../contexts/ShoppingCartProvider.context';
import CyBeerBarAPI from '../services/CyBeerBarAPI.service';

function CostumerProducts() {
  const { items, getTotalPrice } = useContext(ShoppingCartContext);
  const [products, setProducts] = useState([]);
  const [showShoppingCartButton, setShowShoppingCartButton] = useState(true);

  const { state } = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    localStorage.setItem('user', JSON.stringify(state));
    new CyBeerBarAPI().restoreProducts().then((data) => setProducts(data));
  }, []);

  useEffect(() => setShowShoppingCartButton(getTotalPrice() === 0), [items]);

  return (
    <div>
      <Navbar />
      <div style={ { display: 'flex', margin: '50px auto', flexWrap: 'wrap' } }>
        {
          products?.map((product, index) => (
            <div
              key={ index }
              style={ {
                border: '1px solid white',
                width: '150px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
              } }
            >
              <ProductCard product={ product } />
            </div>
          ))
        }
      </div>
      <button
        onClick={ () => navigate('/customer/checkout') }
        type="button"
        data-testid="customer_products__button-cart"
        disabled={ showShoppingCartButton }
      >
        <span data-testid="customer_products__checkout-bottom-value">
          {`${getTotalPrice().toFixed(2)}`.replace(/\./, ',')}
        </span>
      </button>
    </div>
  );
}

export default CostumerProducts;
