import "./HowItWorks.css";
import {
  FaUserGraduate,
  FaCamera,
  FaBrain,
  FaBookOpen,
} from "react-icons/fa";

function HowItWorks() {
  return (
    <section className="how-it-works">

      <h2>How SMART Works</h2>

      <p>
        Four simple steps to create a personalized learning experience.
      </p>

      <div className="steps">

        <div className="step">
          <FaUserGraduate className="step-icon" />
          <h3>Login</h3>
          <p>Securely access your learning dashboard.</p>
        </div>

        <div className="step">
          <FaCamera className="step-icon" />
          <h3>Detect Emotion</h3>
          <p>Capture facial expressions using your webcam.</p>
        </div>

        <div className="step">
          <FaBrain className="step-icon" />
          <h3>AI Analysis</h3>
          <p>Our AI analyzes your emotional state.</p>
        </div>

        <div className="step">
          <FaBookOpen className="step-icon" />
          <h3>Adaptive Learning</h3>
          <p>Receive personalized learning recommendations.</p>
        </div>

      </div>

    </section>
  );
}

export default HowItWorks;