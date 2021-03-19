import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import cartReducer from '../reducers/cart';
import productReducer from '../reducers/products';

const rootReducer = combineReducers({ products: productReducer, cart: cartReducer });

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
