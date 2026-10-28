import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";

function UserRegistration() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    reset,
  } = useForm();

  const password = watch("password");

  const onSubmit = (data) => {
    console.log("User Registration:", data);
    alert("Registration form submitted successfully!");
    reset();
  };

  return (
    <div className="registration-page py-5">
      <div className="container">
        <div className="registration-card mx-auto">
          <div className="text-center mb-4">
            <div className="registration-icon">
              <i className="bi bi-paw-fill"></i>
            </div>

            <h2 className="fw-bold mt-3">Create Your Account</h2>
            <p className="text-muted">
              Join TailBridge and find your forever friend.
            </p>
          </div>

          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="row g-3">
              <div className="col-md-6">
                <label className="form-label">First Name</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter first name"
                  {...register("firstName", {
                    required: "First name is required",
                    minLength: {
                      value: 2,
                      message: "Minimum 2 characters required",
                    },
                  })}
                />
                {errors.firstName && (
                  <small className="text-danger">
                    {errors.firstName.message}
                  </small>
                )}
              </div>

              <div className="col-md-6">
                <label className="form-label">Last Name</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter last name"
                  {...register("lastName", {
                    required: "Last name is required",
                    minLength: {
                      value: 2,
                      message: "Minimum 2 characters required",
                    },
                  })}
                />
                {errors.lastName && (
                  <small className="text-danger">
                    {errors.lastName.message}
                  </small>
                )}
              </div>

              <div className="col-12">
                <label className="form-label">Email Address</label>
                <input
                  type="email"
                  className="form-control"
                  placeholder="you@example.com"
                  {...register("email", {
                    required: "Email is required",
                    pattern: {
                      value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                      message: "Enter a valid email address",
                    },
                  })}
                />
                {errors.email && (
                  <small className="text-danger">
                    {errors.email.message}
                  </small>
                )}
              </div>

              <div className="col-12">
                <label className="form-label">Phone Number</label>
                <input
                  type="tel"
                  className="form-control"
                  placeholder="Enter 10-digit phone number"
                  {...register("phone", {
                    required: "Phone number is required",
                    pattern: {
                      value: /^[6-9]\d{9}$/,
                      message: "Enter a valid 10-digit Indian phone number",
                    },
                  })}
                />
                {errors.phone && (
                  <small className="text-danger">
                    {errors.phone.message}
                  </small>
                )}
              </div>

              <div className="col-12">
                <label className="form-label">Password</label>
                <input
                  type="password"
                  className="form-control"
                  placeholder="Create a password"
                  {...register("password", {
                    required: "Password is required",
                    pattern: {
                      value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)\S{6,16}$/,
                      message:
                        "Use 6–16 characters with uppercase, lowercase and a number",
                    },
                  })}
                />
                {errors.password && (
                  <small className="text-danger">
                    {errors.password.message}
                  </small>
                )}
              </div>

              <div className="col-12">
                <label className="form-label">Confirm Password</label>
                <input
                  type="password"
                  className="form-control"
                  placeholder="Re-enter your password"
                  {...register("confirmPassword", {
                    required: "Please confirm your password",
                    validate: (value) =>
                      value === password || "Passwords do not match",
                  })}
                />
                {errors.confirmPassword && (
                  <small className="text-danger">
                    {errors.confirmPassword.message}
                  </small>
                )}
              </div>

              <div className="col-12 mt-4">
                <button type="submit" className="btn btn-primary w-100">
                  Create Account
                  <i className="bi bi-arrow-right ms-2"></i>
                </button>
              </div>
            </div>
          </form>

          <p className="text-center mt-4 mb-0">
            Already have an account?{" "}
            <Link to="/login" className="fw-semibold">
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default UserRegistration;
