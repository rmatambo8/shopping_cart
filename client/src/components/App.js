import React, { useEffect, useState } from "react";
import axios from "axios";
import Header from './Header';
import Products from './Products';
import AddForm from './AddForm';
import { useDispatch, useSelector } from 'react-redux';
import * as productActions from '../actions/productActions';
import * as cartActions from '../actions/cartActions';

const App = () => {
	const dispatch = useDispatch();
	const products = useSelector(({products}) => products);
	const cart = useSelector(({cart}) => cart);

	useEffect(() => {
		axios.get('/api/products')
			.then(({data}) => data)
			.then((products) => dispatch(productActions.productsReceived(products)));
	}, []);

	useEffect(() => {
		getCart();
	}, [products]);

	const setProducts = () => {}


	const getCart = () => {
		axios.get('/api/cart')
			.then(({data}) => data)
			.then((cart) => dispatch(cartActions.cartReceived(cart)));
	}

  // const onProductChange = (product, callback) => {
  //   axios.put(`/api/products/${product.id}`, product)
  //     .then(res => res.data)
  //     .then((changedProduct) => {
	// 			setProducts(
	// 				products.map((prod) => {
	// 					if (prod.id === changedProduct.id) {
	// 						return changedProduct;
	// 					} else {
	// 						return prod;
	// 					}
	// 				})
	// 			);
	// 			callback();
	// 		});
  // }

	// const handleCheckout = (e) => {
	// 	e.preventDefault();
	// 	axios.get('/api/checkout')
	// 		.then(res => {
	// 			// dispatch(checkout());
	// 		});
	// }

	return (
		<div id="app">
			<Header cart={cart}/>
			<main>
				<Products
					productList={products}
					// onProductChange={onProductChange}
				/>
				<AddForm />
			</main>
		</div>
	);
};

export default App;
