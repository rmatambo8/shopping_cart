
const products = (state = [], action) => {
  switch (action.type) {
    case "PRODUCTS_RECEIVED":
      return action.payload.products;
    case "DECREMENT_QUANTITY":
      state = state.slice();
      const item = state.find(({id}) => id == action.payload.itemId);
      item.quantity--;
      return state;
    case "ADD_PRODUCT":
      return state.concat(action.payload.product);
    case "UPDATE_PRODUCT":
      // return state.map((object) => {
      //   if (object.id === )
      // })
    case "DELETE_PRODUCT":
      return state.filter((object) => object.id != action.payload.id);
    default:
      return state;
  }
}

export default products;