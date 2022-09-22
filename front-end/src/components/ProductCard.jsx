import PropTypes from 'prop-types';

function ProductCard({ name, price, urlImage, index }) {
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
          data-testid={ `customer_products__button-card-rm-item-${index}` }
          type="button"
        >
          -
        </button>
        <input
          data-testid={ `customer_products__input-card-quantity-${index}` }
          type="number"
        />
        <button
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
  name: PropTypes.string,
  price: PropTypes.number,
  image: PropTypes.string,
  index: PropTypes.number,
}.isRequired;

export default ProductCard;
