import React, {useState} from 'react';
import Form from './Form';

import useField from './useField'

const Product = ({ product, addItem, removeItem }) => {
  const [editing, setEditing] = useState(false)
  const [item, setItem] = useState(product)

  const titleEdit = useField(product.title);
  const priceEdit = useField(product.price);
  const quantityEdit = useField(product.price);
  
  const changeEditMode = (event) => {
    event.preventDefault()
    setEditing(!editing)
  }
  const handleSubmit = (currentItem) => {
    setItem(currentItem)
  }

  const renderForm = () => {
    return (<Form editing={editing} title={titleEdit} price={priceEdit} quantity={quantityEdit} toggleForm={changeEditMode} handleSubmit={handleSubmit}/>)
  } 
  const {id, price, quantity, title } = item;
  return (
    <div className="product" data-id={id}>
      <div className="product-details">
        <h3>{title}</h3>
        <p className="price">{price}</p>
        <p className="quantity">{quantity} left in stock</p>
        <div className="actions product-actions">
          <a className="button add-to-cart">Add to Cart</a>
          {!editing ? <a onClick={changeEditMode} className="button edit">Edit</a> : null}
        </div>
        {editing && renderForm()}
        <a className="delete-button"><span>X</span></a>
      </div>
    </div>
  )
}

export default Product;
