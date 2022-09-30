import { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/NavBar';
import ProductCard from '../components/ProductCard';
import { ShoppingCartContext } from '../contexts/ShoppingCartProvider.context';
import CyBeerBarAPI from '../services/CyBeerBarAPI.service';
// import './style/costumerProducts.css';

function CostumerProducts() {
  const { items, getTotalPrice } = useContext(ShoppingCartContext);
  const [products, setProducts] = useState([]);
  const [showShoppingCartButton, setShowShoppingCartButton] = useState(true);

  const navigate = useNavigate();

  useEffect(() => {
    new CyBeerBarAPI().restoreProducts().then((data) => setProducts(data));
  }, []);

  useEffect(() => setShowShoppingCartButton(getTotalPrice() === 0), [items]);

  return (
    <div>
      <Navbar />
      <div className="containerProducts">
        {
          products?.map((product, index) => (
            <ProductCard key={ index } product={ product } />
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
