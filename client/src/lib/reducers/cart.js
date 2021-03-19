const cart = (state = [], action) => {
  switch (action.type) {
    case "CART_RECEIVED":
      return action.payload.cart;
    case "ADD_TO_CART":
      state = state.slice();
      const index = state.findIndex(({id}) => id === action.payload.item.id);
      if (index === -1) {
        return state.concat(action.payload.item);
      } else {
        return state.map((object, idx) => {
          if (index === idx) {
            object = { ...object }
            object.quantity++
          }
          return object;
        });
      }
    case "CHECKOUT":
      return [];
    default:
      return state;
  }
}

export default cart;