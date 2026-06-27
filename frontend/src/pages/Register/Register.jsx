import "./Register.css";
import { Link } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
function Register() {
  return (
    <>
    <Navbar />
    <div className="register-container">
      <div className="register-card">

        <h1>Create Your Account</h1>

        <p>
          Join SMART Emotion Detection Learning Platform
        </p>

        <form>

          <label>Full Name</label>
          <input
            type="text"
            placeholder="Enter your full name"
          />

          <label>Email Address</label>
          <input
            type="email"
            placeholder="Enter your email"
          />

          <label>Password</label>
          <input
            type="password"
            placeholder="Create a password"
          />

          <label>Confirm Password</label>
          <input
            type="password"
            placeholder="Confirm your password"
          />

          <label className="checkbox">
            <input type="checkbox" />
            I agree to the Terms & Conditions
          </label>

          <button>Create Account</button>

        </form>

        <div className="divider">OR</div>

        <button className="google-btn">
          Continue with Google
        </button>

        <p className="login-link">
          Already have an account?
          <Link to="/login"> Login</Link>
        </p>

      </div>
    </div>
    </>
  );
}

export default Register;