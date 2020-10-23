import React, { Fragment, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./customernew.sass";
// Componentes
import Navbar from "../components/Navbar";

//Actions de Redux
import { customerAddAction } from "../actions/customerActions.js";
import { showAlertStart, hideAlertStart } from "../actions/alertActions";

function CustomerNew({ history }) {
  //state del componente
  const [name, setname] = useState("");

  // utilizar use dispatch y crea una función
  const dispatch = useDispatch();

  //Acceder al state del store con useSelector
  const loading = useSelector((state) => state.customers.loading);
  const error = useSelector((state) => state.customers.error);
  const alert = useSelector((state) => state.alert.alert);

  // aquí llamo el action de customerActions
  const addCustomer = (customer) => dispatch(customerAddAction(customer));

  const submitNewCustomer = (e) => {
    e.preventDefault();

    // validar formulario
    if (name.trim() === "") {
      const alertObject = {
        msg: "Campo vacío",
        classes: "alert-danger text-center text-danger p-0 mt-3",
      };
      dispatch(showAlertStart(alertObject));
      return;
    }

    // si no hay errores
    dispatch(hideAlertStart());

    // crear el nuevo cliente
    addCustomer({
      // pasamos a addCustomer como parámetro -> (customer)
      name,
    });
    // redirección al listado
    history.push("/customers");
  };

  return (
    <Fragment>
      <Navbar />
      <div className="main-container-form">
        <div className="header-form">
          <h2>Nuevo cliente</h2>
        </div>

        <div className="main-form">
          <form onSubmit={submitNewCustomer} className="form-style">
            <div className="form-group">
              <label>Escribe nombre completo</label>
              <input
                type="text"
                className="form-control"
                id="name"
                name="name"
                value={name}
                onChange={(e) => setname(e.target.value)}
                placeholder="Escribe el nombre completo"
                autoFocus={true}
              />
            </div>

            <div className="d-flex justify-content-end">
              <button className="btn btn-primary d-block w-100" type="submit">
                Guardar
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
}

export default CustomerNew;
