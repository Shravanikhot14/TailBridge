
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-dark text-white text-center py-4 mt-auto">
      <div className="container">
        <h5 className="fw-bold">TailBridge 🐾</h5>

        <p>
          Connecting animals with care, rescue, and forever homes.
        </p>

        <div className="d-flex justify-content-center gap-3 flex-wrap">
          <Link className="text-white" to="/pets">
            Adopt a Pet
          </Link>

          <Link className="text-white" to="/report-rescue">
            Report Rescue
          </Link>

          <Link className="text-white" to="/register">
            Join TailBridge
          </Link>
        </div>

        <hr />

        <small>
          © {new Date().getFullYear()} TailBridge. All rights reserved.
        </small>
      </div>
    </footer>
  );
}

export default Footer;
