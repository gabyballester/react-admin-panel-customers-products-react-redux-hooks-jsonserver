import {
  ADD_CUSTOMER,
  ADD_CUSTOMER_SUCCESS,
  ADD_CUSTOMER_ERROR,
  GET_CUSTOMERS,
  GET_CUSTOMERS_SUCCESS,
  GET_CUSTOMERS_ERROR,
  DELETE_CUSTOMER,
  DELETE_CUSTOMER_SUCCESS,
  DELETE_CUSTOMER_ERROR,
  EDIT_CUSTOMER_GET,
  EDIT_CUSTOMER_SUCCESS,
  EDIT_CUSTOMER_ERROR,
} from "../types";

//cada reducer tendrá su estado inicial
const initialState = {
  customers: [],
  error: null,
  loading: false,
  customerDelete: null,
  customerEdit: null,
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
    case DELETE_CUSTOMER_ERROR:
    case EDIT_CUSTOMER_ERROR:
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
        customers: action.payload,
      };
    case DELETE_CUSTOMER:
      return {
        ...state,
        customerDelete: action.payload,
      };
    case DELETE_CUSTOMER_SUCCESS:
      return {
        ...state,
        customers: state.customers.filter(
          (customer) => customer.id !== state.customerDelete
        ),
        customerDelete: null,
      };
    case EDIT_CUSTOMER_GET:
      return {
        ...state,
        customerEdit: action.payload,
      };
    case EDIT_CUSTOMER_SUCCESS:
      return {
        ...state,
        customerEdit: null,
        customers: state.customers.map(customer =>
            customer.id === action.payload.id ? customer = action.payload : customer
            )
      };

    default:
      return state;
  }
}
