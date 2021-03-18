
export const productsReceived = (products) => {
  return { type: "PRODUCTS_RECEIVED", payload: { products } };
}

export const decrementQuantity = (itemId) => {
  return {type: "DECREMENT_QUANTITY", payload: { itemId }};
}
