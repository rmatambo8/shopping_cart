import axios from "axios";

export const loadProducts = () => {
  return axios.get('/api/products')
    .then(({data}) => data);
}

export const deleteProduct = (id) => {
  return axios.delete(`/api/products/${id}`)
}
