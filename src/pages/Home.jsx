import React from "react";
import { Link } from "react-router-dom";

function Home() {
  const featuredPets = [
    {
      id: 1,
      name: "Buddy",
      type: "Dog",
      age: "4 months",
      location: "Mumbai",
      image:
        "https://images.unsplash.com/photo-1552053831-71594a27632d?w=600",
    },
    {
      id: 2,
      name: "Milo",
      type: "Cat",
      age: "3 months",
      location: "Thane",
      image:
        "https://images.unsplash.com/photo-1573865526739-10659fec78a5?w=600",
    },
    {
      id: 3,
      name: "Bruno",
      type: "Dog",
      age: "8 months",
      location: "Navi Mumbai",
      image:
        "https://images.unsplash.com/photo-1543466835-00a7907e9de1?w=600",
    },
  ];

  const steps = [
    {
      icon: "bi-search-heart",
      title: "Discover",
      description:
        "Explore adorable pets waiting for a loving and safe home.",
    },
    {
      icon: "bi-file-earmark-check",
      title: "Apply",
      description:
        "Submit an adoption application and connect with the pet's caretaker.",
    },
    {
      icon: "bi-house-heart",
      title: "Welcome Home",
      description:
        "Give your new companion the love, care, and home they deserve.",
    },
  ];

  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="home-hero">
        <div className="container">
          <div className="row align-items-center g-5">
            <div className="col-lg-6">
              <span className="hero-label">
                <i className="bi bi-heart-fill me-2"></i>
                Every paw deserves a home
              </span>

              <h1 className="home-hero-title">
                A little love can
                <span> change a life.</span>
              </h1>

              <p className="home-hero-text">
                Find your perfect furry companion, support animal
                rescue, and help every animal get the safe and loving
                home they deserve.
              </p>

              <div className="d-flex flex-wrap gap-3 mt-4">
                <Link to="/browsepets" className="btn btn-home-primary">
                  Explore Pets
                  <i className="bi bi-arrow-right ms-2"></i>
                </Link>

                <Link to="/report-rescue" className="btn btn-home-outline">
                  <i className="bi bi-heart-pulse me-2"></i>
                  Report an Animal
                </Link>
              </div>

              <div className="hero-note mt-4">
                <i className="bi bi-heart-fill me-2"></i>
                Adopt. Rescue. Make a difference.
              </div>
            </div>

            <div className="col-lg-6">
              <div className="hero-image-wrapper">
                <img
                  src="https://images.unsplash.com/photo-1450778869180-41d0601e046e?w=1000"
                  alt="Happy dogs enjoying time outdoors"
                  className="hero-image"
                />

                <div className="hero-floating-card">
                  <div className="floating-icon">
                    <i className="bi bi-house-heart-fill"></i>
                  </div>
                  <div>
                    <strong>Love starts here</strong>
                    <p className="mb-0">Your next best friend awaits.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="impact-section">
        <div className="container">
          <div className="row text-center g-4">
            <div className="col-4">
              <i className="bi bi-heart-fill impact-icon"></i>
              <h3>Adopt</h3>
              <p>Find loving companions</p>
            </div>

            <div className="col-4">
              <i className="bi bi-house-fill impact-icon"></i>
              <h3>Rescue</h3>
              <p>Help animals in need</p>
            </div>

            <div className="col-4">
              <i className="bi bi-people-fill impact-icon"></i>
              <h3>Connect</h3>
              <p>Support animal welfare</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Pets */}
      <section className="featured-section py-5">
        <div className="container">
          <div className="section-heading text-center mb-5">
            <span className="section-label">MEET YOUR NEW BEST FRIEND</span>
            <h2>Pets Looking for Love</h2>
            <p>
              These adorable companions are waiting to become part of
              your family.
            </p>
          </div>

          <div className="row g-4">
            {featuredPets.map((pet) => (
              <div className="col-md-6 col-lg-4" key={pet.id}>
                <div className="pet-card h-100">
                  <div className="pet-image-wrapper">
                    <img
                      src={pet.image}
                      alt={pet.name}
                      className="pet-image"
                    />
                    <span className="pet-type">{pet.type}</span>
                  </div>

                  <div className="pet-card-body">
                    <div className="d-flex justify-content-between align-items-center">
                      <h4>{pet.name}</h4>
                      <i className="bi bi-heart pet-heart"></i>
                    </div>

                    <p className="pet-details">
                      <i className="bi bi-calendar3 me-2"></i>
                      {pet.age}
                    </p>

                    <p className="pet-details">
                      <i className="bi bi-geo-alt me-2"></i>
                      {pet.location}
                    </p>

                    <Link
                      to="/browsepets"
                      className="btn btn-pet w-100"
                    >
                      Meet {pet.name}
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-5">
            <Link to="/browsepets" className="btn btn-home-primary">
              View All Pets
              <i className="bi bi-arrow-right ms-2"></i>
            </Link>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="how-section py-5">
        <div className="container">
          <div className="section-heading text-center mb-5">
            <span className="section-label">YOUR JOURNEY STARTS HERE</span>
            <h2>How TailBridge Works</h2>
            <p>Three simple steps towards a lifelong friendship.</p>
          </div>

          <div className="row g-4">
            {steps.map((step, index) => (
              <div className="col-md-4" key={step.title}>
                <div className="step-card text-center h-100">
                  <div className="step-number">{index + 1}</div>
                  <div className="step-icon">
                    <i className={`bi ${step.icon}`}></i>
                  </div>
                  <h4>{step.title}</h4>
                  <p>{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Rescue Banner */}
      <section className="rescue-section py-5">
        <div className="container">
          <div className="rescue-banner">
            <div className="row align-items-center g-4">
              <div className="col-lg-8">
                <span className="rescue-label">
                  <i className="bi bi-heart-pulse-fill me-2"></i>
                  BE THEIR HELPING HAND
                </span>

                <h2>See an animal in need?</h2>

                <p>
                  Report a stray, injured, or abandoned animal and help
                  connect them with people who can provide assistance.
                </p>
              </div>

              <div className="col-lg-4 text-lg-end">
                <Link to="/report-rescue" className="btn btn-rescue">
                  Report an Animal
                  <i className="bi bi-arrow-right ms-2"></i>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partner CTA */}
      <section className="partner-section py-5">
        <div className="container text-center">
          <i className="bi bi-houses-fill partner-icon"></i>
          <h2>Are you an NGO or Animal Shelter?</h2>
          <p>
            Join TailBridge to connect animals with adopters and
            coordinate rescue activities.
          </p>
          <Link to="/ngo-registration" className="btn btn-home-primary">
            Become a Partner
          </Link>
        </div>
      </section>
    </div>
  );
}

export default Home;
