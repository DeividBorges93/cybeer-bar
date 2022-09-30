import { useContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { ShoppingCartContext } from '../contexts/ShoppingCartProvider.context';
// import './styles/productCard.css';

function ProductCard({ product, key }) {
  const { id, name, price, urlImage } = product;
  const [quantity, setQuantity] = useState(0);
  const { handleItem } = useContext(ShoppingCartContext);

  useEffect(() => {
    setQuantity((prev) => (prev < 0 ? 0 : prev));

    handleItem({ ...product, quantity });
  }, [quantity]);

  return (
    <div key={ key } className="cardDiv centerDiv">
      <p
        className="price"
        data-testid={ `customer_products__element-card-price-${id}` }
      >
        {`${price}`.replace(/\./, ',')}
      </p>
      <img
        className="beerImg"
        data-testid={ `customer_products__img-card-bg-image-${id}` }
        alt={ name }
        src={ urlImage }
      />
      <p
        className="name"
        data-testid={ `customer_products__element-card-title-${id}` }
      >
        {name}
      </p>

      <div className="controlQuantity">
        <button
          className="subtract"
          onClick={ () => setQuantity((prev) => prev - 1) }
          data-testid={ `customer_products__button-card-rm-item-${id}` }
          type="button"
        >
          -
        </button>
        <input
          className="productQuantity"
          value={ quantity }
          onChange={ ({ target }) => setQuantity(target.value) }
          data-testid={ `customer_products__input-card-quantity-${id}` }
          type="number"
        />
        <button
          className="add"
          onClick={ () => setQuantity((prev) => prev + 1) }
          data-testid={ `customer_products__button-card-add-item-${id}` }
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
    id: PropTypes.number,
  }),
}.isRequired;

export default ProductCard;
