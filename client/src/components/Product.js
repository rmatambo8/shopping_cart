import React, {useState} from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from '../actions/cart';
import { deleteProduct } from '../api';
import Form from './Form';

const Product = ({ product}) => {
  const [editing, setEditing] = useState(false);
  const dispatch = useDispatch();
  const removeProduct = async (id) => {
		dispatch(deleteProduct(id))
  }

  const addItem = async product => {
    dispatch(addToCart(product))
  }
  const changeEditMode = (event) => {
    event.preventDefault();
    setEditing(!editing);
  }

  const renderForm = () => {
    return (
      <div className="edit-form">
        <Form
          editing={editing}
          product={product}
          toggleForm={changeEditMode}
        />
      </div>
    )
  }

  const {id, price, quantity, title } = product;

  return (
    <div className="product" data-id={id}>
      <div className="product-details">
        <h3>{title}</h3>
        <p className="price">{price}</p>
        <p className="quantity">{quantity} left in stock</p>
        <div className="actions product-actions">
          {editing || <a className={quantity > 0 ? "button add-to-cart" : "button add-to-cart disabled"} onClick={() => addItem(product)}>Add to Cart</a>}
          {editing || <a onClick={changeEditMode} className="button edit">Edit</a>}
        </div>
        {editing && renderForm()}
        <a className="delete-button" onClick={() => removeProduct(id)}><span>X</span></a>
      </div>
    </div>
  )
}

export default Product;
