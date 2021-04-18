import {
  ADD_PRODUCT,
  ADD_PRODUCT_SUCCESS,
  ADD_PRODUCT_ERROR,
  GET_PRODUCTS,
  GET_PRODUCTS_SUCCESS,
  GET_PRODUCTS_ERROR,
  DELETE_PRODUCT,
  DELETE_PRODUCT_SUCCESS,
  DELETE_PRODUCT_ERROR,
  EDIT_PRODUCT_GET,
  EDIT_PRODUCT_SUCCESS,
  EDIT_PRODUCT_ERROR,
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
// eslint-disable-next-line
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
    case GET_PRODUCTS_ERROR:
    case DELETE_PRODUCT_ERROR:
    case EDIT_PRODUCT_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case GET_PRODUCTS_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        products: action.payload,
      };
    case DELETE_PRODUCT:
      return {
        ...state,
        productDelete: action.payload,
      };
    case DELETE_PRODUCT_SUCCESS:
      return {
        ...state,
        products: state.products.filter(
          (product) => product.id !== state.productDelete
        ),
        productDelete: null,
      };
    case EDIT_PRODUCT_GET:
      return {
        ...state,
        productEdit: action.payload,
      };
    case EDIT_PRODUCT_SUCCESS:
      return {
        ...state,
        productEdit: null,
        products: state.products.map((product) =>
          product.id === action.payload.id
            ? (product = action.payload)
            : product
        ),
      };

    default:
      return state;
  }
}
