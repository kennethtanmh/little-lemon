import { useEffect, useState } from "react";
import logo from "../../img/Logo.svg";
import { useNavigate, Link } from "react-router-dom";
import "./styles.css";

const BookingConfirmation = () => {
  const [bookingDetails, setBookingDetails] = useState("");

  useEffect(() => {
    const data = localStorage.getItem("formData");
    if (data !== null) setBookingDetails(JSON.parse(data));
  }, []);

  const navigate = useNavigate();

  const handleLogoClick = () => {
    navigate("/");
  };

  return (
    <section className="booking-confirmation">
      <nav className="navbar">
        <ul className="navbar-links">
          <li className="navbar-logo">
            <Link to="/" onClick={handleLogoClick}>
              <img src={logo} alt="Little Lemon Logo" />
            </Link>
          </li>
        </ul>
      </nav>
      <div className="confirmation-container">
        <div className="confirmation-heading">
          <h1>Your reservation at Little Lemon is confirmed!</h1>
        </div>
        <div className="confirmation-card">
          <div className="confirmation-details">
            Name: {bookingDetails.name}
          </div>
          <div className="confirmation-details">
            Email: {bookingDetails.email}
          </div>
          <div className="confirmation-details">
            Date: {bookingDetails.date}
          </div>
          <div className="confirmation-details">
            Time: {bookingDetails.time}
          </div>
          <div className="confirmation-details">
            Guest: {bookingDetails.guests}
          </div>
          <div className="confirmation-details">
            Occasion: {bookingDetails.occasion}
          </div>
          <Link to="/" onClick={handleLogoClick}>
            <button className="confirmation-button">Home Page</button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default BookingConfirmation;
