import {
    ADD_CUSTOMER,
    ADD_CUSTOMER_SUCCESS,
    ADD_CUSTOMER_ERROR
} from '../types';

//cada reducer tendrá su estado inicial
const initialState = {
    customers: [],
    error: null,
    loading: false
}

// le paso state inicial
export default function (state = initialState, action) {
    switch (action.type) {
        case ADD_CUSTOMER:
            return {
                ...state,
                loading: action.payload
            }
        case ADD_CUSTOMER_SUCCESS:
            return {
                ...state,
                loading: false,
                customers: [...state.customers, action.payload]
            }
        case ADD_CUSTOMER_ERROR:
            return {
                ...state,
                loading: false,
                error: action.payload
            }

        default:
            return state;
    }
}