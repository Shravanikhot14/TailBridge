import { Link, NavLink } from "react-router-dom";
import logo from "../assets/logo.png"

function Navbar() {
  return (
   <nav className="navbar navbar-expand-lg bg-white shadow-sm sticky-top">
      <div className="container">
        <Link className="navbar-brand d-flex align-items-center" to="/">
          <img
            src={logo}
            alt="TailBridge Logo"
            className="navbar-logo"
          />
        </Link>

        
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#tailbridgeNavbar"
          aria-controls="tailbridgeNavbar"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="tailbridgeNavbar">
          <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink className="nav-link" to="/">
                Home
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink className="nav-link" to="/browsepets">
                Adopt a Pet
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink className="nav-link" to="/report-rescue">
                Report Rescue
              </NavLink>
            </li>
          </ul>

          <Link to="/favourites" className="nav-link favourites-nav-link">
  <i className="bi bi-heart me-2"></i>
  Favourites
</Link>

          <div className="d-flex gap-2">
            <Link to="/login" className="btn btn-outline-primary">
              Login
            </Link>

            <Link to="/register-choice" className="btn btn-primary">
              Register
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
