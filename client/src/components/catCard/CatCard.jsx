import React from "react";
import { Link } from "react-router-dom";
import "./CatCard.scss";
import PropTypes from "prop-types";

function CatCard({ card }) {
  return (
    <>
      <div>
        <Link to="/gigs?cat=ai">
          <div className="catCard">
            <img src={card.img} alt="" />
            <span className="desc">{card.desc}</span>
            <span className="title">{card.title}</span>
          </div>
        </Link>
      </div>
    </>
  );
}

export default CatCard;
