
const products = (state = [], action) => {
  switch (action.type) {
    case "PRODUCTS_RECEIVED":
      return action.payload.products;
    case "ADD_TO_CART":
      state = state.map(product => {
        if (product.id === action.payload.item.productId) {
          product = { ...product };
          product.quantity--;
        }
        return product;
      });
      return state;
    
    case "ADD_PRODUCT":
      return state.concat(action.payload.product);
    case "UPDATE_PRODUCT":
      return state.map((product) => {
        if (product.id === action.payload.product.id) {
          product = { ...action.payload.product }
        }
        return product;
      });
    case "DELETE_PRODUCT":
      return state.filter((product) => product.id != action.payload.id);
    default:
      return state;
  }
}

export default products;