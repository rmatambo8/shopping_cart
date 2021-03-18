import * as api from '../api';

// action creators

export const getProducts = () => {
  return async dispatch => {
    try {
      const { data } = await api.getProducts();
      const action = { type: "GET_PRODUCTS", data };
      dispatch(action);
    } catch (error) {
      console.log(error.message);
    }
  }
}
export const addProduct = (item) => {
  return async (dispatch) => {
    try {
      const data = await api.addProduct(item)
      const action = { type: "ADD_NEW_PRODUCT", data };
      dispatch(action);
    } catch (error) {
      console.log(error.message);
    }
  }
}

export const updateProduct = (item) => {
  return async (dispatch) => {
    try {
      const data = await api.updateProduct(item)
      const action = { type: "UPDATE_PRODUCT", data };
      dispatch(action);
    } catch (error) {
      console.log(error.message);
    }
  };
}

export const deleteProduct = (id) => {
  return async (dispatch) => {
    try {
      const data = await api.deleteProduct(id)
      const action = { type: "DELETE_PRODUCT", data: { id } };
      dispatch(action);
    } catch (error) {
      console.log(error.message);
    }
  }
}