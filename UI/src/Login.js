import React, { useState, useEffect } from "react";

const Login = props => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const checkForLogin = () => {
    if (username.trim === "" || password === "") {
      alert("Wrong username or password");
    } else {
      props.history.push("/rating");
    }
  };
  return (
    <div className="column is-7">
      <div className="field">
        <label htmlFor="userName" className=" label">
          User Name
        </label>
        <div className="control ">
          <input
            type="text"
            className="input"
            placeholder="Username"
            value={username}
            onChange={e => setUsername(e.target.value)}
          />
        </div>
      </div>
      <div className="field">
        <label htmlFor="password" className="label">
          Password
        </label>
        <input
          className="input"
          placeholder="Password"
          type="password"
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
      </div>
      <div className="buttons is-centered">
        <button
          onClick={() => {
            checkForLogin();
          }}
          className="button is-primary "
        >
          Login
        </button>
      </div>
    </div>
  );
};
export default Login;
