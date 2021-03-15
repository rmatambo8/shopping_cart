import React from 'react';
import FormInput from './FormInput';

const AddProductForm = () => {
  return (
    <div className="add-form">
      <p><a className="button add-product-button">Add A Product</a></p>
      <h3>Add Product</h3>
      <form>
        <FormInput id="product-name" type="text" name="Product Name" />
        <FormInput id="product-price" type="text" name="Price" />
        <FormInput id="product-quantity" type="text" name="Quantity" />

        <div className="actions form-actions">
          <a className="button">Add</a>
          <a className="button">Cancel</a>
        </div>
      </form>
    </div>
  )
}

export default AddProductForm;