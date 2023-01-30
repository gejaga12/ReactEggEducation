import React from "react";
import { Card } from "./Card";

export const Cards = ({ mascotas }) => {

  const listaDeCartas = mascotas.map((m)=> <Card mascota={m} key={m.id} /> )

  return (
    <div className="album py-5 bg-light">
      <div className="container">
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
         
          {listaDeCartas}

        </div>
      </div>
    </div>
  );
};
