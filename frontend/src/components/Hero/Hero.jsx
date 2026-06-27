import "./Hero.css";
import logo from "../../assets/images/logo.png";
function Hero() {
  return (
    
    <section className="hero">

      <div className="hero-content">

        <span className="badge">
          AI-Powered Learning Platform
        </span>

        <h1>
          SMART Emotion Detection Learning
        </h1>

        <p>
          Intelligent Analysis. Enhanced Understanding.
        </p>

        <p className="hero-description">
          Detect students' emotions in real time and deliver
          personalized learning experiences using Artificial
          Intelligence.
        </p>

        <div className="hero-buttons">

          <button className="primary-btn">
            Get Started
          </button>

          <button className="secondary-btn">
            Learn More
          </button>

        </div>

      </div>

      <div className="hero-image">

        <img
          src={logo}
          alt="SMART Logo"
        />

      </div>

    </section>
  );
}

export default Hero;