
export const productsReceived = (products) => {
  return { type: "PRODUCTS_RECEIVED", payload: { products } };
}

export const decrementQuantity = (itemId) => {
  return {type: "DECREMENT_QUANTITY", payload: { itemId }};
}

export const addProduct = (product) => {
  return { type: "ADD_PRODUCT", payload: { product }};
}

export const updateProduct = () => {

}

export const deleteProduct = (id) => {
  return { type: "DELETE_PRODUCT", payload: { id }};
}