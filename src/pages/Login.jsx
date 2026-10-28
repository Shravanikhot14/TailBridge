import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { LoginContext } from "../LoginContext";

function Login() {
  const { login } = useContext(LoginContext);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);

    login(data.email);

    // Temporary redirect until backend authentication is added
    navigate("/");
  };

  return (
    <div className="login-page">
      <div className="login-card">
        <div className="text-center mb-4">
          <i className="bi bi-heart-pulse-fill login-icon"></i>
          <h2 className="fw-bold mt-2">Welcome Back!</h2>
          <p className="text-muted">
            Login to continue your TailBridge journey.
          </p>
        </div>

        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email Address
            </label>

            <input
              id="email"
              type="email"
              className={`form-control ${errors.email ? "is-invalid" : ""}`}
              placeholder="Enter your email"
              {...register("email", {
                required: "Email is required",
              })}
            />

            {errors.email && (
              <p className="text-danger small mt-1 mb-0">
                {errors.email.message}
              </p>
            )}
          </div>

          <div className="mb-4">
            <label htmlFor="password" className="form-label">
              Password
            </label>

            <input
              id="password"
              type="password"
              className={`form-control ${
                errors.password ? "is-invalid" : ""
              }`}
              placeholder="Enter your password"
              {...register("password", {
                required: "Password is required",
              })}
            />

            {errors.password && (
              <p className="text-danger small mt-1 mb-0">
                {errors.password.message}
              </p>
            )}
          </div>

          <button type="submit" className="btn btn-primary w-100">
            Login
          </button>
        </form>

        <p className="text-center mt-4 mb-0">
          Don't have an account?{" "}
          <Link to="/register-choice" className="login-link">
            Register
          </Link>
        </p>


      </div>
    </div>
  );
}

export default Login;
