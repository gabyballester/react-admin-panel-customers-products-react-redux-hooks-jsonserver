import React from 'react'
import './customer.sass';

function Customer({ customer }) {
    return (
        
        <tr className="customers-overflow">
            <td>{customer.id}</td>
            <td>{customer.name}</td>
            <td></td>
        </tr>
        
    )
}

export default Customer
