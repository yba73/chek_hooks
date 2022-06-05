import React from "react";
import ReactStars from "react-rating-stars-component";
import "./style.css";

const MovieCard = (props) => {
  const { img, title, rating, etoile, description } = props;
  return (
    <div className="box-movie">
      <div className="movie">
        <img src={img} className="poster" alt="img" />
        <div className="movie-details">
          <div className="box">
            <h4 className="title" alt="title">
              {" "}
              {title}
            </h4>
            <p className="rating"> {rating}</p>
            <ReactStars
              edit={false}
              Count={5}
              isHalf={true}
              color="black"
              activeColor="orange"
              value={etoile}
            />
          </div>
          <div className="overview">
            <h1>description </h1>
            {description}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
