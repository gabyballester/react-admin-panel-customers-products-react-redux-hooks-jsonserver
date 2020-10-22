import React, { Fragment } from "react";
import { useHistory } from "react-router-dom";
import Swal from "sweetalert2";
import "./customer.sass";

// Redux
import { useDispatch } from "react-redux";
import { deleteCustomerAction, editCustomerGetAction } from "../actions/customerActions";

function Customer({ customer }) {
  const { id, name } = customer;

  const dispatch = useDispatch();
  const history = useHistory();

  //Confirmar si desea eliminar
  const confirmDeleteCustomer = (id) => {
    // preguntar
    Swal.fire({
      title: "¿Estás seguro?",
      text: "Se borrará definitivamente",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: " Sí, eliminar !",
    }).then((result) => {
      if (result.isConfirmed) {
        //pasar al action
        dispatch(deleteCustomerAction(id));
      }
    });
  };

  //redirección a edit de forma programada
  const redirectToEdition = (customer) => {
    dispatch(editCustomerGetAction(customer));
    history.push(`/customer/edit/${customer.id}`);
  };

  return (
    <Fragment>

      <div className="customer-container">
        <div className="customer-info">
          <div className="customer-id">
            <p className="id">id:{id}</p>
          </div>

          <div className="customer-name">
            <p className="legend">Nombre: <span className="name">{name}</span></p>
          </div>
          
        </div>

        <div className="actions">
          <button
            type="button"
            onClick={() => redirectToEdition(customer)}
            className="button btn btn-success"
          >
            Editar
        </button>
          <button
            type="button"
            className="button btn btn-danger"
            onClick={() => confirmDeleteCustomer(id)}
          >
            Eliminar
        </button>
        </div>
      </div>
    </Fragment>
  );
}

export default Customer;
