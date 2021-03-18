import * as types from "../constants/actionTypes";

export const initProducts = (products) => {
  return {type: types.INIT_PRODUCTS, payload: {products}};
}

export const addProduct = (product) => {
  return {type: types.ADD_PRODUCT, payload: {product}};
}

export const updateProduct = (product) => {
  return {type: types.UPDATE_PRODUCT, payload: {product}};
}

export const deleteProduct = (id) => {
  return {type: types.DELETE_PRODUCT, payload: {id}};
}

export const addItem = ({productId}) => {
  return {type: types.ADD_ITEM, payload: {productId}};
}

