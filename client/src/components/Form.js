import React from 'react';
const Form = ({ editing, toggleForm, title, price, quantity, handleSubmit}) => {
  const handleProductChange = event => {
    if (toggleForm) toggleForm(event);
    const object = { title: title.value, price: price.value, quantity: quantity.value };
    handleSubmit(object);
  }

  return (
    <form>
      <div class="input-group">
          <label for="product-name">Product Name</label>
        {editing ? <input type="text" id="product-name" {...title} /> : <input type="text" id="product-name" name="product-name" />}
      </div>
      <div class="input-group">
        <label for="product-price">Price</label>
        {editing ? <input type="text" id="product-price" {...price} /> : <input type="text" id="product-price" name="product-price" />}
      </div>

      <div class="input-group">
        <label for="product-quantity">Quantity</label>
        {editing ? <input type="text" id="product-quantity" {...quantity} /> : <input type="text" id="product-quantity" name="product-quantity" /> }
      </div>
          <div class="actions form-actions">
        <a href="#" onClick={handleProductChange} class="button">{editing ? "update" : "add"}</a>
            <a href="#" onClick={toggleForm} class="button">Cancel</a>
          </div>
    </form>
  )
}

export default Form;
