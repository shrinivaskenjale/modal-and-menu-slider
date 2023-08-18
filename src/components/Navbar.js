import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "./Navbar.css";

/* eslint-disable jsx-a11y/anchor-is-valid */
export default function Navbar() {
  const [showNav, setShowNav] = useState(false);
  function handleToggleNav() {
    setShowNav((sn) => !sn);
  }
  return (
    <nav className={`navbar ${showNav ? "show-navbar" : ""}`}>
      <button className="toggle-btn" onClick={handleToggleNav}>
        {showNav ? <FaTimes /> : <FaBars />}
      </button>
      <div className="logo">
        <img src="https://randomuser.me/api/portraits/men/76.jpg" alt="user" />
      </div>
      <ul>
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">Portfolid</a>
        </li>
        <li>
          <a href="#">Blog</a>
        </li>
        <li>
          <a href="#">Contact</a>
        </li>
      </ul>
    </nav>
  );
}
