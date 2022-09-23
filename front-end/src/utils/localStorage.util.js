class ShoppingCartStorage {
  static getItems = () => {
    const shoppingCart = JSON.parse(localStorage.getItem('carrinho'));
    return shoppingCart || [];
  };

  static existItem = (product) => {
    const isExist = ShoppingCartStorage
      .getItems().some((item) => item.name === product.name);
    return isExist;
  };

  static handlerItem = (product) => {
    const { quantity } = product;
    const exist = ShoppingCartStorage.existItem(product);

    if (quantity === 0 && exist) {
      ShoppingCartStorage.removeItem(product);
    }
    if (quantity === 1 && !exist) {
      ShoppingCartStorage.addItem(product);
    }
    if (quantity !== 0 && exist) {
      ShoppingCartStorage.updateItem(product);
    }
  };

  static updateItem = (product) => {
    const items = ShoppingCartStorage.getItems();

    localStorage.setItem(
      'carrinho',
      JSON.stringify(
        items.map((item) => {
          if (item.name === product.name) {
            return product;
          }
          return item;
        }),
      ),
    );
  };

  static addItem = (product) => {
    localStorage.setItem(
      'carrinho',
      JSON.stringify([...ShoppingCartStorage.getItems(), product]),
    );
  };

  static removeItem = (product) => {
    localStorage.setItem(
      'carrinho',
      JSON.stringify(
        ShoppingCartStorage.getItems().filter((item) => item.name !== product.name),
      ),
    );
  };
}

export default ShoppingCartStorage;
