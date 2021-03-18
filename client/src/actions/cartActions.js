export const cartReceived = (cart) => {
  return {type: "CART_RECEIVED", payload: { cart } };
};

export const addToCart = (item) => {
  return {type: "ADD_TO_CART", payload: { item }};
};