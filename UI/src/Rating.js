import React, { useState, useEffect } from "react";
import StarRatings from "react-star-ratings";
import axios from "axios";
import api from "./api.json";

const Rating = props => {
  const [rest, setRest] = useState([]);
  const [currentIndex, setIndex] = useState(0);
  const [rating, setRating] = useState(0);
  const [isLoading, setLoading] = useState(false);
  useEffect(() => {
    axios
      .get(api.allResturant)
      .then(res => {
        if (res.data.statusCode === 200) {
          setRest(res.data.response);
        }
      })
      .catch(err => console.log(err));
  }, []);

  const saveRating = () => {
    setLoading(true);
    if (currentIndex < rest.length - 1) {
      axios
        .post(api.saveRating, {
          restaurant_name: rest[currentIndex].restaurant_name,
          restaurant_id: rest[currentIndex].restaurant_name,
          user_id: "98789",
          rating: rating
        })
        .then(res => {
          setRating(0);
          setLoading(false);
          setIndex(currentIndex + 1);
        });
    } else {
      props.history.push("/leaderboard");
    }
  };

  if (rest.length) {
    return (
      <div>
        <div className="title has-text-centered">
          {rest[currentIndex].restaurant_name}
        </div>
        <StarRatings
          rating={rating}
          starRatedColor="blue"
          changeRating={event => {
            setRating(event);
          }}
          numberOfStars={5}
          name="rating"
        />
        <br />
        <br />
        <br />
        <div className="buttons is-centered">
          <button
            className={`button is-primary ${isLoading ? "is-loading" : ""}`}
            onClick={() => {
              saveRating();
            }}
            disabled={isLoading}
          >
            Save
          </button>
        </div>
      </div>
    );
  } else {
    return (
      <div className="pageloader is-right-to-left">
        <span className="title">Loading...</span>
      </div>
    );
  }
};

export default Rating;
