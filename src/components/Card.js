import React from "react";
import { useParams } from "react-router-dom";

const Card = () => {
  const { user } = useParams();

  return (
    <div className="container mt-5 pt-5">
      <div className="shadow p-3 mb-5 bg-body rounded">
        <h5 style={{ color: "brown", textTransform: "uppercase" }}>{user}</h5>
        <p>Email: {user}@gmail.com</p>
        <p>Phone: 0740000000</p>
      </div>
    </div>
  );
};

export default Card;
