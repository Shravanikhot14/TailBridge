import React, { useContext, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import pets from "../data/petsData";
import { FavouritesContext } from "../FavouritesContext";

function BrowsePets() {
  const navigate = useNavigate();

  
const {
  toggleFavourite,
  isFavourite,
} = useContext(FavouritesContext);


  const [search, setSearch] = useState("");
  const [selectedType, setSelectedType] = useState("All");

  const filteredPets = useMemo(() => {
    return pets.filter((pet) => {
      const matchesType =
        selectedType === "All" || pet.type === selectedType;

      const searchText =
        `${pet.name} ${pet.type} ${pet.breed} ${pet.location}`.toLowerCase();

      const matchesSearch = searchText.includes(search.toLowerCase());

      return matchesType && matchesSearch;
    });
  }, [search, selectedType]);

  return (
    <div className="browse-page">
      {/* Hero Section */}
      <section className="browse-hero">
        <div className="container">
          <span className="browse-eyebrow">
            <i className="bi bi-heart-fill me-2"></i>
            FIND YOUR NEW BEST FRIEND
          </span>

          <h1>
            A little love can
            <br />
            <span>change everything.</span>
          </h1>

          <p>
            Meet wonderful animals waiting for a safe home,
            a caring family, and a second chance at happiness.
          </p>

          <div className="browse-search">
            <i className="bi bi-search"></i>

            <input
              type="text"
              placeholder="Search by name, breed or location..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              aria-label="Search pets"
            />

            {search && (
              <button
                type="button"
                className="search-clear"
                onClick={() => setSearch("")}
                aria-label="Clear search"
              >
                <i className="bi bi-x-lg"></i>
              </button>
            )}
          </div>
        </div>
      </section>

      {/* Pets Section */}
      <section className="container browse-content">
        <div className="browse-heading">
          <div>
            <span className="section-eyebrow">MEET YOUR COMPANION</span>
            <h2>Pets looking for a home</h2>
            <p>Every little paw deserves a place to belong.</p>
          </div>

          <span className="pet-count">
            {filteredPets.length}{" "}
            {filteredPets.length === 1 ? "pet" : "pets"} found
          </span>
        </div>

        {/* Category Filters */}
        <div className="pet-filters">
          {["All", "Dog", "Cat", "Rabbit"].map((type) => (
            <button
              key={type}
              type="button"
              className={`pet-filter ${
                selectedType === type ? "active" : ""
              }`}
              onClick={() => setSelectedType(type)}
            >
              {type === "All" && <i className="bi bi-grid me-2"></i>}
              {type === "Dog" && <i className="bi bi-heart me-2"></i>}
              {type === "Cat" && <i className="bi bi-stars me-2"></i>}
              {type === "Rabbit" && (
                <i className="bi bi-flower1 me-2"></i>
              )}
              {type === "All" ? "All Pets" : `${type}s`}
            </button>
          ))}
        </div>

        {/* Pet Cards */}
        <div className="row g-4">
          {filteredPets.map((pet) => (
            <div className="col-sm-6 col-lg-4" key={pet.id}>
              <article className="pet-list-card">
                <div
                  className="pet-list-image"
                  onClick={() => navigate(`/pets/${pet.id}`)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === "Enter") {
                      navigate(`/pets/${pet.id}`);
                    }
                  }}
                  aria-label={`View details for ${pet.name}`}
                >
                  <img src={pet.image} alt={pet.name} loading="lazy" />

                  <span className="pet-type-badge">
                    {pet.type}
                  </span>

                  
<button
  type="button"
  className="pet-image-heart"
  onClick={(e) => {
    e.stopPropagation();
    toggleFavourite(pet.id);
  }}
  aria-label={
    isFavourite(pet.id)
      ? `Remove ${pet.name} from favourites`
      : `Add ${pet.name} to favourites`
  }
>
  <i
    className={
      isFavourite(pet.id)
        ? "bi bi-heart-fill"
        : "bi bi-heart"
    }
  ></i>
</button>



                </div>

                <div className="pet-list-body">
                  <div className="d-flex justify-content-between align-items-start gap-2">
                    <div>
                      <h3>{pet.name}</h3>
                      <p className="pet-breed">{pet.breed}</p>
                    </div>

                    <span className="pet-gender">
                      <i className="bi bi-gender-ambiguous me-1"></i>
                      {pet.gender}
                    </span>
                  </div>

                  <div className="pet-meta">
                    <span>
                      <i className="bi bi-calendar3"></i>
                      {pet.age}
                    </span>

                    <span>
                      <i className="bi bi-geo-alt"></i>
                      {pet.location}
                    </span>
                  </div>

                  <p className="pet-description">
                    {pet.description}
                  </p>

                  <button
                    type="button"
                    className="btn pet-details-btn w-100"
                    onClick={() => navigate(`/pets/${pet.id}`)}
                  >
                    Meet {pet.name}
                    <i className="bi bi-arrow-right ms-2"></i>
                  </button>
                </div>
              </article>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredPets.length === 0 && (
          <div className="pet-empty-state">
            <i className="bi bi-search"></i>
            <h3>No pets found</h3>
            <p>Try another name, breed, location or category.</p>

            <button
              className="btn pet-details-btn"
              onClick={() => {
                setSearch("");
                setSelectedType("All");
              }}
            >
              Show all pets
            </button>
          </div>
        )}
      </section>

      {/* Bottom Banner */}
      <section className="browse-bottom-banner">
        <div className="container d-flex flex-column flex-md-row align-items-center justify-content-between gap-3">
          <div>
            <h2>Can't adopt right now?</h2>
            <p>
              You can still make a difference by helping an animal in need.
            </p>
          </div>

          <button
            className="btn rescue-banner-btn"
            onClick={() => navigate("/report-rescue")}
          >
            <i className="bi bi-heart-pulse me-2"></i>
            Report an Animal
          </button>
        </div>
      </section>
    </div>
  );
}

export default BrowsePets;
