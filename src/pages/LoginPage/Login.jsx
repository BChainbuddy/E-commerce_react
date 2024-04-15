import { Link, useNavigate } from "react-router-dom";
import "../../style/Login.css";
import { useState } from "react";
import { login } from "../../api";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [shownPassword, setShownPassword] = useState("");
  const [error, setError] = useState("");

  // Border animation
  const [input1Focus, setInput1Focus] = useState(false);
  const [input2Focus, setInput2Focus] = useState(false);

  const navigate = useNavigate();

  const handlePassword = (e) => {
    setPassword(e.target.value);
    // let starredPassword = "";
    // let userInput = e.target.value;
    // for (let i = 0; userInput.length > i; i++) {
    //   if (i === userInput.length - 1) {
    //     starredPassword = starredPassword + userInput[i];
    //   } else {
    //     starredPassword = starredPassword + "*";
    //   }
    // }
    // setShownPassword(starredPassword);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(password);
    let userData = {
      username: username,
      password: password,
    };
    try {
      const response = await login(userData);

      if (!response.ok) {
        setError("Username and password don't match!");
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      console.log("Success:", data);
      navigate("/products");
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <section id="userContainer">
      <form id="loginContainer" onSubmit={handleSubmit}>
        <p
          id="loginTitle"
          style={{ textAlign: "center", marginTop: "30px", fontSize: "25px" }}
        >
          Login to your account
        </p>
        <div id="usernameContainer">
          <p
            className="title"
            style={{
              margin: "40px auto 0 auto",
              borderBottom: input1Focus
                ? "1px solid #22d1dc"
                : "1px solid #FFFFFF",
            }}
          >
            Username
          </p>
          <input
            onFocus={() => {
              setInput1Focus(true);
            }}
            onBlur={() => {
              setInput1Focus(false);
            }}
            style={{
              marginTop: "7px",
              borderRadius: "3px",
              border: "none",
              padding: "2px",
            }}
            className="dataInput"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div id="passwordContainer">
          <p
            className="title"
            style={{
              margin: "15px auto 0 auto",
              borderBottom: input2Focus
                ? "1px solid #22d1dc"
                : "1px solid #FFFFFF",
            }}
          >
            Password
          </p>
          <input
            onFocus={() => {
              setInput2Focus(true);
            }}
            onBlur={() => {
              setInput2Focus(false);
            }}
            style={{
              marginTop: "7px",
              borderRadius: "3px",
              border: "none",
              padding: "2px",
            }}
            className="dataInput"
            value={password}
            onChange={handlePassword}
            required
          />
        </div>
        <div
          style={{
            textAlign: "center",
            height: "20px",
            fontSize: "12px",
            color: "red",
          }}
        >
          <p>{error}</p>
        </div>
        <input
          type="submit"
          style={{
            height: "25px",
            width: "120px",
            background: password && username ? "#22d1dc" : "#486470",
            outline: "none",
            borderRadius: "8px",
            border: "0",
            cursor: password && username ? "pointer" : "auto",
            transition: "background 500ms ease-in",
            color: "black",
          }}
          value={"LOGIN"}
          disabled={!password || !username}
        ></input>
        <p style={{ marginTop: "10px", marginBottom: "30px" }}>
          Don't have an account?
          <Link to="/register" style={{ marginLeft: "5px" }}>
            Sign up here
          </Link>
        </p>
      </form>
    </section>
  );
}
