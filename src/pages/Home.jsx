import { Router, useNavigate } from "react-router-dom";
import "../App.css";

const HomePage = () => {
  const navigate = useNavigate();
  return (
    <div className="home-page">
      <div className="hero">
        <div className="hero-content">
          <h1 className="hero-title">Isaac Bicycle Workshop</h1>
          <button onClick={() => navigate("/shop")} className="hero-button">
            EXPLORE OUR SHOP
          </button>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
