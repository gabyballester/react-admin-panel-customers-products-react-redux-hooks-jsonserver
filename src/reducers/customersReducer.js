import {
  ADD_CUSTOMER,
  ADD_CUSTOMER_SUCCESS,
  ADD_CUSTOMER_ERROR,
  GET_CUSTOMERS,
  GET_CUSTOMERS_SUCCESS,
  GET_CUSTOMERS_ERROR,
} from "../types";

//cada reducer tendrá su estado inicial
const initialState = {
  customers: [],
  error: null,
  loading: false,
};

// le paso state inicial
export default function (state = initialState, action) {
  switch (action.type) {
    case ADD_CUSTOMER:
    case GET_CUSTOMERS: //mismo comportamiento
      return {
        ...state,
        loading: action.payload,
      };
    case ADD_CUSTOMER_SUCCESS:
      return {
        ...state,
        loading: false,
        customers: [...state.customers, action.payload],
      };
    case ADD_CUSTOMER_ERROR:
    case GET_CUSTOMERS_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case GET_CUSTOMERS_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        customers: action.payload
      };

    default:
      return state;
  }
}
