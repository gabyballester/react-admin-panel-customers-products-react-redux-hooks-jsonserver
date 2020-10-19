import {
    ADD_CUSTOMER,
    ADD_CUSTOMER_SUCCESS,
    ADD_CUSTOMER_ERROR
} from '../types';
import axiosService from '../config/axios';

//Crear nuevo cliente
export function customerAddAction(customer){
    return async (dispatch) => {
        dispatch(addCustomer());
        try {
            //insertar en db
            await axiosService.post('/customers', customer);
            //si la inserción es correcta, actualiza el state
            dispatch(addProductSuccess(customer));
            console.log(customer);
        } catch (error) {
            console.error(error);
            // si falla agrega el error al state
            dispatch(addProductError(true));
        }
    }
}

// llamada a los types tras el dispatch
const addCustomer = () => ({
    type: ADD_CUSTOMER,
    payload: true
})

// guardado en store
const addProductSuccess = (customer) => ({
    type: ADD_CUSTOMER_SUCCESS,
    payload: customer
})

// fallo en el guardado
const addProductError = (state) => ({
    type: ADD_CUSTOMER_ERROR,
    payload: state
})