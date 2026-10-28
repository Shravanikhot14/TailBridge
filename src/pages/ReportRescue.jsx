
import { useState } from "react";

function ReportRescue() {
  const [photoPreview, setPhotoPreview] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const [formData, setFormData] = useState({
    animalType: "",
    rescueType: "",
    condition: "",
    location: "",
    description: "",
    reporterName: "",
    phone: "",
    email: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handlePhotoChange = (e) => {
    const file = e.target.files[0];

    if (file) {
      setPhotoPreview(URL.createObjectURL(file));
    } else {
      setPhotoPreview("");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Rescue report:", formData);
    setSubmitted(true);
  };

  return (
    <div className="report-rescue-page">
      <section className="rescue-hero">
        <div className="container">
          <div className="row align-items-center g-4">
            <div className="col-lg-7">
              <span className="rescue-eyebrow">
                <i className="bi bi-heart-pulse me-2"></i>
                BE THEIR VOICE
              </span>

              <h1>
                Every Life Deserves
                <span> A Helping Hand.</span>
              </h1>

              <p>
                Seen an injured, abandoned, or helpless animal?
                Report it to help connect them with the care they need.
                Your small step can make a big difference.
              </p>

              <a href="#rescue-form" className="btn rescue-primary-btn">
                <i className="bi bi-megaphone me-2"></i>
                Report an Animal
              </a>

              <div className="rescue-trust-note">
                <i className="bi bi-shield-check me-2"></i>
                Every report matters. Please share accurate details.
              </div>
            </div>

            <div className="col-lg-5">
              <div className="rescue-hero-card">
                <div className="rescue-hero-icon">
                  <i className="bi bi-heart-fill"></i>
                </div>
                <h3>Be the reason they get help.</h3>
                <p>
                  Notice. Report. Rescue. Together, we can make
                  our community safer for animals.
                </p>
                <div className="rescue-paw-decoration">
                  <i className="bi bi-paw-fill"></i>
                  <i className="bi bi-paw-fill"></i>
                  <i className="bi bi-paw-fill"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="rescue-form-section" id="rescue-form">
        <div className="container">
          <div className="rescue-section-heading text-center">
            <span className="rescue-eyebrow">TAKE THE FIRST STEP</span>
            <h2>Submit a Rescue Report</h2>
            <p>
              Tell us what happened so the situation can be understood
              and the appropriate help can be arranged.
            </p>
          </div>

          {submitted ? (
            <div className="rescue-success">
              <i className="bi bi-check-circle-fill"></i>
              <h3>Report submitted successfully!</h3>
              <p>
                Thank you for caring. This is a demo confirmation;
                your report has not yet been sent to a rescue team.
              </p>
              <button
                className="btn rescue-primary-btn"
                onClick={() => {
                  setFormData({
                    animalType: "",
                    rescueType: "",
                    condition: "",
                    location: "",
                    description: "",
                    reporterName: "",
                    phone: "",
                    email: "",
                  });
                  setPhotoPreview("");
                  setSubmitted(false);
                }}
              >
                Submit Another Report
              </button>
            </div>
          ) : (
            <form className="rescue-form-card" onSubmit={handleSubmit}>
              <div className="rescue-form-title">
                <div className="rescue-form-title-icon">
                  <i className="bi bi-clipboard-heart"></i>
                </div>
                <div>
                  <h3>Animal Information</h3>
                  <p>Share the details of the animal that needs help.</p>
                </div>
              </div>

              <div className="row g-4">
                <div className="col-md-6">
                  <label className="form-label">Animal Type *</label>
                  <select
                    className="form-select rescue-input"
                    name="animalType"
                    value={formData.animalType}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Select animal</option>
                    <option value="Dog">Dog</option>
                    <option value="Cat">Cat</option>
                    <option value="Cow">Cow</option>
                    <option value="Bird">Bird</option>
                    <option value="Other">Other</option>
                  </select>
                </div>

                <div className="col-md-6">
                  <label className="form-label">Type of Rescue *</label>
                  <select
                    className="form-select rescue-input"
                    name="rescueType"
                    value={formData.rescueType}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Select rescue category</option>
                    <option value="Injured animal">Injured animal</option>
                    <option value="Abandoned animal">Abandoned animal</option>
                    <option value="Stray animal">Stray animal</option>
                    <option value="Animal in danger">Animal in danger</option>
                    <option value="Trapped animal">Trapped animal</option>
                    <option value="Other">Other</option>
                  </select>
                </div>

                <div className="col-md-6">
                  <label className="form-label">Current Condition *</label>
                  <select
                    className="form-select rescue-input"
                    name="condition"
                    value={formData.condition}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Select condition</option>
                    <option value="Stable">Appears stable</option>
                    <option value="Injured">Injured</option>
                    <option value="Seriously injured">Seriously injured</option>
                    <option value="Weak or sick">Weak or sick</option>
                    <option value="In immediate danger">In immediate danger</option>
                    <option value="Unknown">Not sure</option>
                  </select>
                </div>

                <div className="col-md-6">
                  <label className="form-label">Rescue Location *</label>
                  <input
                    type="text"
                    className="form-control rescue-input"
                    name="location"
                    value={formData.location}
                    onChange={handleChange}
                    placeholder="Area, street, landmark, city"
                    required
                  />
                </div>

                <div className="col-12">
                  <label className="form-label">Describe the Situation *</label>
                  <textarea
                    className="form-control rescue-input"
                    name="description"
                    value={formData.description}
                    onChange={handleChange}
                    rows="4"
                    placeholder="Describe what happened, the animal's condition, and any important landmarks..."
                    required
                  ></textarea>
                </div>

                <div className="col-12">
                  <label className="form-label">Upload Animal Photo</label>
                  <label className="rescue-upload-box">
                    <i className="bi bi-cloud-arrow-up"></i>
                    <strong>Choose a photo</strong>
                    <span>Upload a clear image if it is safe to take one.</span>
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handlePhotoChange}
                    />
                  </label>

                  {photoPreview && (
                    <img
                      src={photoPreview}
                      alt="Animal preview"
                      className="rescue-photo-preview"
                    />
                  )}
                </div>
              </div>

              <div className="rescue-form-divider"></div>

              <div className="rescue-form-title">
                <div className="rescue-form-title-icon">
                  <i className="bi bi-person-lines-fill"></i>
                </div>
                <div>
                  <h3>Your Contact Details</h3>
                  <p>Provide details in case more information is needed.</p>
                </div>
              </div>

              <div className="row g-4">
                <div className="col-md-6">
                  <label className="form-label">Your Name *</label>
                  <input
                    type="text"
                    className="form-control rescue-input"
                    name="reporterName"
                    value={formData.reporterName}
                    onChange={handleChange}
                    placeholder="Enter your name"
                    required
                  />
                </div>

                <div className="col-md-6">
                  <label className="form-label">Phone Number *</label>
                  <input
                    type="tel"
                    className="form-control rescue-input"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Enter your phone number"
                    pattern="[0-9]{10}"
                    maxLength="10"
                    title="Enter a 10-digit phone number"
                    required
                  />
                </div>

                <div className="col-12">
                  <label className="form-label">Email Address</label>
                  <input
                    type="email"
                    className="form-control rescue-input"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="you@example.com"
                  />
                </div>
              </div>

              <div className="rescue-safety-note">
                <i className="bi bi-info-circle-fill"></i>
                <p>
                  <strong>Safety first:</strong> Do not put yourself
                  or the animal at risk. Avoid handling aggressive or
                  seriously injured animals. Contact an appropriate
                  local animal rescue service for urgent situations.
                </p>
              </div>

              <button type="submit" className="btn rescue-primary-btn rescue-submit-btn">
                <i className="bi bi-send-fill me-2"></i>
                Submit Rescue Report
              </button>

              <p className="rescue-form-footnote">
                
              </p>
            </form>
          )}
        </div>
      </section>
    </div>
  );
}

export default ReportRescue;
