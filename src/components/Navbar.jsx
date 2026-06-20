
export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">
        <img src="public/LOGO.png" alt="ETHiCS" />
      </div>

      <ul>
        <li><a href="#hero">Home</a></li>
        <li><a href="#about">About Us</a></li>
        <li><a href="#about">Our Vision</a></li>
        <li><a href="#products">Machines</a></li>
        <li><a href="#why-choose-us">Why Us</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

    </nav>
  );
}