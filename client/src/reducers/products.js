import * as types from "../constants/actionTypes";

const productReducer = (state = [], action) => {
  switch (action.type) {
    case types.INIT_PRODUCTS:
      return action.payload.products;
    case types.ADD_PRODUCT:
      return [...state, action.payload.product];
    case types.UPDATE_PRODUCT:
      return action.products.map(product => {
        if (product.id === action.payload.product.id) {
          return action.payload.product;
        } else {
          return product;
        }
      });
    case types.DELETE_PRODUCT:
      return action.products.filter(product => {
        return product.id !== action.payload.id;
      });
    case types.ADD_ITEM:
      return state.map(product => {
        if (product.id === action.payload.productId) {
          return {...product, quantity: product.quantity - 1};
        } else {
          return product;
        }
      });
    default:
      return state;
  }
}

export default productReducer;
