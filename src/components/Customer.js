import React from "react";
import { useHistory } from "react-router-dom";
import Swal from "sweetalert2";
import "./customer.sass";

// Redux
import { useDispatch } from "react-redux";
import { deleteCustomerAction, editCustomerGetAction } from "../actions/customerActions";

function Customer({ customer }) {
  const { id, name } = customer;
  console.log(customer);

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
    <tr className="customers-overflow">
      <td>{id}</td>
      <td>{name}</td>
      <td className="button-div">
        <button
          type="button"
          onClick={() => redirectToEdition(customer)}
          className="btn btn-sm btn-success"
        >
          Editar
        </button>
      </td>
      <td className="button-div justify-content-end">
        <button
          type="button"
          className="btn btn-sm btn-danger"
          onClick={() => confirmDeleteCustomer(id)}
        >
          Eliminar
        </button>
      </td>
    </tr>
  );
}

export default Customer;
