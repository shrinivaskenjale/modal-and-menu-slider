import { useState } from "react";
import "./Header.css";
import SignupModal from "./SignupModal";

export default function Header() {
  const [showModal, setShowModal] = useState(false);

  function handleShowModal() {
    setShowModal(true);
  }

  function handleCloseModal() {
    setShowModal(false);
  }

  return (
    <>
      <header>
        <h1>My Landing Page</h1>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illo, culpa.
        </p>
        <button className="cta-btn" type="button" onClick={handleShowModal}>
          Sign Up
        </button>
      </header>
      {/* modal */}
      <SignupModal showModal={showModal} onCloseModal={handleCloseModal} />
    </>
  );
}
