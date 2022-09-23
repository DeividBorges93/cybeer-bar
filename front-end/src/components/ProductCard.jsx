import { useContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import ShoppingCartStorage from '../utils/shoppingCartStorage';
import { ShoppingCartContext } from '../contexts/ShoppingCartProvider.context';

function ProductCard({ product }) {
  const { name, price, urlImage, index } = product;
  const [quantity, setQuantity] = useState(0);
  const { setTotalPrice } = useContext(ShoppingCartContext);

  useEffect(() => {
    const item = ShoppingCartStorage.getItem(product);
    setQuantity(item?.quantity || 0);
  }, []);

  useEffect(() => {
    setQuantity((prev) => (prev < 0 ? 0 : prev));
    ShoppingCartStorage.handlerItem({ ...product, quantity });

    const prices = ShoppingCartStorage.getTotalPrice();
    setTotalPrice(prices);
  }, [quantity]);

  return (
    <div data-testid={ `customer_products__element-card-price-${index}` }>
      <span
        data-testid={ `customer_products__element-card-price-${index}` }
      >
        {price}
      </span>
      <image
        data-testid={ `customer_products__img-card-bg-image-${index}` }
        width="100%"
        src={ urlImage }
      />
      <span
        data-testid={ `customer_products__element-card-title-${index}` }
      >
        {name}
      </span>

      <div>
        <button
          onClick={ () => setQuantity((prev) => prev - 1) }
          data-testid={ `customer_products__button-card-rm-item-${index}` }
          type="button"
        >
          -
        </button>
        <input
          value={ quantity }
          onChange={ ({ target }) => setQuantity(target.value) }
          data-testid={ `customer_products__input-card-quantity-${index}` }
          type="number"
        />
        <button
          onClick={ () => setQuantity((prev) => prev + 1) }
          data-testid={ `customer_products__button-card-add-item-${index}` }
          type="button"
        >
          +
        </button>
      </div>
    </div>
  );
}

ProductCard.propTypes = {
  product: PropTypes.shape({
    name: PropTypes.string,
    price: PropTypes.number,
    image: PropTypes.string,
    index: PropTypes.number,
  }),
}.isRequired;

export default ProductCard;
