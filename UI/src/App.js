import React from "react";
import "./styles.css";
import Rating from "./Rating";
import { BrowserRouter, Route } from "react-router-dom";
import Login from "./Login";
import LeaderBoard from "./LeaderBoard";

export default function App() {
  return (
    <section className="section">
      <div className="container">
        <div className="columns is-mobile is-centered">
          <div className="column is-half is-centered">
            <div
              className="message is-dark is-centered"
              style={styles.cardHeight}
            >
              <div className="message-header">
                <p>Tomato Rating App</p>
              </div>
              <div className="message-body">
                <div className="columns is-centered">
                  <BrowserRouter>
                    <Route
                      exact
                      path="/"
                      render={props => <Login {...props} />}
                    />
                    <Route
                      path="/login"
                      render={props => <Login {...props} />}
                    />
                    <Route
                      path="/rating"
                      render={props => <Rating {...props} />}
                    />
                    <Route
                      path="/leaderboard"
                      render={props => <LeaderBoard {...props} />}
                    />
                  </BrowserRouter>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

const styles = {
  cardHeight: {
    minHeight: "500px"
  }
};
