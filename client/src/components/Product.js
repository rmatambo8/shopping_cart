import React, {useState} from 'react';
import Form from './Form';

import useField from './useField';

const Product = ({ product, addItem, removeItem, removeProduct }) => {
  const [editing, setEditing] = useState(false);
  const [item, setItem] = useState(product);

  const titleEdit = useField(product.title);
  const priceEdit = useField(product.price);
  const quantityEdit = useField(product.quantity);

  const changeEditMode = (event) => {
    event.preventDefault();
    setEditing(!editing);
  }

  const handleSubmit = (currentItem) => {
    setItem(currentItem);
  }

  const renderForm = () => {
    return (
      <div className="edit-form">
        <Form
          editing={editing}
          title={titleEdit}
          price={priceEdit}
          quantity={quantityEdit}
          toggleForm={changeEditMode}
          handleSubmit={handleSubmit}
        />
      </div>
    )
  }

  const {id, price, quantity, title } = item;

  return (
    <div className="product" data-id={id}>
      <div className="product-details">
        <h3>{title}</h3>
        <p className="price">{price}</p>
        <p className="quantity">{quantity} left in stock</p>
        <div className="actions product-actions">
          {editing || <a className={quantity > 0 ? "button add-to-cart" : "button add-to-cart disabled"} onClick={() => addItem(item)}>Add to Cart</a>}
          {editing || <a onClick={changeEditMode} className="button edit">Edit</a>}
        </div>
        {editing && renderForm()}
        <a className="delete-button" onClick={() => removeProduct(id)}><span>X</span></a>
      </div>
    </div>
  )
}

export default Product;
