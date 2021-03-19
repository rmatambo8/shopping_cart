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

	const addItemToCart = (item) => {
		if (item.quantity === 0) {
			alert("This item is out of stock!!")
			return;
		}

		axios.post('/api/cart', { productId: item.id, product: { ...item } })
			.then(({data}) => data)
			.then(item => {
				dispatch(productActions.decrementQuantity(item.productId));
				return item;
			}).then(cartItem => {
				console.log(cartItem);
				dispatch(cartActions.addToCart(cartItem));
		});
	};

	const getCart = () => {
		axios.get('/api/cart')
			.then(({data}) => data)
			.then((cart) => dispatch(cartActions.cartReceived(cart)));
	}

  const onProductChange = (product, callback) => {
    axios.put(`/api/products/${product.id}`, product)
      .then(res => res.data)
      .then((changedProduct) => {
				setProducts(
					products.map((prod) => {
						if (prod.id === changedProduct.id) {
							return changedProduct;
						} else {
							return prod;
						}
					})
				);
				callback();
			});
  }

	// const removeItemFromCart = (id) => {
	// 	setCart(
	// 		cart.filter(item => {
	// 			return item.id !== id;
	// 		})
	//   );
	// }

  // const removeProduct = (id) => {
	// 	axios.delete(`/api/products/${id}`)
	// 	 .then(res => {
	// 			setProducts(
	// 				products.filter(product => {
	// 					return product.id !== id;
	// 				})
	// 			);
	// 		});
  // }

	const handleCheckout = (e) => {
		e.preventDefault();
		axios.get('/api/checkout')
			.then(res => {
				// dispatch(checkout());
			});
	}


	// const addNewProduct = (item, callback) => {
	// 	axios.post("/api/products", item)
	// 		.then(({data}) => {
	// 			return data
	// 		}).then((product) => {
	// 			dispatch(productActions.addProduct(product));
	// 			callback();
	// 		});
	// }

	// const props = { handleSubmit: addNewProduct }

	return (
		<div id="app">
			<Header onCheckout={handleCheckout} cart={cart}/>
			<main>
				<Products
					productList={products}
					addItem={addItemToCart}
					onProductChange={onProductChange}
				/>
				<AddForm />
			</main>
		</div>
	);
};

export default App;
