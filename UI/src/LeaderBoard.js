import React, { useState, useEffect } from "react";
import Axios from "axios";
import StarRatings from "react-star-ratings";
import api from "./api.json";

const LeaderBoard = () => {
  const [leader, setLeader] = useState([]);
  useEffect(() => {
    Axios.get(api.leaderBoard).then(res => {
      if (res.data.statusCode === 200) {
        setLeader(res.data.response);
      }
    });
  }, []);
  if (leader.length) {
    return (
      <div className="section">
        <span className="title has-text-centered">LeaderBoard</span>
        {leader.map(item => {
          return (
            <div className="container">
              <div key={item.restaurant_id} className="list is-hoverable">
                <div className="is-Flex list-item">
                  <span>{item.restaurant_name}</span>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  <span className="">
                    <StarRatings
                      rating={
                        item.avg_rating !== undefined ? item.avg_rating : 0
                      }
                      starRatedColor="blue"
                      numberOfStars={5}
                      starDimension="30px"
                      starSpacing="5px"
                      name="rating"
                    />
                  </span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    );
  } else {
    return <div>Loading...</div>;
  }
};

export default LeaderBoard;
