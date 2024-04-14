import { useNavigate } from "react-router-dom";
import "./../style/Header.css";

export default function Header({ loggedIn }) {
  const navigate = useNavigate();

  const toCart = () => {
    navigate("/cart");
  };

  return (
    <div id="header">
      <div id="menu">MENU</div>
      <p id="name">BE-BETTER</p>
      <p id="cart" onClick={toCart}>
        CART
      </p>
    </div>
  );
}
