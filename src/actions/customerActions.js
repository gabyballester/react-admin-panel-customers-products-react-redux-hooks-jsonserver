import {
  ADD_CUSTOMER,
  ADD_CUSTOMER_SUCCESS,
  ADD_CUSTOMER_ERROR,
  GET_CUSTOMERS,
  GET_CUSTOMERS_SUCCESS,
  GET_CUSTOMERS_ERROR,
} from "../types";
import axiosService from "../config/axios";

//Crear nuevo cliente
/* Al ser función principal del proceso es la que se llama en el componente
    y será pues la que declaramos como export function
*/
export function customerAddAction(customer) {
  return async (dispatch) => {
    dispatch(addCustomer());
    try {
      //insertar en db
      await axiosService.post("/customers", customer);
      //si la inserción es correcta, actualiza el state
      dispatch(addProductSuccess(customer));
      console.log(customer);
    } catch (error) {
      // si falla agrega el error al state
      dispatch(addProductError(true));
    }
  };
}

// llamada a los types tras el dispatch
const addCustomer = () => ({
  type: ADD_CUSTOMER,
  payload: true,
});

// guardado en store
const addProductSuccess = (customer) => ({
  type: ADD_CUSTOMER_SUCCESS,
  payload: customer,
});

// fallo en el guardado
const addProductError = (state) => ({
  type: ADD_CUSTOMER_ERROR,
  payload: state,
});

// Descarga de clientes de db
/* Al ser función principal del proceso es la que se llama en el componente
    y será pues la que declaramos como export function
*/

export function getCustomersAction() {
  return async (dispatch) => {
    dispatch(getCustomers());
    try {
      const response = await axiosService.get("/customers");
      dispatch(getCustomersSuccess(response.data));
    } catch (error) {
      // si falla agrega el error al state
      dispatch(getProductsError());
      console.log(error);
    }
  };
}

const getCustomers = () => ({
  type: GET_CUSTOMERS,
  payload: true
});

const getCustomersSuccess = (customers) => ({
  type: GET_CUSTOMERS_SUCCESS,
  payload: customers,
});

const getProductsError = () => ({
  type: GET_CUSTOMERS_ERROR,
  payload: true,
});
