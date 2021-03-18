const cart = (state = [], action) => {
  switch (action.type) {
    case "CART_RECEIVED":
      return action.payload.cart;
    case "ADD_TO_CART":
      state = state.slice();
      const index = state.findIndex(({id}) => id === action.payload.item.id);
      if (index === -1) {
        state.push(action.payload.item);
      } else {
        state[index].quantity++;
      }

      return state;
    default:
      return state;
  }
}

export default cart;