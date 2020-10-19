import {
    ADD_CUSTOMER,
    ADD_CUSTOMER_SUCCESS,
    ADD_CUSTOMER_ERROR
} from '../types';

//Crear nuevo cliente
export function CustomerAddAction(customer) {
    return (dispatch) => {
        dispatch(addCustomer());
        try {
            dispatch(addProductSuccess(customer))
        } catch (error) {
            dispatch(addProductError(true))
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