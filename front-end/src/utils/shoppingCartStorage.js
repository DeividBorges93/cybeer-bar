class ShoppingCartStorage {
  static getItems = () => {
    const items = JSON.parse(localStorage.getItem('carrinho'));
    return items || [];
  };

  static getItem = (product) => {
    const foundItem = ShoppingCartStorage
      .getItems().find((item) => item.name === product.name);
    return foundItem;
  };

  static existItem = (product) => {
    const isExist = ShoppingCartStorage
      .getItems().some((item) => item.name === product.name);
    return isExist;
  };

  static handlerItem = (product) => {
    const { quantity } = product;
    const exist = ShoppingCartStorage.existItem(product);

    if (quantity === 0) {
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
    const afterUpdate = items.map((item) => {
      if (item.name === product.name) return product;
      return item;
    });

    ShoppingCartStorage.setItem(afterUpdate);
  };

  static addItem = (product) => {
    const afterAdd = [...ShoppingCartStorage.getItems(), product];

    ShoppingCartStorage.setItem(afterAdd);
  };

  static removeItem = (product) => {
    const afterRemove = ShoppingCartStorage
      .getItems().filter((item) => item.name !== product.name);

    ShoppingCartStorage.setItem(afterRemove);
  };

  static setItem = (data) => {
    localStorage.setItem('carrinho', JSON.stringify(data));
  };

  static getTotalPrice = () => {
    const items = ShoppingCartStorage.getItems();
    return items.reduce((acc, value) => acc + (value.price * value.quantity), 0);
  };
}

export default ShoppingCartStorage;
