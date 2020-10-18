import React from 'react'
import './customers.sass';

function Customers() {

    return (
        <div className="main-container">

            <div className="header">
                <h2>Clientes</h2>
                <a href="/customer/new" className="btn btn-sm btn-primary">&#43; Nuevo </a>
            </div>

            <main>Main</main>
            
            <footer>
                <div>@copyright 2020</div>
            </footer>
        </div>


    )
}

export default Customers
