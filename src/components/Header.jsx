import "./../style/Header.css";

export default function Header({ loggedIn }) {
  return (
    <div id="header">
      <div id="menu">MENU</div>
      <p id="name">E-COMMERCE</p>
      <p id="cart">CART</p>
    </div>
  );
}
