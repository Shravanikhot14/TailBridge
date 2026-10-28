import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";

function NgoRegistration() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    reset,
  } = useForm();

  const password = watch("password");

  const onSubmit = (data) => {
    console.log("NGO Registration:", data);
    alert("NGO registration form submitted successfully!");
    reset();
  };

  return (
    <div className="registration-page py-5">
      <div className="container">
        <div className="registration-card ngo-card mx-auto">
          <div className="text-center mb-4">
            <div className="registration-icon">
              <i className="bi bi-houses-fill"></i>
            </div>

            <h2 className="fw-bold mt-3">Register Your Organisation</h2>
            <p className="text-muted">
              Partner with TailBridge to help animals find safe homes.
            </p>
          </div>

          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="row g-3">
              <div className="col-12">
                <label className="form-label">NGO / Shelter Name</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter organisation name"
                  {...register("organisationName", {
                    required: "Organisation name is required",
                    minLength: {
                      value: 2,
                      message: "Minimum 2 characters required",
                    },
                  })}
                />
                {errors.organisationName && (
                  <small className="text-danger">
                    {errors.organisationName.message}
                  </small>
                )}
              </div>

              <div className="col-md-6">
                <label className="form-label">Contact Person</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Full name"
                  {...register("contactPerson", {
                    required: "Contact person's name is required",
                    minLength: {
                      value: 2,
                      message: "Minimum 2 characters required",
                    },
                  })}
                />
                {errors.contactPerson && (
                  <small className="text-danger">
                    {errors.contactPerson.message}
                  </small>
                )}
              </div>

              <div className="col-md-6">
                <label className="form-label">Registration Number</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter if applicable"
                  {...register("registrationNumber")}
                />
                <small className="text-muted">
                  Optional for now; verification can be added later.
                </small>
              </div>

              <div className="col-12">
                <label className="form-label">Organisation Email</label>
                <input
                  type="email"
                  className="form-control"
                  placeholder="organisation@example.com"
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
                <label className="form-label">Contact Number</label>
                <input
                  type="tel"
                  className="form-control"
                  placeholder="Enter 10-digit phone number"
                  {...register("phone", {
                    required: "Contact number is required",
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
                <label className="form-label">Organisation Address</label>
                <textarea
                  className="form-control"
                  rows="2"
                  placeholder="Enter complete address"
                  {...register("address", {
                    required: "Organisation address is required",
                    minLength: {
                      value: 5,
                      message: "Please enter a complete address",
                    },
                  })}
                ></textarea>
                {errors.address && (
                  <small className="text-danger">
                    {errors.address.message}
                  </small>
                )}
              </div>

              <div className="col-12">
                <label className="form-label">City</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter city"
                  {...register("city", {
                    required: "City is required",
                  })}
                />
                {errors.city && (
                  <small className="text-danger">
                    {errors.city.message}
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
                  Register Organisation
                  <i className="bi bi-arrow-right ms-2"></i>
                </button>
              </div>
            </div>
          </form>

          <p className="text-center mt-4 mb-0">
            Already registered?{" "}
            <Link to="/login" className="fw-semibold">
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default NgoRegistration;
