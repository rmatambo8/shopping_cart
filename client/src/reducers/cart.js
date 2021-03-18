import * as types from "../constants/actionTypes";

const cartReducer = (state = [], action) => {
  switch (action.type) {
    case types.INIT_CART:
      return action.payload.cart;
    case types.ADD_ITEM:
      let any = false;
      let result = state.map(cartItem => {
        if (cartItem.ProductId === action.payload.product.id) {
          any = true
          cartItem = {...cartItem, quantity: cartItem.quantity + 1}
        }
      })
      return any ? result : result.concat(action.payload.product)
    case types.CHECKOUT:
      return [];
    default:
      return state;
  }
}

export default cartReducer;
