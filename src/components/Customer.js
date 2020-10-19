import React from 'react'
import { Link } from 'react-router-dom';
import './customer.sass';

function Customer({ customer }) {
    const { id, name } = customer;
    return (

        <tr className="customers-overflow">
            <td>{customer.id}</td>
            <td>{customer.name}</td>
            <td className="button-div">
                <Link
                    to={`/customer/edit/${id}`}
                >
                    <button
                        type="button"
                        className="btn btn-sm btn-success"
                    >
                        Editar
                </button>
                </Link>
            </td>
            <td className="button-div">
                <Link
                    to={`/customer/edit/${id}`}
                >
                    <button
                        type="button"
                        className="btn btn-sm btn-danger"
                    >
                        Eliminar
                </button>
                </Link>
            </td>
        </tr>

    )
}

export default Customer
