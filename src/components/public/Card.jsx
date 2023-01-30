import React from "react";
import { Link } from 'react-router-dom';

export const Card = ({ mascota }) => {
  return (
    <div className="col">
      <div className="card shadow-sm">
        <img width="100%" src={mascota.image} alt="imagen"></img>

        <h5 className="mb-0 mt-2 ms-3 text-dark text-aling-center">{ mascota.name }</h5>

        <div className="card-body">
          <p className="card-text">
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This content is a little bit longer.
          </p>
          <div className="d-flex justify-content-between align-items-center">
              <button
              type="button"
              className="btn btn-sm btn-secondary"
              >
              <Link to={`/details/${mascota.id}`} className="nav-link px-2 text-white">
                Detalles
              </Link>
              </button>
            
          </div>
        </div>
      </div>
    </div>
  );
};

