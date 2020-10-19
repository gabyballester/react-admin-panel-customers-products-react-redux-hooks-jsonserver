import React from 'react'
import { Link } from 'react-router-dom';
import './customers.sass';

function Customers() {

    return (
        <div className="main-container">

            <div className="header">
                <h2>Clientes</h2>
                <Link to={"/customer/new"} className="btn btn-primary">&#43; Nuevo </Link>
            </div>
            <div className="main">

                <table className="table table-striped ml-5 mr-5">
                    <thead className="bg-light">
                        <tr className="mx-auto">
                            <th scope="col">Nombre</th>
                            <th scope="col">Acciones</th>
                        </tr>

                    </thead>
                </table>

            </div>

        </div>


    )
}

export default Customers
