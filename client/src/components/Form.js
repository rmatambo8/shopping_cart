import React from 'react';
import { useDispatch } from 'react-redux';
import { addProduct, updateProduct } from '../actions/productActions';
import useField from './useField';
import axios from 'axios';

const Form = ({ editing, toggleForm, product, handleSubmit }) => {
  const dispatch = useDispatch();

  if (product === undefined) product = {title: "", price: "", quantity: ""}
  
  const [title, titleReset] = useField(product.title);
  const [price, priceReset] = useField(product.price);
	const [quantity, quantityReset] = useField(product.quantity);

  const handleProductChange = event => {
    event.preventDefault();
    toggleForm(event);
    const object = { title: title.value, price: price.value, quantity: quantity.value };
    if (!editing) {
      return addNewProduct(object, resetForm);
    } else {
      object.id = product.id
      editProduct(object, resetForm);
    }
    // handleSubmit(object, resetForm);
  }

  const resetForm = () => {
    titleReset();
    priceReset();
    quantityReset();
  }

  const addNewProduct = (item, callback) => {
		axios.post("/api/products", item)
			.then(({data}) => {
				return data
			}).then((product) => {
				dispatch(addProduct(product));
				callback();
			});
	}

  const editProduct = (product, callback) => {
    console.log(product);
    axios.put(`/api/products/${product.id}`, product)
      .then(res => res.data)
      .then((changedProduct) => {
        console.log(changedProduct);
        dispatch(updateProduct(changedProduct))
        callback();
      })
				// setProducts(
				// 	products.map((prod) => {
				// 		if (prod.id === changedProduct.id) {
				// 			return changedProduct;
				// 		} else {
				// 			return prod;
				// 		}
				// 	})
				// );
				// callback();
			// });
  }

  return (
    <form className="visible">
      <div className="input-group">
          <label htmlFor="product-name">Product Name</label>
        {editing ?
          <input id="product-name" {...title} onChange={title.onChange} /> :
          <input type="text" id="product-name" onChange={title.onChange} name="product-name" />}
      </div>
      <div className="input-group">
        <label htmlFor="product-price">Price</label>
        {editing ?
          <input id="product-price" {...price} onChange={price.onChange}/> :
          <input type="text" id="product-price" name="product-price" onChange={price.onChange} />}
      </div>

      <div className="input-group">
        <label htmlFor="product-quantity">Quantity</label>
        {editing ?
          <input id="product-quantity" {...quantity} onChange={quantity.onChange} /> :
          <input type="text" id="product-quantity" name="product-quantity" onChange={quantity.onChange} />}
      </div>
      <div className="actions form-actions">
        <a href="#" onClick={handleProductChange} className="button">{editing ? "Update" : "Add"}</a>
        <a href="#" onClick={toggleForm} className="button">Cancel</a>
      </div>
    </form>
  )
}

export default Form;
