import React, { useEffect, useState } from "react";
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
		item.quantity--;
		item = {...item};
		let index = cart.findIndex(({id}) => id === item.id);
		let newCart = cart.slice();

		if (index > -1) {
			newCart[index].quantity++;
		} else {
			item.quantity = 1;
			newCart.push(item);
		}

		setCart(newCart);
	}

	useEffect(() => {
		setProducts(data);
	}, [])

	const removeItemFromCart = (id) => {
		setCart(
			cart.filter(item => {
				return item.id !== id;
			})
	  );
	}
	// TODO: when item is deleted remove item from cart too
  const removeProduct = (id) => {
		setProducts(
			products.filter(product => {
				return product.id !== id;
			})
    );
  }

	const product = {title: "", price: "", quantity: ""}

	const title = useField(product.title);
  const price = useField(product.price);
	const quantity = useField(product.quantity);
	const addNewProduct = (_event) => {
		const item = { title: title.value, price: price.value, quantity: quantity.value }
		setProducts(products.concat(item));
	}

	const props = { title, price, quantity, handleSubmit: addNewProduct }
	return (
		<div id="app">
			<Header cart={cart}/>
			<main>
				<Products
					productList={products}
					addItem={addItemToCart}
					removeItem={removeItemFromCart}
          removeProduct={removeProduct}
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

