
const products = (state = [], action) => {
  switch (action.type) {
    case "PRODUCTS_RECEIVED":
      return action.payload.products
    default: 
      return state;
  }
}