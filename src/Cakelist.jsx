import React from "react";
import { Link } from "react-router-dom";


export default function Cakelist({ cakes }) {
  if (!cakes || cakes.length === 0) {
    return <h3 style={{ textAlign: "center" }}>No cakes found</h3>;
  }

  return (
    <div className="row">
      {cakes.map((cake) => (
        <div className="col" key={cake.id} style={{ marginBottom: "20px" }}>
          <Link to={`/sc/${cake.id}`}>
          <div className="card">
            <img src={cake.image} className="card-img-top" alt={cake.name} />
            <div className="card-body">
              <h5 className="card-title">{cake.name}</h5>
              <p className="card-text">Rs.{cake.price}</p>
            </div>
          </div>
          </Link>
        </div>
      ))}
    </div>
  );
}
