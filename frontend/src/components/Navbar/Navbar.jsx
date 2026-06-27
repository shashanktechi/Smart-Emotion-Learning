import "./Navbar.css";
import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/images/logo.png";

function Navbar() {
  return (
    <header className="navbar">

      <div className="logo-section">

        <Link to="/">
          <img src={logo} alt="SMART Logo" className="logo" />
        </Link>

      </div>

      <nav>

        <ul className="nav-links">

          <li>
            <NavLink to="/">Home</NavLink>
          </li>

          <li>
            <NavLink to="/about">About</NavLink>
          </li>

          <li>
            <NavLink to="/">Features</NavLink>
          </li>

          <li>
            <NavLink to="/contact">Contact</NavLink>
          </li>

        </ul>

      </nav>

      <div className="nav-buttons">

        <Link to="/login">
          <button className="login-btn">
            Login
          </button>
        </Link>

        <Link to="/register">
          <button className="register-btn">
            Register
          </button>
        </Link>

      </div>

    </header>
  );
}

export default Navbar;