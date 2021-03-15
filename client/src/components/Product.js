import React from 'react';

const Product = () => {
  return (
    <div className="product">
      <div className="product-details">
        <h3>Amazon Kindle E-reader</h3>
        <p className="price">$79.99</p>
        <p className="quantity">5 left in stock</p>
        <div className="actions product-actions">
          <a className="button add-to-cart">Add to Cart</a>
          <a className="button edit">Edit</a>
        </div>
        <a className="delete-button"><span>X</span></a>
      </div>
    </div>
  )
}

export default Product;