import "./Footer.css";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer">

      <div className="footer-container">

        <div className="footer-section">

          <h2>SMART</h2>

          <p>
            Empowering education through Artificial Intelligence and
            emotion-aware learning experiences.
          </p>

        </div>

        <div className="footer-section">

          <h3>Quick Links</h3>

          <Link to="/">Home</Link>

          <Link to="/about">About</Link>

          <Link to="/contact">Contact</Link>

        </div>

        <div className="footer-section">

          <h3>Resources</h3>

          <a href="#">Privacy Policy</a>

          <a href="#">Terms & Conditions</a>

          <a href="#">Support</a>

        </div>

        <div className="footer-section">

          <h3>Connect</h3>

          <a href="#"><FaGithub /> GitHub</a>

          <a href="#"><FaLinkedin /> LinkedIn</a>

          <a href="#"><FaEnvelope /> Email</a>

        </div>

      </div>

      <hr />

      <p className="copyright">
        © 2026 SMART Emotion Detection Learning. All Rights Reserved.
      </p>

    </footer>
  );
}

export default Footer;