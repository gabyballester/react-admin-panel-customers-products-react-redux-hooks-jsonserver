import React, { Fragment, useEffect } from "react";
import { Link } from "react-router-dom";
import "./products.sass";
//redux
import { useSelector, useDispatch } from "react-redux";
import { getProductsAction } from "../actions/productActions";

// componentes
import Product from "../components/Product";

function Products() {
  const dispatch = useDispatch();

  const products = useSelector((state) => state.products.products);
  const error = useSelector((state) => state.products.error);
  const loading = useSelector((state) => state.products.loading);

  useEffect(() => {
    // consultar la API
    const getProducts = () => dispatch(getProductsAction());
    getProducts();
    // eslint-disable-next-line
  }, []);

  return (
    <Fragment>
      <div className="main-container">
        <div className="header">
          <h2>Productos</h2>
          <Link to={"/product/new"} className="button-new btn btn-primary">
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
          {products.length !== 0 ? (
            products.map((product) => (
              <Product key={product.id} product={product} />
            ))
          ) : (
            <>
              {!loading && !error && products.length === 0 ? (
                <p className="alert alert-danger p-0 text-center mt-3">
                  "No hay productos"
                </p>
              ) : null}
            </>
          )}
        </div>
      </div>
    </Fragment>
  );
}

export default Products;