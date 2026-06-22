import { useState } from "react";
import "./Navbar.css";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="logo">
        <img src="/logo.png" alt="ETHICS Logo" />
      </div>

      <div
        className="hamburger"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        ☰
      </div>

      <ul className={menuOpen ? "nav-links active" : "nav-links"}>
        <li><a href="#hero" onClick={() => setMenuOpen(false)}>Home</a></li>
        <li><a href="#about" onClick={() => setMenuOpen(false)}>About Us</a></li>
        <li><a href="#vision" onClick={() => setMenuOpen(false)}>Our Vision</a></li>
        <li><a href="#products" onClick={() => setMenuOpen(false)}>Machines</a></li>
        <li><a href="#whychooseus" onClick={() => setMenuOpen(false)}>Why Us</a></li>
        <li><a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a></li>
      </ul>
    </nav>
  );
}