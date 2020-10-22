import {
    SHOW_ALERT,
    HIDE_ALERT
} from '../types';

// Muestra alerta
export function showAlertStart(alert) {
    return (dispatch) => {
        dispatch(createAlertMessage(alert));
        setTimeout(()=> {
        dispatch(hideAlertMessage());
        } , 3000);
    }
}

const createAlertMessage = alert => ({
    type: SHOW_ALERT,
    payload: alert
})

// ocultar alerta
export function hideAlertStart() {
    return (dispatch) => {
        dispatch(hideAlertMessage());
    }
}

const hideAlertMessage = () => ({
    type: HIDE_ALERT
})