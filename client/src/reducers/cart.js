import * as types from "../constants/actionTypes";

const cartReducer = (state = [], action) => {
  switch (action.type) {
    case types.INIT_CART:
      return action.payload.cart;
    case types.ADD_ITEM:
      

    case types.CHECKOUT:

    default:
      return state;
  }
}

export default cartReducer;
