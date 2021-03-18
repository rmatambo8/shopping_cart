
import axios from 'axios'

export const getCart = async () => {
  const { data } = await axios.get('/api/cart');
  return data;
}

export const addProductToCart = async (item) => {
  const { data } = await axios.post('/api/cart', { productId: item.id, product: { ...item } });
  return data
}



export const getProducts = async () => {
  const { data } = await axios.get('/api/products');
  return data;
}

export const addProduct = async (item) => {
  const { data } = await axios.post("/api/products", item);
  return data;
}

export const updateProduct = async (product) => {
  const { data } = await axios.put(`/api/products/${product.id}`, product);
  return data;
}

export const deleteProduct = async (id) => {
  const { data } = await axios.delete(`/api/products/${id}`);
  return data;
}

export const checkout = async () => {
  const { data } = await axios.get('/api/checkout')
  return data
}
