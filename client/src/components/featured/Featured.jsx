import React, { useState } from "react";
import "./Featured.scss";
import { useNavigate } from "react-router-dom";

function Featured() {
  const [input, setInput] = useState("");
  const navigate = useNavigate();

  const handleSubmit = () => {
    if (input.trim() !== "") {
      navigate(`/gigs?search=${encodeURIComponent(input)}`);
    }
  };

  return (
    <div className="featured">
      <div className="container">
        <div className="left">
          <h1>Connect. Collaborate. Create.</h1>
          <h3>
            Your <i>Freelancing</i> Journey Starts Here.
          </h3>
          <div className="search">
            <div className="searchInput">
              <img src="./img/search.png" alt="" />
              <input
                type="text"
                placeholder="Search for your gig"
                onChange={(e) => setInput(e.target.value)}
              />
            </div>
            <button onClick={handleSubmit}>Search</button>
          </div>
          <div className="popular">
            <span>Popular:</span>
            <button onClick={() => navigate("/gigs?search=Web%20Design")}>
              Web Design
            </button>
            <button onClick={() => navigate("/gigs?search=WordPress")}>
              WordPress
            </button>
            <button onClick={() => navigate("/gigs?search=Logo%20Design")}>
              Logo Design
            </button>
            <button onClick={() => navigate("/gigs?search=AI%20Services")}>
              AI Services
            </button>
          </div>
        </div>
        <div className="right">
          <img src="./img/unnamed.png" alt="" />
        </div>
      </div>
    </div>
  );
}

export default Featured;
