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
  EDIT_PRODUCT_START,
  EDIT_PRODUCT_SUCCESS,
  EDIT_PRODUCT_ERROR
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
  payload: products,
});

const getProductsError = () => ({
  type: GET_PRODUCTS_ERROR,
  payload: true,
});

//Selecciona y elimina el cliente
export function deleteProductAction(id) {
  return async (dispatch) => {
    dispatch(deleteProduct(id));
    try {
      await axiosService.delete(`/products/${id}`);
      dispatch(deleteProductSuccess());
      // Si se elimina, mostrar alerta
      Swal.fire("Eliminado !!", "Registro borrado correctamente", "success");
    } catch (error) {
      dispatch(deleteProductError());
    }
  };
}

const deleteProduct = (id) => ({
  type: DELETE_PRODUCT,
  payload: id,
});

const deleteProductSuccess = () => ({
  type: DELETE_PRODUCT_SUCCESS,
});

const deleteProductError = () => ({
  type: DELETE_PRODUCT_ERROR,
  payload: true,
});

// Pasar cliente para edición a activo
export function editProductGetAction(product) {
  return (dispatch) => {
    dispatch(editProductGet(product));
  };
}

const editProductGet = (product) => ({
  type: EDIT_PRODUCT_GET,
  payload: product,
});

// Edita el registro en la api y state
export function editProductStartAction(product) {
    return async (dispatch) => {
      dispatch(editProductStart());
      try {
        await axiosService.put(`/products/${product.id}`, product);
        dispatch(editProductSuccess(product));
      } catch (error) {
        console.log(error);
        dispatch(editProductError());
      }
    };
  }
  
  const editProductStart = () => ({
    type: EDIT_PRODUCT_START
  });
  
  const editProductSuccess = (product) => ({
    type: EDIT_PRODUCT_SUCCESS,
    payload: product
  });
  
  const editProductError = () => ({
    type: EDIT_PRODUCT_ERROR,
    payload: true
  });
  