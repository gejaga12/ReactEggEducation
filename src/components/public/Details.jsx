import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import RickAndMortyService from "../../services/RickAndMortyService";

export const Details = () => {
  const [mascota, setMascota] = useState({});
  const { id } = useParams();

  useEffect(() => {
    RickAndMortyService.traerPersonajesPorId(id).then((data) =>
      setMascota(data)
    );
  }, []);

  console.log(mascota);

  const detailCard = {
    width: "80%",
    margin: "auto",
    background: "white",
  };

  const nombre = mascota.name;
  const especie = mascota.species;
  const genero = mascota.gender;
  const estado = mascota.status;
  const fechaCreacion = mascota.created;


  return (
    <div className="row m-3">
      <div className="col-md-12" style={detailCard}>
        <div className="card flex-md-row mb-4 box-shadow h-md-250">
          <div className="card-body d-flex flex-column align-items-start">
            <strong className="d-inline-block mb-2 text-success">
              {especie}
            </strong>
            <h3 className="mb-1 text-dark">{nombre}</h3>
            <div className="mb-1 text-muted">
              {new Date(fechaCreacion).toLocaleDateString()}
            </div>
            <p className="card-text mb-auto">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi
              libero temporibus blanditiis aspernatur, ab velit cumque fugit cum
              numquam vero exercitationem accusamus qui, at recusandae explicabo
              consequatur fugiat alias. Eligendi.
            </p>
            <ul className="list-group mt-3">
              <li className="list-group-item">{genero}</li>
              <li className="list-group-item">{estado}</li>
            </ul>
            <Link to={"/"} className="mt-3 btn btn-primary btn-lg">
              Volver
            </Link>
          </div>
          <img
            className="h-100 d-inline-block rounded card-img-right flex-auto d-none d-md-block m-4"
            height="auto"
            src={mascota.image}
            alt="mascota imagen"
          />
        </div>
      </div>
    </div>
  );
};
