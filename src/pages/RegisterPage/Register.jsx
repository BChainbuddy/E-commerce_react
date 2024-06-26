import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../../style/Login.css";
import { register } from "../../api";

export default function Register() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  // Border animation

  const [input1Focus, setInput1Focus] = useState(false);
  const [input2Focus, setInput2Focus] = useState(false);
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    let userData = {
      username: username,
      password: password,
    };
    try {
      const response = await register(userData);

      if (!response.ok) {
        if (response.status === 400) {
          setError("Account with username already exists!");
        }
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      console.log("Success:", data);
      navigate("/login");
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
            fontSize: "12px",
            color: "red",
          }}
        >
          <p>{error}</p>
        </div>
        <input
          type="submit"
          className={`loginPageButton ${
            password && username ? "loginPageButtonAfter" : ""
          }`}
          value={"REGISTER"}
          disabled={!password || !username}
        ></input>
        <p style={{ marginTop: "10px", marginBottom: "0px" }}>
          Already have an account?
          <Link to="/login" style={{ marginLeft: "5px" }}>
            Login here
          </Link>
        </p>
        <a href="http://localhost:8001/auth/google">
          <div id="gmailLoginContainer">
            <p style={{ marginRight: "2px", textDecoration: "underline" }}>
              Login with Google account
            </p>
            <img
              width={30}
              height={30}
              src="data:image/png;base64,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"
              alt="GmailLogo"
            />
          </div>
        </a>
      </form>
    </section>
  );
}
