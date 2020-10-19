import React, { useState } from "react";
import "./customerNew.sass";

//Actions de Redux
import {
  CustomerAddAction
} from '../actions/customerActions.js';
import { useDispatch, useSelector } from 'react-redux';

function CustomerNew() {

  //state del componente
  const [name, setname] = useState('')

  // utilizar use dispatch y crea una función
  const dispatch = useDispatch();
  // aquí llamo el action de customerActions
  const addCustomer = (customer) => dispatch(CustomerAddAction(customer));

  const submitNewCustomer = e => {
    e.preventDefault();

    // validar formulario
    if (name.trim() === '') {
      return;
    }

    // si no hay errores

    // crear el nuevo cliente
    addCustomer({
      // pasamos a addCustomer como parámetro -> (customer)
      name
    });
  }

  return (
    <div className="main-container-form">
      <div className="header-form">
        <h2>Nuevo cliente</h2>
      </div>

      <div className="main-form">
        <form
          className="form-style"
          onSubmit={submitNewCustomer}
        >
          <div className="form-group">
            <label>Nombre completo</label>
            <input
              type="text"
              className="form-control"
              id="name"
              name="name"
              value={name}
              onChange={e => setname(e.target.value)}
              placeholder="Escribe el nombre completo"
            />
          </div>

          <div className="d-flex justify-content-end">
            <button
              className="btn btn-primary d-block w-100"
              type="submit"
            >
              Guardar
          </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default CustomerNew;
