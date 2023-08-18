import "./Modal.css";
import { FaTimes } from "react-icons/fa";

export default function Modal({ heading, children, showModal, onCloseModal }) {
  function handleBackgroundClick(e) {
    if (e.target.classList.contains("modal-container")) {
      onCloseModal();
    }
  }
  return (
    <div
      className={`modal-container ${showModal ? "show-modal" : ""}`}
      onClick={handleBackgroundClick}
    >
      <div className="modal">
        <button type="button" className="close-btn" onClick={onCloseModal}>
          <FaTimes />
        </button>
        <div className="modal-header">
          <h3>{heading}</h3>
        </div>
        <div className="modal-content">{children}</div>
      </div>
    </div>
  );
}
