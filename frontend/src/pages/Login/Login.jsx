import "./Login.css";
import Navbar from "../../components/Navbar/Navbar";
function Login() {
  return (
    <>
    <Navbar />
    <div className="login-container">

      <div className="login-card">

        <h1>Welcome Back 👋</h1>

        <p>
          Sign in to continue your learning journey.
        </p>

        <form>

          <label>Email</label>

          <input
            type="email"
            placeholder="Enter your email"
          />

          <label>Password</label>

          <input
            type="password"
            placeholder="Enter your password"
          />

          <div className="login-options">

            <label>
              <input type="checkbox" />
              Remember Me
            </label>

            <a href="#">
              Forgot Password?
            </a>

          </div>

          <button>
            Login
          </button>

        </form>

        <div className="divider">
          OR
        </div>

        <button className="google-btn">
          Continue with Google
        </button>

        <p className="register-link">
          Don't have an account?
        </p>

      </div>

    </div>
    </>
  );
}

export default Login;