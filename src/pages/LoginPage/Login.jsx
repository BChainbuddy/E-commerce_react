import { Link } from "react-router-dom";
import "../../style/Login.css";
import { useState } from "react";

export default function Login() {
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();

  return (
    <section id="userContainer">
      <div id="loginContainer">
        <p
          id="loginTitle"
          style={{ textAlign: "center", marginTop: "30px", fontSize: "25px" }}
        >
          Login to your account
        </p>
        <div id="usernameContainer">
          <p
            className="title"
            style={{ textAlign: "center", margin: "40px auto 0 auto" }}
          >
            Username
          </p>
          <input
            style={{ marginTop: "5px" }}
            className="dataInput"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div id="passwordContainer">
          <p
            className="title"
            style={{ textAlign: "center", margin: "15px auto 0 auto" }}
          >
            Password
          </p>
          <input
            style={{ marginTop: "5px" }}
            className="dataInput"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div
          style={{
            textAlign: "center",
            height: "20px",
          }}
        >
          <p></p>
        </div>
        <button
          style={{
            height: "25px",
            width: "100px",
            background: password && username ? "#22d1dc" : "#486470",
            outline: "none",
            borderRadius: "8px",
            border: "0",
            cursor: password && username ? "pointer" : "auto",
            transition: "background 500ms ease-in",
            color: "black",
          }}
          disabled={!password || !username}
        >
          LOGIN
        </button>
        <p style={{ marginTop: "10px", marginBottom: "30px" }}>
          Don't have an account?
          <Link to="/register" style={{ marginLeft: "5px" }}>
            Sign up here
          </Link>
        </p>
      </div>
    </section>
  );
}
