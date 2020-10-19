// combina todos los reducers
import { combineReducers } from 'redux';
import customersReducer from './customersReducer';

export default combineReducers({
    // nombre a utilizar, y reducer que representa
    customers: customersReducer
})