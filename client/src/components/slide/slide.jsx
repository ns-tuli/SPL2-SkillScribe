import React from "react";
import "./Slide.scss";
import Slider from "infinite-react-carousel";
import CatCard from "../catCard/CatCard";
import { cards } from "../../data.js";

const Slide = ({ slidesToShow, arrowsScroll }) => {
  return (
    <div className="slide">
      <Slider dots slidesToShow={slidesToShow} arrowsScroll={arrowsScroll}>
        {cards.map((card) => (
          <CatCard key={card.id} card={card} />
        ))}
      </Slider>
    </div>
  );
};
export default Slide;
