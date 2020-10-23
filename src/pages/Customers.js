import React, { Fragment, useEffect } from "react";
import { Link } from "react-router-dom";
import "./customers.sass";
//redux
import { useSelector, useDispatch } from "react-redux";
import { getCustomersAction } from "../actions/customerActions";

// componentes
import Customer from "../components/Customer";
import Navbar from "../components/Navbar";

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
    <Fragment>
      <Navbar/>
      <div className="main-container">
        <div className="header">
          <h2>Clientes</h2>
          <Link to={"/customer/new"} className="button-new btn btn-primary">
            &#43;<span>Nuevo</span>
          </Link>
        </div>

        <div className="main">
          {loading ? (
            <p className="alert alert-primary p-0 text-center mt-3">
              "Cargando"
            </p>
          ) : null}
          {error ? (
            <p className="alert alert-danger p-0 text-center mt-3">
              "Hubo un error"
            </p>
          ) : null}
          {customers.length !== 0 ? (
            customers.map((customer) => (
              <Customer key={customer.id} customer={customer} />
            ))
          ) : (
            <>
              {!loading && !error && customers.length === 0 ? (
                <p className="alert alert-danger p-0 text-center mt-3">
                  "No hay clientes"
                </p>
              ) : null}
            </>
          )}
        </div>
      </div>
    </Fragment>
  );
}

export default Customers;
