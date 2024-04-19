import { useNavigate } from "react-router-dom";
import "./../style/Header.css";
import { useState } from "react";
import { getUser, logout } from "../api";

export default function Header({ loggedIn }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [user, setUser] = useState("");

  const navigate = useNavigate();

  const toCart = () => {
    navigate("/cart");
  };

  const handleMenuOpen = () => {
    if (menuOpen) {
      setMenuOpen(false);
      setTimeout(() => {
        setUser("");
      }, 300);
    } else {
      setMenuOpen(true);
      handleUser();
    }
  };

  const handleUser = async () => {
    const response = await getUser();
    if (!response.error) {
      setUser(response.user);
    }
  };

  const handleButton = async () => {
    if (user) {
      const response = await logout();
      if (response) {
        navigate("/");
        setUser("");
      }
    } else {
      navigate("/login");
    }
  };

  return (
    <>
      <div id="header">
        <div id="menuButton" onClick={handleMenuOpen}>
          MENU
        </div>
        <p id="name">BE-BETTER</p>
        <p className="cart" onClick={toCart}>
          CART
        </p>
      </div>
      <div className={`menu ${menuOpen ? "menuOpen" : ""}`}>
        <p style={{ color: "#22d1dc" }}>What do you want to see?</p>
        <p
          className="menuItem"
          onClick={() => {
            navigate("/");
          }}
        >
          Home
        </p>
        <p
          className="menuItem"
          onClick={() => {
            navigate("/products");
          }}
        >
          Products
        </p>
        <p
          className="menuItem"
          onClick={() => {
            navigate("/user");
          }}
          style={{ marginBottom: "30px" }}
        >
          User profile
        </p>
        <p
          className="menuItem"
          onClick={() => {
            navigate("/register");
          }}
          style={{ marginBottom: "30px" }}
        >
          Register
        </p>
        <button
          className="loginMenuButton"
          onClick={handleButton}
          style={{ marginBottom: "30px" }}
        >
          {user ? "LOGOUT" : "LOGIN"}
        </button>
      </div>
    </>
  );
}
