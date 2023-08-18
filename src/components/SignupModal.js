import "./SignupModal.css";
import Modal from "./Modal";

export default function SignupModal({ showModal, onCloseModal }) {
  return (
    <Modal heading="Sign Up" showModal={showModal} onCloseModal={onCloseModal}>
      <div className="signup-modal">
        <p>Register with us to get offers, support and more.</p>
        <form className="modal-form">
          <div>
            <label htmlFor="name">Name</label>
            <input type="text" id="name" placeholder="Enter your name" />
          </div>
          <div>
            <label htmlFor="email">Email</label>
            <input type="email" id="email" placeholder="Enter your email" />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              placeholder="Enter your password"
            />
          </div>
          <div>
            <label htmlFor="password2">Confirm password</label>
            <input
              type="password"
              id="password2"
              placeholder="Re-enter your password"
            />
          </div>
          <button type="submit">Sign Up</button>
        </form>
      </div>
    </Modal>
  );
}
