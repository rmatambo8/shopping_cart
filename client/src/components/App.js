import React, { useEffect, useState } from "react";
import axios from "axios";
import Header from './Header';
import Products from './Products';
import useField from './useField';
import data from "../lib/data";
import AddForm from './AddForm';
// import Form from './Form'

const App = () => {
	const [ cart, setCart ] = useState([]);
	const [products, setProducts] = useState([]);

	const addItemToCart = (item) => {
		if (item.quantity === 0) {
			alert("This item is out of stock!!")
			return;
		}
		axios.post('/api/cart', {productId: item.id, product: {...item}})
		.then(res => {
			axios.get('/api/cart')
			.then(({data}) => data)
			.then(product => {
				item = {...item};
				item.quantity--;

				setProducts(products.map(product => {
					 if (product.id === item.id) {
						 return item
					 } else {
						 return product
					 }
				}));

				let index = cart.findIndex(({id}) => id === item.id);
				let newCart = cart.slice();

				if (index > -1) {
					newCart[index].quantity++;
				} else {
					item.quantity = 1;
					newCart.push(item);
				}
				setCart(newCart);
			});
		});
	};
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

	const getCart = () => {
		axios.get('/api/cart')
			.then(({data}) => data)
			.then((retrievedCart) => setCart(retrievedCart));
	}

	const getProduct = () => {

	}

  const onProductChange = (product) => {
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
			});
  }

	useEffect(() => {
		axios.get('/api/products')
			.then(({data}) => data)
			.then((products) => setProducts(products));
	}, [])

	useEffect(() => {
		getCart();
	}, [products])

	useEffect(() => {

	}, [products])

	const removeItemFromCart = (id) => {
		setCart(
			cart.filter(item => {
				return item.id !== id;
			})
	  );
	}

  const removeProduct = (id) => {
		axios.delete(`/api/products/${id}`)
		 .then(res => {
				setProducts(
					products.filter(product => {
						return product.id !== id;
					})
				);
			});
  }

	const handleCheckout = (e) => {
		e.preventDefault();
		axios.get('/api/checkout')
			.then(res => {
				setCart([]);
			});
	}

	const product = {title: "", price: "", quantity: ""}
	const title = useField(product.title);
  const price = useField(product.price);
	const quantity = useField(product.quantity);

	const addNewProduct = (_event) => {
		const item = { title: title.value, price: price.value, quantity: quantity.value }
		axios.post("/api/products", item)
			.then(({data}) => {
				return data
			}).then((product) => {
				setProducts(products.concat(product));
			});
	}

	const props = { title, price, quantity, handleSubmit: addNewProduct }
	return (
		<div id="app">
			<Header onCheckout={handleCheckout} cart={cart}/>
			<main>
				<Products
					productList={products}
					addItem={addItemToCart}
					removeItem={removeItemFromCart}
          removeProduct={removeProduct}
					onProductChange={onProductChange}
				/>
				<AddForm formProperties={props}/>
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

