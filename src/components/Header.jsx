import { useNavigate } from "react-router-dom";
import "./../style/Header.css";
import { useState } from "react";

export default function Header({ loggedIn }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const navigate = useNavigate();

  const toCart = () => {
    navigate("/cart");
  };

  const handleMenuOpen = () => {
    if (menuOpen) {
      setMenuOpen(false);
    } else {
      setMenuOpen(true);
    }
  };

  return (
    <>
      <div id="header">
        <div id="menuButton" onClick={handleMenuOpen}>
          MENU
        </div>
        <p id="name">BE-BETTER</p>
        <p id="cart" onClick={toCart}>
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
            navigate("/about");
          }}
          style={{ marginBottom: "30px" }}
        >
          About us
        </p>
      </div>
    </>
  );
}
