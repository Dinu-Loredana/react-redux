import ReactDOM from "react-dom";

const Modal = () => {
  const modalEl = (
    <div className="container mt-5 pt-5 mx-auto">
      <div className="shadow p-3 mb-5 bg-body bg-light rounded">
        <h5>Modal creted with React Portal</h5>
      </div>
    </div>
  );

  return ReactDOM.createPortal(modalEl, document.getElementById("modal"));
};

export default Modal;
