import { createContext, useState } from 'react';
import PropTypes from 'prop-types';

export const ShoppingCartContext = createContext();

function ShoppingCartProvider({ children }) {
  const [totalPrice, setTotalPrice] = useState(0);

  return (
    // eslint-disable-next-line react/jsx-no-constructed-context-values
    <ShoppingCartContext.Provider value={ { totalPrice, setTotalPrice } }>
      {children}
    </ShoppingCartContext.Provider>
  );
}

ShoppingCartProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ShoppingCartProvider;
