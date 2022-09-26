import { createContext, useMemo, useState } from 'react';
import PropTypes from 'prop-types';

export const ShoppingCartContext = createContext();

function ShoppingCartProvider({ children }) {
  const [items, setItems] = useState([]);

  const getTotalPrice = () => (
    items.reduce((acc, value) => acc + (value.price * value.quantity), 0)
  );
  const removeItem = (product) => setItems((prev) => prev
    .filter((item) => item.name !== product.name));
  const addItem = (product) => setItems([...items, product]);
  const getItem = (product) => items.find(({ name }) => name === product.name);
  const updateItem = (product) => {
    setItems(items.map((item) => (item.name === product.name ? product : item)));
  };
  const handleItem = (product) => {
    const { quantity } = product;
    const exist = getItem(product);

    if (exist) {
      if (quantity === 0) removeItem(product);
      else updateItem(product);
    } else {
      addItem(product);
    }
  };

  const context = useMemo(() => ({
    getTotalPrice,
    handleItem,
    addItem,
    removeItem,
    updateItem,
    setItems,
    getItem,
    items,
  }), [items]);

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
