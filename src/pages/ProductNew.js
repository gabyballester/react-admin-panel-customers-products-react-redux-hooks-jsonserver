import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
// import de estilos
import "./productnew.sass";

//Actions de Redux
import { productAddAction } from "../actions/productActions";

const ProductNew = ({ history }) => {
  //state del componente
  const [name, setname] = useState("");
  const [price, setPrice] = useState("");

  // utilizar use dispatch y crea una función
  const dispatch = useDispatch();

  //Acceder al state del store con useSelector
  const loading = useSelector((state) => state.products.loading);
  const error = useSelector((state) => state.products.error);

  // aquí llamo el action de productActions
  const addProduct = (product) => dispatch(productAddAction(product));

  const submitNewProduct = (e) => {
    e.preventDefault();

    //     // validar formulario
    if (name.trim() === "" || price <= 0) {
      //       const alertObject = {
      //         msg: 'Campo obligatorio',
      //         classes: "alert-danger text-center text-uppercase text-danger"
      //       }
      //       dispatch(showAlertStart(alertObject));
      return;
    }

    //     // si no hay errores
    //     dispatch(hideAlertStart());

    //     // crear el nuevo cliente
    addProduct({
      // le paso las propiedades como objeto con llaves
      name,
      price,
    });
        // redirección al listado
        history.push('/products')
  };

  return (
    <div className="main-container-form">
      <div className="header-form">
        <h2>Nuevo producto</h2>
      </div>

      <div className="main-form">
        <form className="form-style" onSubmit={submitNewProduct}>
          <div className="form-group">
            <label>Nombre de producto</label>
            <input
              type="text"
              className="form-control"
              id="name"
              name="name"
              value={name}
              onChange={(e) => setname(e.target.value)}
              placeholder="Nombre del producto"
              //   autoFocus={true}
            />
            {/* {alert ? <p className={alert.classes}>{alert.msg}</p> : null} */}
          </div>
          <div className="form-group">
            <label>Precio del producto</label>
            <input
              type="number"
              className="form-control"
              id="price"
              name="price"
              value={price}
              onChange={(e) => setPrice(Number(e.target.value))}
              placeholder="Precio del producto"
              //   autoFocus={true}
            />
          </div>

          <div className="d-flex justify-content-end">
            <button className="btn btn-primary d-block w-100" type="submit">
              Guardar
            </button>
          </div>
          {loading ? <p className="alert alert-success p-0 text-center mt-3">Cargando...</p> : null}
          {error ? <p className="alert alert-danger p-0 text-center mt-3">Hubo un error</p> : null}
        </form>
      </div>
    </div>
  );
};

export default ProductNew;

// import React, { useState } from "react";
// import { useDispatch, useSelector } from 'react-redux';

// function CustomerNew({ history }) {

//   //state del componente
//   const [name, setname] = useState('')

//   // utilizar use dispatch y crea una función
//   const dispatch = useDispatch();

//   //Acceder al state del store con useSelector
//   const loading = useSelector(state => state.customers.loading);
//   const error = useSelector(state => state.customers.error);
//   const alert = useSelector(state => state.alert.alert);

//   // aquí llamo el action de customerActions
//   const addCustomer = (customer) => dispatch(customerAddAction(customer));

//   const submitNewCustomer = e => {
//     e.preventDefault();

//     // validar formulario
//     if (name.trim() === '') {

//       const alertObject = {
//         msg: 'Campo obligatorio',
//         classes: "alert-danger text-center text-uppercase text-danger"
//       }
//       dispatch(showAlertStart(alertObject));
//       return;
//     }

//     // si no hay errores
//     dispatch(hideAlertStart());

//     // crear el nuevo cliente
//     addCustomer({
//       // pasamos a addCustomer como parámetro -> (customer)
//       name
//     });
//     // redirección al listado
//     history.push('/customers')

//   }

//   return (
//     <div className="main-container-form">
//       <div className="header-form">
//         <h2>Nuevo cliente</h2>
//       </div>

//       <div className="main-form">
//         <form
//           className="form-style"
//           onSubmit={submitNewCustomer}
//         >
//           <div className="form-group">
//             <label>Escribe nombre completo</label>
//             <input
//               type="text"
//               className="form-control"
//               id="name"
//               name="name"
//               value={name}
//               onChange={e => setname(e.target.value)}
//               placeholder="Escribe el nombre completo"
//               autoFocus={true}
//             />
//             {alert ? <p className={alert.classes}>{alert.msg}</p> : null}
//           </div>

//           <div className="d-flex justify-content-end">
//             <button
//               className="btn btn-primary d-block w-100"
//               type="submit"
//             >
//               Guardar
//           </button>
//           </div>
//           {loading ? <p> Cargando...</p> : null}
//           {error ? <p className="alert alert-danger p2">Hubo un error</p> : null}
//         </form>
//       </div>
//     </div>
//   );
// }

// export default CustomerNew;
