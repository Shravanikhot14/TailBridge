
import { Link } from "react-router-dom";

const reports = [
  {
    id: "RR001",
    animal: "Dog",
    rescueType: "Injured Animal",
    location: "Andheri East, Mumbai",
    date: "28 Oct 2026",
    status: "Pending",
    description: "A stray dog appears to have an injured leg.",
    icon: "bi-heart-pulse",
  },
  {
    id: "RR002",
    animal: "Cat",
    rescueType: "Abandoned Animal",
    location: "Andheri West, Mumbai",
    date: "26 Oct 2026",
    status: "In Progress",
    description: "A small kitten was found alone near a building.",
    icon: "bi-house-heart",
  },
  {
    id: "RR003",
    animal: "Dog",
    rescueType: "Animal in Danger",
    location: "Jogeshwari, Mumbai",
    date: "24 Oct 2026",
    status: "Resolved",
    description: "A stray dog needed assistance near a busy road.",
    icon: "bi-check-circle",
  },
];

function MyRescueReports() {
  const pending = reports.filter((report) => report.status === "Pending").length;
  const inProgress = reports.filter(
    (report) => report.status === "In Progress"
  ).length;
  const resolved = reports.filter(
    (report) => report.status === "Resolved"
  ).length;

  return (
    <div className="my-reports-page">
      <section className="my-reports-hero">
        <div className="container">
          <span className="my-reports-eyebrow">
            <i className="bi bi-heart-pulse me-2"></i>
            YOUR KINDNESS MATTERS
          </span>

          <div className="d-flex flex-column flex-md-row justify-content-between align-items-md-center gap-4">
            <div>
              <h1>My Rescue Reports</h1>
              <p>
                Keep track of the animals you've reported and follow
                their rescue progress.
              </p>
            </div>

            <Link to="/report-rescue" className="btn my-reports-primary-btn">
              <i className="bi bi-plus-circle me-2"></i>
              New Rescue Report
            </Link>
          </div>
        </div>
      </section>

      <section className="container my-reports-content">
        <div className="row g-3 my-reports-stats">
          <div className="col-12 col-sm-6 col-lg-3">
            <div className="report-stat-card">
              <div className="report-stat-icon">
                <i className="bi bi-clipboard-heart"></i>
              </div>
              <div>
                <p>Total Reports</p>
                <h3>{reports.length}</h3>
              </div>
            </div>
          </div>

          <div className="col-12 col-sm-6 col-lg-3">
            <div className="report-stat-card">
              <div className="report-stat-icon pending-icon">
                <i className="bi bi-hourglass-split"></i>
              </div>
              <div>
                <p>Pending</p>
                <h3>{pending}</h3>
              </div>
            </div>
          </div>

          <div className="col-12 col-sm-6 col-lg-3">
            <div className="report-stat-card">
              <div className="report-stat-icon progress-icon">
                <i className="bi bi-arrow-repeat"></i>
              </div>
              <div>
                <p>In Progress</p>
                <h3>{inProgress}</h3>
              </div>
            </div>
          </div>

          <div className="col-12 col-sm-6 col-lg-3">
            <div className="report-stat-card">
              <div className="report-stat-icon resolved-icon">
                <i className="bi bi-check-circle"></i>
              </div>
              <div>
                <p>Resolved</p>
                <h3>{resolved}</h3>
              </div>
            </div>
          </div>
        </div>

        <div className="my-reports-list-heading">
          <div>
            <h2>Your Reports</h2>
            <p>Updates on the rescue cases you've submitted.</p>
          </div>
          <span className="my-reports-total">
            {reports.length} reports
          </span>
        </div>

        {reports.length === 0 ? (
          <div className="my-reports-empty">
            <div className="my-reports-empty-icon">
              <i className="bi bi-clipboard-heart"></i>
            </div>
            <h3>No rescue reports yet</h3>
            <p>
              When you report an animal in need, your reports will
              appear here.
            </p>
            <Link to="/report-rescue" className="btn my-reports-primary-btn">
              Report an Animal
            </Link>
          </div>
        ) : (
          <div className="my-reports-list">
            {reports.map((report) => (
              <article className="my-report-card" key={report.id}>
                <div className="my-report-animal-icon">
                  <i className={`bi ${report.icon}`}></i>
                </div>

                <div className="my-report-details">
                  <div className="my-report-title-row">
                    <div>
                      <span className="my-report-id">{report.id}</span>
                      <h3>{report.animal} — {report.rescueType}</h3>
                    </div>

                    <span
                      className={`my-report-status status-${report.status
                        .toLowerCase()
                        .replace(" ", "-")}`}
                    >
                      <span className="status-dot"></span>
                      {report.status}
                    </span>
                  </div>

                  <p className="my-report-description">
                    {report.description}
                  </p>

                  <div className="my-report-meta">
                    <span>
                      <i className="bi bi-geo-alt"></i>
                      {report.location}
                    </span>
                    <span>
                      <i className="bi bi-calendar3"></i>
                      {report.date}
                    </span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        )}

        <div className="my-reports-help">
          <div className="my-reports-help-icon">
            <i className="bi bi-heart-fill"></i>
          </div>
          <div>
            <h3>Know an animal that needs help?</h3>
            <p>Your report could be the first step toward a safer life.</p>
          </div>
          <Link to="/report-rescue" className="my-reports-help-link">
            Report now <i className="bi bi-arrow-right"></i>
          </Link>
        </div>
      </section>
    </div>
  );
}

export default MyRescueReports;
