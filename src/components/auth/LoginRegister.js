import React, { Fragment, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
// Import de styles
import "./loginregister.sass";
// Actions de redux
import { addNewUserAction } from "../../actions/userAction.js";
import { showAlertStart, hideAlertStart } from "../../actions/alertActions";
// cliente de axios
import axiosService from "../../config/axios";

const LoginRegister = ({ history }) => {
  // definición del objeto user por defecto
  function defaultFormValue() {
    return {
      email: "",
      password: "",
    };
  }
  // state del formulario
  const [formData, setFormData] = useState(defaultFormValue());

  // uso use dispatch
  const dispatch = useDispatch();

  //Acceder al state del store con useSelector
  const loading = useSelector((state) => state.users.loading);
  const error = useSelector((state) => state.users.error);
  const alert = useSelector((state) => state.alert.alert);

  const addUser = (user) => dispatch(addNewUserAction(user));

  const onChange = (e) => {
    // maneja nuestro estado
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateForm = () => {
    if (formData.email.trim() === "" || formData.password.trim() === "") {
      const alertObject = {
        msg: "Ambos campos son obligatorios",
        classes: "alert-danger text-center text-danger p-0 mt-3",
      };
      dispatch(showAlertStart(alertObject));
      return false;
    }
    return true;
  };

  const findUser = async () => {
    try {
      const res = await axiosService.get("/users", formData);
      if (res.data.length > 0) {
        let users = res.data;
        for (let i = 0; i < users.length; i++) {
          if (users[i].email === formData.email) {
            console.log("usuario existe");
            return true;
          }
        }
        console.log("usuario no existe");
        return false;
      } else {
        // si no hay errores
        dispatch(hideAlertStart());
        return false;
      }
    } catch (error) {
      return error;
    }
  };

  const submitUserForm = async (e) => {
    e.preventDefault();
    //validar formulario
    if (!validateForm()) return;
    //comprobar que el email no existe
    const userExists = await findUser();
    switch (userExists) {
      case false:
        addUser(formData);
        history.push("/customers");
        break;
      case true:
        const alertObject = {
          msg: "Usuario ya existe",
          classes: "alert-danger text-center text-danger p-0 mt-3",
        };
        dispatch(showAlertStart(alertObject));
        history.push("/customers");
        break;
      default:
        break;
    }
  };

  return (
    <Fragment>
      <div className="login-main-container-form">
        <div className="login-header-form">
          <h2>Regístro / Login ..en 1 paso</h2>
        </div>

        <div className="login-main-form">
          <form onSubmit={submitUserForm} className="login-form-style">
            <div className="form-group">
              <label>Email:</label>
              <input
                type="text"
                className="form-control"
                id="email"
                name="email"
                // required
                // value={email}
                onChange={(e) => onChange(e)}
                placeholder="Escribe el nombre completo"
                autoFocus={true}
              />
            </div>

            <div className="form-group">
              <label>Password:</label>
              <input
                type="password"
                className="form-control"
                id="password"
                name="password"
                // required
                // value={password}
                onChange={(e) => onChange(e)}
                placeholder="Escribe el nombre completo"
                autoFocus={true}
              />
            </div>

            <div className="d-flex justify-content-end">
              <button className="btn btn-primary d-block w-100" type="submit">
                Enviar formulario
              </button>
            </div>

            {alert ? <p className={alert.classes}>{alert.msg}</p> : null}
            {loading ? (
              <p className="alert alert-success p-0 text-center mt-3">
                Cargando...
              </p>
            ) : null}
            {error ? (
              <p className="alert alert-danger p-0 text-center mt-3">
                Hubo un error
              </p>
            ) : null}
          </form>
        </div>
      </div>
    </Fragment>
  );
};

export default LoginRegister;
