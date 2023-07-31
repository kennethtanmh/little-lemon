import React, { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import logo from "../../img/Logo.svg";
import "./styles.css";

const BookingForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    date: "",
    time: "10:00 AM",
    guests: "2",
    occasion: "Birthday",
  });

  const availableTimes = [
    "10:00 AM",
    "12:00 PM",
    "2:00 PM",
    "6:00 PM",
    "7:15 PM",
    "8:00 PM",
  ];

  const availableOccasions = [
    "Anniversary",
    "Birthday",
    "Engagement",
    "Wedding",
    "None",
  ];

  const navigate = useNavigate();

  useEffect(() => {
    localStorage.setItem("formData", JSON.stringify(formData));
  }, [formData]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      formData.name &&
      formData.email &&
      formData.date &&
      formData.time &&
      formData.guests !== ""
    ) {
      navigate("/confirmation");

      console.log(`
      Name : ${formData.name}
      Email: ${formData.email}
      Date: ${formData.date},
      Time: ${formData.time},
      Number of Guests: ${formData.guests},
      Occasion: ${formData.occasion}`);

      setFormData({
        name: "",
        email: "",
        date: "",
        time: "17:00",
        guests: "",
        occasion: "Birthday",
      });
    } else {
      console.log("THERE IS AN ERROR SUBMITTING YOUR FORM");
    }
  };

  const handleLogoClick = () => {
    navigate("/");
  };

  const handlePreviousPageClick = () => {
    navigate(-1);
  };

  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  return (
    <section className="bookingform">
      <nav className="navbar">
        <ul className="navbar-links">
          <li className="navbar-logo">
            <Link to="/" onClick={handleLogoClick}>
              <img src={logo} alt="Little Lemon Logo" />
            </Link>
          </li>
        </ul>
      </nav>
      <div className="booking-container">
        <div className="booking-headings">
          <h1 className="subheading">Make a reservation</h1>
          <h2 className="subheading-2">
            Input your details and we’ll try get the best seats for you!
          </h2>
        </div>
        <form onSubmit={handleSubmit} className="form-container">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            required
            onChange={(e) =>
              setFormData({
                ...formData,
                name: capitalizeFirstLetter(e.target.value),
              })
            }
          />

          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            required
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
          />

          <label htmlFor="date">Date:</label>
          <input
            type="date"
            id="date"
            name="date"
            value={formData.date}
            required
            min={new Date().toISOString().split("T")[0]}
            onChange={(e) => setFormData({ ...formData, date: e.target.value })}
          />

          <label htmlFor="time">Time:</label>
          <select
            id="time"
            name="time"
            value={formData.time}
            required
            onChange={(e) => setFormData({ ...formData, time: e.target.value })}
          >
            {availableTimes.map((timeOption, index) => (
              <option key={index} value={timeOption}>
                {timeOption}
              </option>
            ))}
          </select>

          <label htmlFor="guests">Number of guests: Max 10</label>
          <input
            type="number"
            id="guests"
            name="guests"
            value={formData.guests}
            required
            min="0"
            max="10"
            onChange={(e) =>
              setFormData({ ...formData, guests: e.target.value })
            }
          />

          <label htmlFor="occasion">Occasion:</label>
          <select
            id="occasion"
            name="occasion"
            value={formData.occasion}
            required
            onChange={(e) =>
              setFormData({ ...formData, occasion: e.target.value })
            }
          >
            {availableOccasions.map((occasionOption, index) => (
              <option key={index} value={occasionOption}>
                {occasionOption}
              </option>
            ))}
          </select>

          <div className="button-container">
            <button onClick={handlePreviousPageClick} className="page-button">
              Previous Page
            </button>
            <button className="submit-button" type="submit">
              Submit
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default BookingForm;
