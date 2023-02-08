import React from "react";
import emailjs from "@emailjs/browser";

export const Form = () => {
  const enviarEmail = (event) => {
    event.preventDefault();
    emailjs
      .sendForm(
        "service_8vie1zn",
        "template_c8yzmtt",
        event.target,
        "Ohd1HF81dXzB7txRn"
      )
      .then((response) => console.log(response))
      .catch((error) => console.log(error));
  };

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-4">
          <form className="form-mail" onSubmit={enviarEmail}>
            <div className="mb-3 ">
              <label className="form-label">Nombre</label>
              <input type="text" className="form-control" name="user_name" />
            </div>
            <div className="mb-3 ">
              <label className="form-label">Email</label>
              <input type="email" className="form-control" name="user_email" />
            </div>
            <div className="mb-3">
              <label className="form-label">Comentarios</label>
              <textarea
                className="form-control"
                placeholder="Ingrese su consulta"
                name="user_mensaje"
              ></textarea>
            </div>
            <div className="d-flex justify-content-center">
              <button className="btn btn-success mb-3">
                Enviar
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
