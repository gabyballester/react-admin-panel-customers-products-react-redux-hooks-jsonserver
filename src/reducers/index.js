// combina todos los reducers
import { combineReducers } from 'redux';
import customersReducer from './customersReducer';
import productsReducer from './productsReducer';
import alertReducer from './alertReducer';

export default combineReducers({
    // nombre a utilizar, y reducer que representa
    customers: customersReducer,
    alert: alertReducer,
    products: productsReducer

})