import { useState } from "react";
import { Link } from "react-router-dom";
import "../../style/Register.css";
import { register } from "../../api";

export default function Register() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  // Border animation
  const [input1Focus, setInput1Focus] = useState(false);
  const [input2Focus, setInput2Focus] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    let userData = {
      username: username,
      password: password,
    };
    try {
      const response = await register(userData);

      if (!response.ok) {
        if (response.status === 404) {
          setError("Account with username already exists!");
        }
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      console.log("Success:", data);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <section id="userContainer">
      <form id="loginContainer" method="POST" onSubmit={handleSubmit}>
        <p
          id="loginTitle"
          style={{
            textAlign: "center",
            marginTop: "30px",
            fontSize: "25px",
          }}
        >
          Register to our website
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
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div
          style={{
            textAlign: "center",
            height: "20px",
            fontSize: "14px",
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
          value={"REGISTER"}
          disabled={!password || !username}
        ></input>
        <p style={{ marginTop: "10px", marginBottom: "30px" }}>
          Already have an account?
          <Link to="/login" style={{ marginLeft: "5px" }}>
            Login here
          </Link>
        </p>
      </form>
    </section>
  );
}
