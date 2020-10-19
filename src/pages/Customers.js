import React from 'react'
import {Link} from 'react-router-dom';
import './customers.sass';

function Customers() {

    return (
        <div className="main-container">

            <div className="header">
                <h2>Clientes</h2>
                <Link to={"/customer/new"} className="btn btn-sm btn-primary">&#43; Nuevo </Link>
            </div>

            <main>Main</main>

        </div>


    )
}

export default Customers
