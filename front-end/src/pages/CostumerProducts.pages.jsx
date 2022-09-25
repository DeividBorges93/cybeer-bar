import { useContext, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from '../components/Navbar';
import ProductCard from '../components/ProductCard';
import { ShoppingCartContext } from '../contexts/ShoppingCartProvider.context';
import CyBeerBarAPI from '../services/CyBeerBarAPI.service';

function CostumerProducts() {
  const { totalPrice } = useContext(ShoppingCartContext);
  const [products, setProducts] = useState([]);
  const [sowShoppingCart, setShowShoppingCart] = useState(false);
  const { state } = useLocation();

  useEffect(() => {
    localStorage.setItem('user', JSON.stringify(state));
    new CyBeerBarAPI().restoreProducts().then((data) => setProducts(data));
  }, []);

  useEffect(() => {
    setShowShoppingCart(totalPrice > 0);
  }, [totalPrice]);

  return (
    <div>
      <Navbar />
      {
        products?.map((product, index) => (
          <ProductCard
            key={ `${product.name}-${index}` }
            product={ product }
          />
        ))
      }

      { sowShoppingCart && (
        <button
          type="button"
          data-testid="customer_products__checkout-bottom-value"
        >
          {`Ver Carrinho: R$${(totalPrice.toFixed(2))}`}
        </button>
      )}
    </div>
  );
}

export default CostumerProducts;
