import { useContext, useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import ProductCard from '../components/ProductCard';
import { ShoppingCartContext } from '../contexts/ShoppingCartProvider.context';
import { products } from '../utils/dataMock.util';

function CostumerProducts() {
  const { totalPrice } = useContext(ShoppingCartContext);
  const [sowShoppingCart, setShowShoppingCart] = useState(false);

  useEffect(() => {
    setShowShoppingCart(totalPrice > 0);
  }, [totalPrice]);

  return (
    <div>
      <Navbar />
      {
        products.map((product, index) => (
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
