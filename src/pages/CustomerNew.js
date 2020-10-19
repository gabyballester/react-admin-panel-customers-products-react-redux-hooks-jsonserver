import React, { useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import "./customerNew.sass";

//Actions de Redux
import {
  customerAddAction
} from '../actions/customerActions.js';

function CustomerNew({history}) {

  //state del componente
  const [name, setname] = useState('')

  // utilizar use dispatch y crea una función
  const dispatch = useDispatch();

  //Acceder al state del store con useSelector
  const loading = useSelector(state => state.customers.loading);
  const error = useSelector(state => state.customers.error);

  // aquí llamo el action de customerActions
  const addCustomer = (customer) => dispatch(customerAddAction(customer));

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
    // redirección al listado
    history.push('/customers')

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
          {loading ? <p> Cargando...</p> : null}
        {error ? <p className="alert alert-danger p2">Hubo un error</p> : null}
        </form>
      </div>
    </div>
  );
}

export default CustomerNew;
