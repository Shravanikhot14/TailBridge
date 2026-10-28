import React from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import pets from "../data/petsData";

function PetDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  const pet = pets.find((item) => item.id === Number(id));

  if (!pet) {
    return (
      <div className="container pet-not-found">
        <i className="bi bi-search"></i>
        <h2>Pet not found</h2>
        <p>This pet may no longer be available on this page.</p>
        <Link to="/browsepets" className="btn pet-details-btn">
          <i className="bi bi-arrow-left me-2"></i>
          Browse All Pets
        </Link>
      </div>
    );
  }

  return (
    <div className="pet-details-page">
      <div className="container">
        
        <button
          className="pet-back-btn"
          onClick={() => navigate("/browsepets")}
        >
          <i className="bi bi-arrow-left me-2"></i>
          Back to pets
        </button>

        <div className="row g-4 g-lg-5 pet-details-layout">
          {/* Pet Image */}
          <div className="col-lg-6">
            <div className="pet-details-image-wrap">
              <img
                src={pet.image}
                alt={pet.name}
                className="pet-details-image"
              />

              <span className="pet-details-type">
                <i className="bi bi-heart-fill me-2"></i>
                {pet.type}
              </span>
            </div>

            <div className="pet-image-note">
              <i className="bi bi-info-circle me-2"></i>
              Every adoption begins with care, patience and understanding.
            </div>
          </div>

          {/* Pet Information */}
          <div className="col-lg-6">
            <div className="pet-details-info">
              <span className="section-eyebrow">
                YOUR FUTURE COMPANION
              </span>

              <h1>Meet {pet.name}</h1>
              <p className="pet-details-breed">{pet.breed}</p>

              <p className="pet-details-description">
                {pet.description}
              </p>

              {/* Pet Information Grid */}
              <div className="pet-info-grid">
                <div className="pet-info-item">
                  <span>
                    <i className="bi bi-calendar3"></i>
                    Age
                  </span>
                  <strong>{pet.age}</strong>
                </div>

                <div className="pet-info-item">
                  <span>
                    <i className="bi bi-gender-ambiguous"></i>
                    Gender
                  </span>
                  <strong>{pet.gender}</strong>
                </div>

                <div className="pet-info-item">
                  <span>
                    <i className="bi bi-arrows-angle-expand"></i>
                    Size
                  </span>
                  <strong>{pet.size}</strong>
                </div>

                <div className="pet-info-item">
                  <span>
                    <i className="bi bi-geo-alt"></i>
                    Location
                  </span>
                  <strong>{pet.location}</strong>
                </div>

                <div className="pet-info-item">
                  <span>
                    <i className="bi bi-shield-check"></i>
                    Vaccination
                  </span>
                  <strong>
                    {pet.vaccinated ? "Vaccinated" : "Not confirmed"}
                  </strong>
                </div>
              </div>

              {/* Personality */}
              <div className="pet-personality">
                <h3>Personality</h3>

                <div className="d-flex flex-wrap gap-2">
                  {pet.personality.map((trait) => (
                    <span className="personality-tag" key={trait}>
                      <i className="bi bi-check-circle me-1"></i>
                      {trait}
                    </span>
                  ))}
                </div>
              </div>

              {/* Adoption CTA */}
              <div className="pet-adoption-box">
                <h3>Ready to welcome {pet.name} home?</h3>
                <p>
                  Take the first step towards giving {pet.name} a loving
                  forever home.
                </p>

                <button
                  className="btn pet-adopt-btn w-100"
                  onClick={() => navigate("/login")}
                >
                  <i className="bi bi-heart-fill me-2"></i>
                  Apply to Adopt
                </button>

                <p className="pet-adoption-note">
                  <i className="bi bi-shield-check me-1"></i>
                  Responsible adoption starts with a conversation.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Adoption Reminder */}
        <div className="pet-care-note">
          <div className="pet-care-icon">
            <i className="bi bi-house-heart"></i>
          </div>

          <div>
            <h3>A forever home, not just a home</h3>
            <p>
              Before adopting, consider your time, space, budget and ability
              to provide lifelong care. Every animal deserves a safe and
              loving environment.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PetDetails;
