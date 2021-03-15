import React from 'react';
import Product from './Product';

const Products = () => {
 return (
    <div className="product-listing">
      <h2>Products</h2>
      {[1,2,3].map((_,idx) => {
        return <Product key={idx} />
      })}
    </div>

 )
}

export default Products;