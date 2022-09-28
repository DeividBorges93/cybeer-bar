export const formatProductOrder = (arrayItems) => (
  arrayItems.map(({ id, quantity }) => (
    { productId: id, quantity }
  ))
);

export const formatOrderRequest = (params) => {
  const { items, totalPrice, sellerRef, deliveryAddressRef, deliveryNumberRef } = params;

  return {
    salesProduct: [...formatProductOrder(items)],
    totalPrice,
    userId: JSON.parse(localStorage.getItem('user')).id,
    sellerId: Number(sellerRef.current.value),
    deliveryAddress: deliveryAddressRef.current.value,
    deliveryNumber: deliveryNumberRef.current.value,
    status: 'Pendente',
    saleDate: new Date(),
  };
};
