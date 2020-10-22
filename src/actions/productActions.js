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
import axiosService from "../config/axios";
import Swal from "sweetalert2";

export function productAddAction(product) {
  return async (dispatch) => {
    dispatch(addProduct());
    try {
      //insertar en db.json
      await axiosService.post("/products", product);
      //si la inserción es correcta, actualiza el state
      dispatch(addProductSuccess(product));
      // Alerta con sweetalert
      Swal.fire("Correcto", "El producto se agregó correctamente", "success");
    } catch (error) {
      // si falla agrega el error al state
      dispatch(addProductError(true));
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "Hubo un error, intenta de nuevo",
      });
    }
  };
}

// llamada a los types tras el dispatch
const addProduct = () => ({
  type: ADD_PRODUCT,
  payload: true,
});

// Si producto se guarda correctamente
const addProductSuccess = (product) => ({
  type: ADD_PRODUCT_SUCCESS,
  payload: product,
});

// Si hay un error al guardar
const addProductError = (state) => ({
  type: ADD_PRODUCT_ERROR,
  payload: state,
});

// Descarga de products de db
/* Al ser función principal del proceso es la que se llama en el componente
    y será pues la que declaramos como export function
*/

export function getProductsAction() {
    return async (dispatch) => {
      dispatch(getProducts());
      try {
        const response = await axiosService.get("/products");
        dispatch(getProductsSuccess(response.data));
      } catch (error) {
        // si falla agrega el error al state
        dispatch(getProductsError());
        console.log(error);
      }
    };
  }
  
  const getProducts = () => ({
    type: GET_PRODUCTS,
    payload: true,
  });
  
  const getProductsSuccess = (products) => ({
    type: GET_PRODUCTS_SUCCESS,
    payload: products
  });
  
  const getProductsError = () => ({
    type: GET_PRODUCTS_ERROR,
    payload: true,
  });