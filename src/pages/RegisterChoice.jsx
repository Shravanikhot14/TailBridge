
import { Link } from "react-router-dom";

function RegisterChoice() {
  return (
    <div className="container py-5">
      <div className="text-center mb-5">
        <h1 className="fw-bold">Join TailBridge</h1>
        <p className="text-muted">
          Choose how you want to make a difference.
        </p>
      </div>

      <div className="row justify-content-center g-4">
        <div className="col-md-5">
          <div className="card shadow-sm border-0 h-100 p-4 text-center">
            <i className="bi bi-paw-fill display-3 text-primary"></i>
            <h3 className="mt-3">Pet Adopter</h3>
            <p>
              Create an account to adopt pets, save favourites,
              and track your applications.
            </p>
            <Link to="/user-registration" className="btn btn-primary mt-auto">
              Register as User
            </Link>
          </div>
        </div>

        <div className="col-md-5">
          <div className="card shadow-sm border-0 h-100 p-4 text-center">
            <i className="bi bi-houses-fill display-3 text-primary"></i>
            <h3 className="mt-3">Animal Welfare Partner</h3>
            <p>
              Register your NGO or animal shelter to help manage
              pet adoptions and rescue activities.
            </p>
            <Link
              to="/ngo-registration"
              className="btn btn-primary mt-auto"
            >
              Register as NGO
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RegisterChoice;
