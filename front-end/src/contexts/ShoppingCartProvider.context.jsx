import { createContext, useMemo, useState } from 'react';
import PropTypes from 'prop-types';

export const ShoppingCartContext = createContext();

function ShoppingCartProvider({ children }) {
  const [totalPrice, setTotalPrice] = useState(0);

  const context = useMemo(() => ({ totalPrice, setTotalPrice }), [totalPrice]);

  return (
    <ShoppingCartContext.Provider value={ context }>
      {children}
    </ShoppingCartContext.Provider>
  );
}

ShoppingCartProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ShoppingCartProvider;
