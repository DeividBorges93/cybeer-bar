import { useContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { ShoppingCartContext } from '../contexts/ShoppingCartProvider.context';

function ProductCard({ product }) {
  const { id, name, price, urlImage } = product;
  const [quantity, setQuantity] = useState(0);
  const { handleItem } = useContext(ShoppingCartContext);

  useEffect(() => {
    setQuantity((prev) => (prev < 0 ? 0 : prev));

    handleItem({ ...product, quantity });
  }, [quantity]);

  return (
    <>
      <span
        data-testid={ `customer_products__element-card-price-${id}` }
      >
        {`${price}`.replace(/\./, ',')}
      </span>
      <img
        data-testid={ `customer_products__img-card-bg-image-${id}` }
        width="100px"
        style={ { margin: 'auto' } }
        alt={ name }
        src={ urlImage }
      />
      <span
        data-testid={ `customer_products__element-card-title-${id}` }
      >
        {name}
      </span>

      <div>
        <button
          onClick={ () => setQuantity((prev) => prev - 1) }
          data-testid={ `customer_products__button-card-rm-item-${id}` }
          type="button"
        >
          -
        </button>
        <input
          style={ { width: '30px', textAlign: 'center', padding: '0px' } }
          value={ quantity }
          onChange={ ({ target }) => setQuantity(target.value) }
          data-testid={ `customer_products__input-card-quantity-${id}` }
          type="number"
        />
        <button
          onClick={ () => setQuantity((prev) => prev + 1) }
          data-testid={ `customer_products__button-card-add-item-${id}` }
          type="button"
        >
          +
        </button>
      </div>
    </>
  );
}

ProductCard.propTypes = {
  product: PropTypes.shape({
    name: PropTypes.string,
    price: PropTypes.number,
    image: PropTypes.string,
    id: PropTypes.number,
  }),
}.isRequired;

export default ProductCard;
