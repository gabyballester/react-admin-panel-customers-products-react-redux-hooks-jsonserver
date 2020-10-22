import React, { Fragment } from "react";
// import { useHistory } from "react-router-dom";
// import Swal from "sweetalert2";
import "./product.sass";

// Redux
// import { useDispatch } from "react-redux";
// import { deleteProductAction, editProductGetAction } from "../actions/productActions";

function Product({ product }) {
  const { name, price } = product;
  // console.log(product);

  // const dispatch = useDispatch();
  // const history = useHistory();

  // //Confirmar si desea eliminar
  // const confirmDeleteProduct = (id) => {
  //   // preguntar
  //   Swal.fire({
  //     title: "¿Estás seguro?",
  //     text: "Se borrará definitivamente",
  //     icon: "warning",
  //     showCancelButton: true,
  //     confirmButtonColor: "#3085d6",
  //     cancelButtonColor: "#d33",
  //     confirmButtonText: " Sí, eliminar !",
  //   }).then((result) => {
  //     if (result.isConfirmed) {
  //       //pasar al action
  //       dispatch(deleteProductAction(id));
  //     }
  //   });
  // };

  // //redirección a edit de forma programada
  // const redirectToEdition = (product) => {
  //   dispatch(editProductGetAction(product));
  //   history.push(`/product/edit/${product.id}`);
  // };

  return (
    <Fragment>

      <div className="product-container">
        <div className="product-info">

          <div className="product-name-div">
            <p className="product-name-legend">Nombre: <span className="product-name">{name}</span></p>
          </div>
          <div className="product-price-div">
            <p className="product-price-legend">Precio: <span className="product-price">{price}€</span></p>
          </div>
          
        </div>

        <div className="actions">
          <button
            type="button"
            // onClick={() => redirectToEdition(product)}
            className="button btn btn-success"
          >
            Editar
        </button>
          <button
            type="button"
            className="button btn btn-danger"
            // onClick={() => confirmDeleteProduct(id)}
          >
            Eliminar
        </button>
        </div>
      </div>
    </Fragment>
  );
}

export default Product;
