import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addProduct, deleteProduct, getProducts, updateProduct } from '../actions/products';
import Product from './Product';

const Products = () => {
  const dispatch = useDispatch();
  let products = useSelector(state => state.products)
  useEffect(() => {
    dispatch(getProducts())
  }, [dispatch])


  return (
    <div className="product-listing">
      <h2>Products</h2>
      {products.map(product => {
        return <Product key={product.id}
          product={product}
        />
      })}
    </div>
  )
}

// export default [
//   {
//     id: 1,
//     title: "Amazon Kindle E-reader",
//     quantity: 5,
//     price: 79.99
//   },
//   {
//     id: 2,
//     title: "Apple 10.5-Inch iPad Pro",
//     quantity: 0,
//     price: 649.99
//   },
//   {
//     id: 3,
//     title: "Yamaha Portable Keyboard",
//     quantity: 2,
//     price: 155.99
//   },
//   {
//     id: 4,
//     title: "Tinker, Tailor, Soldier, Spy - A John le Carre Novel",
//     quantity: 12,
//     price: 13.74
//   }
// ];


export default Products;
