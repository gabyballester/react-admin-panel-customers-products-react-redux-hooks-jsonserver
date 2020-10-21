import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "./customers.sass";
//redux
import { useSelector, useDispatch } from "react-redux";
import { getCustomersAction } from "../actions/customerActions";

// componentes
import Customer from "../components/Customer";

function Customers() {
  const dispatch = useDispatch();

  const customers = useSelector((state) => state.customers.customers);
  const error = useSelector((state) => state.customers.error);
  const loading = useSelector((state) => state.customers.loading);

  useEffect(() => {
    // consultar la API
    const getCustomers = () => dispatch(getCustomersAction());
    getCustomers();
    // eslint-disable-next-line
  }, []);

  return (
    <div className="main-container">

      <div className="header">
        <h2>Clientes</h2>
        <Link to={"/customer/new"} className="button-new btn btn-primary">
         &#43;<span>Nuevo</span>
        </Link>
      </div>

      <div className="main">
          {customers.length !== 0 ? (
            customers.map((customer) => (
              <Customer key={customer.id} customer={customer} />
            ))
          ) : (
              <tr>
                {error ? (
                  // <p className="font-weight-bold alert alert-danger text-center">
                  <td colSpan="3">
                    <p className="font-weight-bold text-danger">
                      "Hubo un error"{" "}
                    </p>
                  </td>
                ) : (
                    <>
                      {loading ? (
                        <td colSpan="3">
                          <p className="font-weight-bold text-danger">
                            "Cargando"
                        </p>
                        </td>
                      ) : (
                          <td colSpan="3">
                            <p className="font-weight-bold text-danger">
                              "No hay clientes"
                        </p>
                          </td>
                        )}
                    </>
                  )}
              </tr>
            )}
        </div>
    </div>
  );
}

export default Customers;
