import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import pets from "../data/PetsData";
import { FavouritesContext } from "../FavouritesContext";

function Favourites() {
  const navigate = useNavigate();

  const { favourites, toggleFavourite } =
    useContext(FavouritesContext);

  const favouritePets = pets.filter((pet) =>
    favourites.includes(pet.id)
  );

  return (
    <div className="favourites-page">
      <section className="favourites-hero">
        <div className="container text-center">
          <i className="bi bi-heart-fill favourites-hero-icon"></i>

          <span className="favourites-eyebrow">
            YOUR SPECIAL COMPANIONS
          </span>

          <h1>Pets You Love</h1>

          <p>
            Keep the companions you love close.
            Your favourite pets are all in one place.
          </p>

          <span className="favourites-count">
            {favouritePets.length}{" "}
            {favouritePets.length === 1 ? "pet" : "pets"} saved
          </span>
        </div>
      </section>

      <section className="container favourites-content">
        <div className="favourites-heading">
          <div>
            <span className="section-eyebrow">YOUR COLLECTION</span>
            <h2>My Favourites</h2>
            <p>Every favourite could be the start of a beautiful friendship.</p>
          </div>
        </div>

        {favouritePets.length > 0 ? (
          <div className="row g-4">
            {favouritePets.map((pet) => (
              <div className="col-sm-6 col-lg-4" key={pet.id}>
                <article className="pet-list-card favourite-card">
                  <div className="pet-list-image">
                    <img src={pet.image} alt={pet.name} loading="lazy" />

                    <span className="pet-type-badge">
                      {pet.type}
                    </span>

                    <button
                      type="button"
                      className="pet-image-heart"
                      onClick={() => toggleFavourite(pet.id)}
                      aria-label={`Remove ${pet.name} from favourites`}
                    >
                      <i className="bi bi-heart-fill"></i>
                    </button>
                  </div>

                  <div className="pet-list-body">
                    <h3>{pet.name}</h3>
                    <p className="pet-breed">{pet.breed}</p>

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

                    <button
                      type="button"
                      className="btn pet-details-btn w-100"
                      onClick={() => navigate(`/pets/${pet.id}`)}
                    >
                      View Details
                      <i className="bi bi-arrow-right ms-2"></i>
                    </button>
                  </div>
                </article>
              </div>
            ))}
          </div>
        ) : (
          <div className="favourites-empty">
            <div className="favourites-empty-icon">
              <i className="bi bi-heart"></i>
            </div>

            <h3>No favourites yet</h3>

            <p>
              You haven't saved any pets yet. Browse our adorable
              companions and tap the heart on a pet you love.
            </p>

            <button
              type="button"
              className="btn pet-details-btn"
              onClick={() => navigate("/browsepets")}
            >
              <i className="bi bi-search-heart me-2"></i>
              Explore Pets
            </button>
          </div>
        )}
      </section>
    </div>
  );
}

export default Favourites;
