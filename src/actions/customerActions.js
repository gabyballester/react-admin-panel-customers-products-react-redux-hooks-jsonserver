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
  EDIT_CUSTOMER_START,
  EDIT_CUSTOMER_SUCCESS,
  EDIT_CUSTOMER_ERROR,
} from "../types";
import axiosService from "../config/axios";
import Swal from "sweetalert2";

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
      dispatch(addCustomerSuccess(customer));
      Swal.fire("Correcto", "El cliente se agregó correctamente", "success");
    } catch (error) {
      // si falla agrega el error al state
      dispatch(addCustomerError(true));
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "Hubo un error, intenta de nuevo",
      });
    }
  };
}

// llamada a los types tras el dispatch
const addCustomer = () => ({
  type: ADD_CUSTOMER,
  payload: true,
});

// guardado en store
const addCustomerSuccess = (customer) => ({
  type: ADD_CUSTOMER_SUCCESS,
  payload: customer,
});

// fallo en el guardado
const addCustomerError = (state) => ({
  type: ADD_CUSTOMER_ERROR,
  payload: state,
});

// Descarga de customers de db
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
      dispatch(getCustomersError());
      console.log(error);
    }
  };
}

const getCustomers = () => ({
  type: GET_CUSTOMERS,
  payload: true,
});

const getCustomersSuccess = (customers) => ({
  type: GET_CUSTOMERS_SUCCESS,
  payload: customers,
});

const getCustomersError = () => ({
  type: GET_CUSTOMERS_ERROR,
  payload: true,
});

//Selecciona y elimina el cliente
export function deleteCustomerAction(id) {
  return async (dispatch) => {
    dispatch(deleteCustomer(id));
    try {
      await axiosService.delete(`/customers/${id}`);
      dispatch(deleteCustomerSuccess());
      // Si se elimina, mostrar alerta
      Swal.fire("Eliminado !!", "Registro borrado correctamente", "success");
    } catch (error) {
      dispatch(deleteCustomerError());
    }
  };
}

const deleteCustomer = (id) => ({
  type: DELETE_CUSTOMER,
  payload: id,
});

const deleteCustomerSuccess = () => ({
  type: DELETE_CUSTOMER_SUCCESS,
});

const deleteCustomerError = () => ({
  type: DELETE_CUSTOMER_ERROR,
  payload: true,
});

// Pasar cliente para edición a activo
export function editCustomerGetAction(customer) {
  return (dispatch) => {
    dispatch(editCustomerGet(customer));
  };
}

const editCustomerGet = (customer) => ({
  type: EDIT_CUSTOMER_GET,
  payload: customer,
});

// Edita el registro en la api y state
export function editCustomerStartAction(customer) {
  return async (dispatch) => {
    dispatch(editCustomerStart());
    try {
      await axiosService.put(`/customers/${customer.id}`, customer);
      dispatch(editCustomerSuccess(customer));
    } catch (error) {
      console.log(error);
      dispatch(editCustomerError());
    }
  };
}

const editCustomerStart = () => ({
  type: EDIT_CUSTOMER_START,
});

const editCustomerSuccess = (customer) => ({
  type: EDIT_CUSTOMER_SUCCESS,
  payload: customer,
});

const editCustomerError = () => ({
  type: EDIT_CUSTOMER_ERROR,
  payload: true,
});
