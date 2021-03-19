import * as types from "../constants/actionTypes";
import * as services from "../services/productService";

// Works with thunk
export const initProducts = () => {
  return dispatch => {
    services.loadProducts().then(products => {
      dispatch({
        type: types.INIT_PRODUCTS,
        payload: {products}
      });
    })
  }
}

export const addProduct = (product) => {
  return {type: types.ADD_PRODUCT, payload: {product}};
}

export const updateProduct = (product) => {
  return {type: types.UPDATE_PRODUCT, payload: {product}};
}

// Works with thunk
export const deleteProduct = (id) => {
  return (dispatch) => {
    services.deleteProduct(id)
      .then(() => {
        dispatch({
          type: types.DELETE_PRODUCT,
          payload: {id}
        });
      })
  }
}

export const addItem = ({productId}) => {
  return {type: types.ADD_ITEM, payload: {productId}};
}

