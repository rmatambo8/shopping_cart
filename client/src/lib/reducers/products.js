
const products = (state = [], action) => {
  switch (action.type) {
    case "PRODUCTS_RECEIVED":
      return action.payload.products;
    case "DECREMENT_QUANTITY":
      state = state.slice();
      const item = state.find(({id}) => id == action.payload.itemId);
      item.quantity--;
      return state;
    default:
      return state;
  }
}

export default products;