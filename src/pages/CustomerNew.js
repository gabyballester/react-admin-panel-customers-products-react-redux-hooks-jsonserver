import React from "react";
import "./customerNew.sass";

function CustomerNew() {
  return (
    <div className="main-container-form">
      <div className="header-form">
        <h2>Nuevo cliente</h2>
      </div>

      <div className="main-form">
        <form className="form-style">
          <div class="form-group">
            <label for="name">Nombre completo</label>
            <input
              type="text"
              class="form-control"
              id="name"
              placeholder="Escribe el nombre completo"
            />
          </div>

          <div class="d-flex justify-content-end">
            <button
              class="btn btn-primary d-block w-100"
              type="submit"
            >
              Guardar
          </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default CustomerNew;
