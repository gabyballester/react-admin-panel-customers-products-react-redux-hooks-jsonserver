import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { editCustomerStartAction } from "../actions/customerActions";
import { useHistory } from "react-router-dom";
import "./customeredit.sass";
import { showAlertStart, hideAlertStart } from '../actions/alertActions';

const CustomerEdit = () => {

  const history = useHistory();
  const dispatch = useDispatch();

  //nuevo state de cliente
  const [customer, saveCustomer] = useState({
    name: "",
  });

  // cliente a editar
  const customerEdit = useSelector((state) => state.customers.customerEdit);
  //Acceder al state del store con useSelector
  const loading = useSelector(state => state.customers.loading);
  const error = useSelector(state => state.customers.error);
  const alert = useSelector(state => state.alert.alert);

  // llenamos el state automáticamente
  useEffect(() => {
    saveCustomer(customerEdit);
  }, [customerEdit]);

  // //leer datos formulario
  const onChangeForm = (e) => {
    // Reseteo la posible alerta
    dispatch(hideAlertStart());
    saveCustomer({
      ...customer,
      [e.target.name]: e.target.value,
    });
  };
  // deconstruyo datos del cliente
  const { name } = customer;

  const submitEditCustomer = (e) => {
    e.preventDefault();
    // validar formulario
    if (name.trim() === '') {
      const alertObject = {
        msg: 'Campo vacío',
        classes: "alert-danger text-center text-danger p-0 mt-3"
      }
      dispatch(showAlertStart(alertObject));
      return;
    }
    // Impedir campos iguales
    if (name === customerEdit.name) {
      const alertObject = {
        msg: 'Sin cambios en el formulario',
        classes: "alert-danger text-center text-danger p-0 mt-3"
      }
      dispatch(showAlertStart(alertObject));
      return;
    }
    // si el formulario es válido
    dispatch(hideAlertStart());
    dispatch(editCustomerStartAction(customer));
    history.push('/customers')
  };

  return (
    <div className="main-container-form">
      <div className="header-form">
        <h2>Editar cliente</h2>
      </div>

      <div className="main-form">
        <form onSubmit={submitEditCustomer} className="form-style">
          <div className="form-group">
            <label>Editar nombre completo</label>
            <input
              type="text"
              className="form-control"
              name="name"
              id="name"
              placeholder="Escribe el nombre completo"
              autoFocus={true}
              value={name}
              onChange={onChangeForm}
            />
          </div>
          <div className="d-flex justify-content-end">
            <button className="btn btn-primary d-block w-100" type="submit">
              Modificar
            </button>
          </div>
          {alert ? <p className={alert.classes}>{alert.msg}</p> : null}
          {loading ? <p className="alert alert-success p-0 text-center mt-3">Cargando...</p> : null}
          {error ? <p className="alert alert-danger p-0 text-center mt-3">Hubo un error</p> : null}
        </form>
      </div>
    </div>
  );
}

export default CustomerEdit;
