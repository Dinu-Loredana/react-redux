import React, { useState, useEffect } from "react";
import Modal from "./Modal";

export const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsOpen(false), 3000);

    return () => {
      clearTimeout(timer);
    };
  }, [isOpen]);

  return (
    <>
      <div className="container mt-5 pt-5">
        <h3>Home</h3>
        <p>
          Lorem Ipsum has been the industry's standard dummy text ever since the
          1500s, when an unknown printer took a galley of type and scrambled it
          to make a type specimen book.{" "}
        </p>
        <p>
          It has survived not only five centuries, but also the leap into
          electronic typesetting, remaining essentially unchanged.
        </p>
        {!isOpen ? (
          <button
            type="button"
            className="btn btn-info"
            onClick={() => setIsOpen(true)}
          >
            Check Modal
          </button>
        ) : (
          <Modal />
        )}
      </div>
    </>
  );
};
