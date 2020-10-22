import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { editProductStartAction } from "../actions/productActions";
import { useHistory } from "react-router-dom";
import "./productedit.sass";
import { showAlertStart, hideAlertStart } from '../actions/alertActions';

const ProductEdit = () => {
  const history = useHistory();
  const dispatch = useDispatch();

  //nuevo state de producto
  const [product, saveProduct] = useState({
    name: "",
    price: "",
  });

  // producto a editar
  const productEdit = useSelector((state) => state.products.productEdit);
  //Acceder al state del store con useSelector
  const loading = useSelector(state => state.customers.loading);
  const error = useSelector(state => state.customers.error);
  const alert = useSelector(state => state.alert.alert);

  // llenamos el state automáticamente
  useEffect(() => {
    saveProduct(productEdit);
  }, [productEdit]);

  //leer datos formulario
  const onChangeForm = (e) => {
    // Reseteo la posible alerta
    dispatch(hideAlertStart());
    saveProduct({
      ...product,
      [e.target.name]: e.target.value,
    });
  };

  // deconstruyo datos del producto
  const { name, price } = product;

  const submitEditProduct = (e) => {
    e.preventDefault();

    // validar formulario
    if (name.trim() === "" || price <= 0) {
      const alertObject = {
        msg: "Ambos campos son obligatorios",
        classes: "alert-danger text-center text-danger p-0 mt-3"
      }
      dispatch(showAlertStart(alertObject));
      return;
    }
    // Impedir campos iguales
    if (name === productEdit.name && price === productEdit.price ) {
      const alertObject = {
        msg: 'Sin cambios en el formulario',
        classes: "alert-danger text-center text-danger p-0 mt-3"
      }
      dispatch(showAlertStart(alertObject));
      return;
    }
    dispatch(hideAlertStart());
    dispatch(editProductStartAction(product));
    history.push("/products");
  };

  return (
    <div className="main-container-form">
      <div className="header-form">
        <h2>Editar producto</h2>
      </div>

      <div className="main-form">
        <form onSubmit={submitEditProduct} className="form-style">
          <div className="form-group">
            <label>Nuevo nombre</label>
            <input
              type="text"
              className="form-control"
              name="name"
              id="name"
              placeholder="Escribe el nuevo nombre"
              autoFocus={true}
              value={name}
              onChange={onChangeForm}
            />
          </div>

          <div className="form-group">
            <label>Nuevo Precio</label>
            <input
              type="number"
              className="form-control"
              name="price"
              id="price"
              placeholder="Escribe el nuevo precio"
              autoFocus={true}
              value={price}
              onChange={onChangeForm}
            />
          </div>

          <div className="d-flex justify-content-end">
            <button className="btn btn-primary d-block w-100" type="submit">
              Modificar
            </button>
          </div>
          {alert ? <p className={alert.classes}>{alert.msg}</p> : null}
          {loading ? <p className="alert alert-success p-0 text-center mt-3">Cargando...</p> : null}
          {error ? <p className="alert alert-danger p-0 text-center mt-3">Hubo un error</p> : null}
        </form>
      </div>
    </div>
  );
};

export default ProductEdit;