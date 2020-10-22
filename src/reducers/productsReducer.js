import {
    ADD_PRODUCT,
    ADD_PRODUCT_SUCCESS,
    ADD_PRODUCT_ERROR,
    GET_PRODUCTS,
    GET_PRODUCTS_SUCCESS,
    GET_PRODUCTS_ERROR,
    // DELETE_CUSTOMER,
    // DELETE_CUSTOMER_SUCCESS,
    // DELETE_CUSTOMER_ERROR,
    // EDIT_CUSTOMER_GET,
    // EDIT_CUSTOMER_SUCCESS,
    // EDIT_CUSTOMER_ERROR,
} from "../types";
//cada reducer tendrá su estado inicial

const initialState = {
    products: [],
    error: null,
    loading: false,
    productDelete: null,
    productEdit: null,
};

// le paso state inicial
export default function (state = initialState, action) {
    switch (action.type) {
      case ADD_PRODUCT:
      case GET_PRODUCTS: //mismo comportamiento
        return {
          ...state,
          loading: action.payload,
        };
      case ADD_PRODUCT_SUCCESS:
        return {
          ...state,
          loading: false,
          products: [...state.products, action.payload],
        };
      case ADD_PRODUCT_ERROR:
    //   case GET_CUSTOMERS_ERROR:
    //   case DELETE_CUSTOMER_ERROR:
    //   case EDIT_CUSTOMER_ERROR:
        return {
          ...state,
          loading: false,
          error: action.payload,
        };
    //   case GET_CUSTOMERS_SUCCESS:
    //     return {
    //       ...state,
    //       loading: false,
    //       error: null,
    //       customers: action.payload,
    //     };
    //   case DELETE_CUSTOMER:
    //     return {
    //       ...state,
    //       customerDelete: action.payload,
    //     };
    //   case DELETE_CUSTOMER_SUCCESS:
    //     return {
    //       ...state,
    //       customers: state.customers.filter(
    //         (customer) => customer.id !== state.customerDelete
    //       ),
    //       customerDelete: null,
    //     };
    //   case EDIT_CUSTOMER_GET:
    //     return {
    //       ...state,
    //       customerEdit: action.payload,
    //     };
    //   case EDIT_CUSTOMER_SUCCESS:
    //     return {
    //       ...state,
    //       customerEdit: null,
    //       customers: state.customers.map(customer =>
    //           customer.id === action.payload.id ? customer = action.payload : customer
    //           )
    //     };
  
      default:
        return state;
    }
  }
  