export default (state = [], action) => {
  const {type, data} = action
  switch (type) {
    case "GET_PRODUCTS":
      return data;
    case "ADD_ITEM_TO_CART":
      return state.map(product => {
        if (product.id === data.productId) { // this is triggered from the cart
          product = { ...product }
          product.quantity--
        }
        return product
      })
    case "ADD_NEW_PRODUCT":
      return state.concat(data)
    case "UPDATE_PRODUCT":
      return state.map(product => {
        if (product.id === data.id) {
          return data
        }
        return product
      })
    case "DELETE_PRODUCT":
      return state.filter(product => product.id !== data.id);
    default:
      return state
  }
}

