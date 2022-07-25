import React from "react";
import { Link } from "react-router-dom";

export const Contact = () => {
  return (
    <div className="container mt-5 pt-5">
      <h3>Contact | Our Team</h3>
      <div className="shadow p-3 mb-5 bg-body rounded">
        <Link
          to="/card/mike"
          style={{ textDecoration: "none", fontWeight: "bold", color: "brown" }}
        >
          Mike
        </Link>
        <p>Business Lawyer</p>
      </div>
      <div className="shadow p-3 mb-5 bg-body rounded">
        <Link
          to="/card/alex"
          style={{ textDecoration: "none", fontWeight: "bold", color: "brown" }}
        >
          Alex
        </Link>
        <p>Family Lawyer</p>
      </div>
    </div>
  );
};
