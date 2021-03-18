import React, { useEffect, useState } from "react";
import axios from "axios";
import Header from './Header';
import Products from './Products';
import { addProduct, deleteProduct, getProducts, updateProduct } from '../actions/products';
import AddForm from './AddForm';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, checkout, getCart } from "../actions/cart";
// import Form from './Form'

const App = () => {
	const dispatch = useDispatch();
	// let cart = useSelector(state => state.cart)
	// let products = useSelector(state => state.products)

	// const addItemToCart = async (item) => {
	// 	if (item.quantity === 0) {
	// 		alert("This item is out of stock!!")
	// 		return;
	// 	}
	// 	dispatch(addToCart({ productId: item.id, product: { ...item } }));
	// };
	// const addItemHelper = (item) => {
	// 	if (item.quantity === 0) {
	// 		alert("This item is out of stock!!")
	// 		return;
	// 	}
	// 	item.quantity--;
	// 	item = {...item};
	// 	let index = cart.findIndex(({id}) => id === item.id);
	// 	let newCart = cart.slice();

	// 	if (index > -1) {
	// 		newCart[index].quantity++;
	// 	} else {
	// 		item.quantity = 1;
	// 		newCart.push(item);
	// 	}

	// 	setCart(newCart);
	// }

	// const getCart = () => {
	// 	axios.get('/api/cart')
	// 		.then(({data}) => data)
	// 		.then((retrievedCart) => setCart(retrievedCart));
	// }


	// const onProductChange = async (product, callback) => {
	// 	const result = await dispatch(updateProduct(product))
	// 	callback(result)
  //   // axios.put(`/api/products/${product.id}`, product)
  //   //   .then(res => res.data)
  //   //   .then((changedProduct) => {
	// 	// 		setProducts(
	// 	// 			products.map((prod) => {
	// 	// 				if (prod.id === changedProduct.id) {
	// 	// 					return changedProduct;
	// 	// 				} else {
	// 	// 					return prod;
	// 	// 				}
	// 	// 			})
	// 	// 		);
	// 	// 		callback();
	// 	// 	});
  // }

	// useEffect(() => {
	// 	// dispatch(getProducts())
	// 	// dispatch(getCart())
	// 	// axios.get('/api/products')
	// 	// 	.then(({data}) => data)
	// 	// 	.then((products) => setProducts(products));
	// }, [dispatch])

	// useEffect(() => {
	// 	getCart();
	// }, [products])

	// useEffect(() => {

	// }, [products])

	const removeItemFromCart = (id) => {
		// setCart(
		// 	cart.filter(item => {
		// 		return item.id !== id;
		// 	})
	  // );
	}

	// const removeProduct = async (id) => {
	// 	dispatch(deleteProduct(id))
	// 	// axios.delete(`/api/products/${id}`)
	// 	//  .then(res => {
	// 	// 		setProducts(
	// 	// 			products.filter(product => {
	// 	// 				return product.id !== id;
	// 	// 			})
	// 	// 		);
	// 	// 	});
  // }

	const handleCheckout = async (e) => {
		e.preventDefault();
		dispatch(checkout())
		// axios.get('/api/checkout')
		// 	.then(res => {
		// 		setCart([]);
		// 	});
	}


	// const addNewProduct = async (item, callback) => {
	// 	const result = await dispatch(addProduct(item));
	// 	callback(result);
	// 	// axios.post("/api/products", item)
	// 	// 	.then(({data}) => {
	// 	// 		return data
	// 	// 	}).then((product) => {
	// 	// 		setProducts(products.concat(product));
	// 	// 		callback();
	// 	// 	});
	// }

	// const props = { handleSubmit: addNewProduct }
	return (
		<div id="app">
			<Header/>
			<main>
				<Products/>
				<AddForm/>
			</main> 
		</div>
	);
};

export default App;

/*
CART:
Header section: page title, cart, total, checkout (button)
Products section:
	- individual products(product name, price, quantity in stock, add to cart button, edit button, "X" button),
	- add product button

*/

