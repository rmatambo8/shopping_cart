import React from 'react';
import Product from './Product';

const Products = ({ productList, addItem, onProductChange }) => {
  return (
    <div className="product-listing">
      <h2>Products</h2>
      {productList.map(product => {
        return <Product key={product.id}
          product={product}
          addItem={addItem}
          onProductChange={onProductChange}
        />
      })}
    </div>
  )
}

export default Products;
