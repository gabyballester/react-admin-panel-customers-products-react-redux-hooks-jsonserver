import { ADD_USER, ADD_USER_SUCCESS, ADD_USER_ERROR } from "../types";
import axiosService from "../config/axios";
import Swal from "sweetalert2";
// crear usuarios
export function addNewUserAction(user) {
  return async (dispatch) => {
    dispatch(addUser());
    try {
      //insertar en db.json
      await axiosService.post("/users", user);
      //si la inserción es correcta, actualiza el state
      dispatch(addUserSuccess(user));
      // Alerta con sweetalert
      Swal.fire("Correcto", "El usuario se registró correctamente", "success");
    } catch (error) {
      // si falla agrega el error al state
      dispatch(addUserError(true));
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "Hubo un error, intenta de nuevo",
      });
    }
  };
}

// llamada a los types tras el dispatch
const addUser = () => ({
  type: ADD_USER,
  payload: true,
});

// Si producto se guarda correctamente
const addUserSuccess = (user) => ({
  type: ADD_USER_SUCCESS,
  payload: user,
});

const addUserError = (state) => ({
  type: ADD_USER_ERROR,
  payload: state,
});
