import { useState } from "react";

// Styles
import "./styles/styles.css";

// Images
import {
  banner,
  star,
  favorite,
  search,
  previous,
  next,
  location,
  expand,
  person,
  calendar,
  notification,
} from "../../DB/Images";
import { trendingDestinations, rooms } from "../../DB/DB";

const HomeContent = () => {
  const [counter, setCounter] = useState(3);

  return (
    <div className="content">
      {/* Search and Notifications */}
      <section className="sections search_notification">
        <div className="form_group">
          <img src={search} alt="search icon" />
          <input placeholder="Search any thing...." />
        </div>
        <div className="notification">
          <p className="notification_date">
            <span className="notification_date__day">
              Saturday, may 3, 2023
            </span>
            <span className="notification_date__counter">{counter}</span>
            <img src={notification} className="notification_date__bell" />
          </p>
        </div>
      </section>

      {/* Banner */}
      <section className="sections top_banner">
        <img
          src={banner}
          alt="Banner Image"
          className="top_banner__bannerImage"
        />
        <div className="top_banner__booking">
          <div className="top_banner__booking___form____group">
            <img src={location} alt="location icon" />
            <input placeholder="Where Are You Going?" />
            <img src={expand} alt="expand icon" />
          </div>
          <div className="top_banner__booking___form____group">
            <img src={calendar} alt="check-in icon" />
            <input type="date" placeholder="Check-in Date" />
            <img src={expand} alt="expand icon" />
          </div>
          <div className="top_banner__booking___form____group">
            <img src={person} alt="search icon" />
            <input placeholder="3 Adults" />
            <img src={expand} alt="expand icon" />
          </div>

          <button type="submit">Search</button>
        </div>
      </section>

      {/* Trending Destinations */}
      <section className="sections trending_destination">
        <div className="trending_destination__container">
          <div className="headers trending_destination__header">
            <h2>Trending Destinations</h2>
            <div className="trending_destination__header___actions">
              <img src={previous} alt="prev" />
              <img src={next} alt="next" />
            </div>
          </div>
          <div className="trending_destination__wrapper">
            <div className="trending_destination__wrapper___content">
              {trendingDestinations.map(
                ({ image, name, rating, description, amount }, idx) => {
                  return (
                    <div
                      key={`${name}-${idx}`}
                      className="trending_destination__wrapper___content____card"
                    >
                      <img className="destination" src={image} alt={name} />
                      <div className="trending_destination__wrapper___content____card_____detail">
                        <div className="name_rating">
                          <h2 className="name">{name}</h2>
                          <p className="rating">
                            <img src={star} className="star" /> {rating}/5{" "}
                          </p>
                        </div>
                        <p className="description">{description}</p>
                        <p className="amount">${amount}</p>
                      </div>
                    </div>
                  );
                }
              )}
            </div>
            <div className="trending_destination__wrapper___pagination">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
        </div>
      </section>

      {/* Best Offers */}
      <section className="sections best_offer">
        <div className="best_offer__container">
          <div className="headers best_offer__header">
            <h2>Best Offers</h2>
            <div className="best_offer__header___actions">
              {" "}
              <a href="/">View All</a>
            </div>
          </div>
          <div className="best_offer__content">
            {rooms.map(
              ({ image, name, location: des_location, amount }, idx) => {
                return (
                  <div
                    key={`${name}-${idx}`}
                    className="best_offer__content___card"
                  >
                    <img className="apartment" src={image} alt={name} />
                    <div className="best_offer__content___detail">
                      <p className="apartment_name">{name}</p>
                      <p className="apartment_location">
                        <img src={location} className="location_icon" />
                        <span>{des_location}</span>
                      </p>
                      <div className="apartment_amount__favorite">
                        <p className="amount">
                          ${amount} <span>/ night</span>
                        </p>
                        <img src={favorite} className="favorite_icon" />
                      </div>
                    </div>
                  </div>
                );
              }
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomeContent;
