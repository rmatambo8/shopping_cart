import React, {useState} from 'react';
import Form from './Form';
import axios from 'axios';

import useField from './useField';

const Product = ({ product, addItem, removeItem, removeProduct, onProductChange }) => {
  const [editing, setEditing] = useState(false);

  const changeEditMode = (event) => {
    event.preventDefault();
    setEditing(!editing);
  }

  const handleSubmit = (currentItem, callback) => {
    onProductChange({ ...currentItem, id: product.id }, callback);
  }

  const renderForm = () => {
    return (
      <div className="edit-form">
        <Form
          editing={editing}
          product={product}
          toggleForm={changeEditMode}
          handleSubmit={handleSubmit}
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
