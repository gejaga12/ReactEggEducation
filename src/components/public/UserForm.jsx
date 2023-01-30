import React, { useState, useEffect } from "react";
import { useUserForm } from "../../hooks/Custom.hooks";

export const UserForm = () => {
  const { form, setForm, handleChange } = useUserForm();

  const [areEquals, setAreEquals] = useState(true);
  const [passwordConfirmation, setPasswordConfirmation] = useState();

  const [pass, setPass] = useState(true);

  const validPass = () => {
    //comprueba que la password no este indefinida
    const { password } = form;
    if (password !== undefined) {
      setPass(false);
    }
    return pass;
  };

  const handlePasswordConfirmation = (e) => {
    setPasswordConfirmation(e.target.value);
  };

  useEffect(() => {
    const { password } = form;
    setAreEquals(password === passwordConfirmation);
    validPass();
  }, [passwordConfirmation, pass]);

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(form);
  };

  return (
    <div className="w-25 mx-auto mt-5">
      <h4 className="mb-3">Humano Registrate!</h4>
      <form className="needs-validation" noValidate>
        <div className="row g-3">
          <div className="col-12">
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input
              type="email"
              className="form-control"
              placeholder="tu@correo.com"
              name="email"
              onChange={handleChange}
            />
            <div className="invalid-feedback">
              Please enter a valid email address for shipping updates.
            </div>
          </div>

          <div className="col-12">
            <label htmlFor="address" className="form-label">
              Clave
            </label>
            <input
              type="password"
              className="form-control"
              placeholder="Clave"
              name="password"
              onChange={handleChange}
              required
            />
            <div className="invalid-feedback">
              Please enter your shipping address.
            </div>
          </div>

          <div className="col-12">
            <label htmlFor="address" className="form-label">
              Repetir Clave
            </label>
            <input
              type="password"
              className="form-control"
              placeholder="Repetir Clave"
              onChange={handlePasswordConfirmation}
            />
            {!areEquals &&  (
              <div className="form-text text-danger">
                Las claves no son iguales
              </div>
            )}
          </div>

          <hr className="my-4" />

          <button
            disabled={!areEquals || pass}
            className="w-100 btn btn-primary btn-lg"
            type="submit"
            onClick={handleSubmit}
          >
            Registrate
          </button>
        </div>
      </form>
    </div>
  );
};
