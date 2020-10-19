import React, {useEffect} from 'react'
import { Link } from 'react-router-dom';
import './customers.sass';
//redux
import { useSelector, useDispatch} from 'react-redux';
import {getCustomersAction} from '../actions/customerActions';

// componentes
import Customer from '../components/Customer';

function Customers() {

    const dispatch = useDispatch();

    useEffect(() => {
        // consultar la API
        const getCustomers = () => dispatch(getCustomersAction());
        getCustomers();
    },[]);

const customers = useSelector(state => state.customers.customers);
console.log('muestra customers');
console.log(customers);

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
                            <th>ID</th>
                            <th>Nombre</th>
                            <th>Acciones</th>
                        </tr>
                    </thead> 
                    <tbody className="table-body">
                        {customers && customers.length !== 0 ?
                        
                    (customers.map(customer => (
                         <Customer
                             key={customer.id}
                             customer={customer}
                         />)))
                        :
                        
                         (<tr>
                            <td colSpan="2">"No hay clientes"</td>
                        </tr>)
                        
                        }
                    </tbody>
                </table>

            </div>

        </div>


    )
}

export default Customers
