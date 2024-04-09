import "../../../style/CartItem.css";

export default function CartItem({ item }) {
  return (
    <div id="cartItemContainer">
      <img src="" />
      <div style={{ display: "flex", flexDirection: "column" }}>
        <p>Name</p>
        <p>Quantity</p>
      </div>
      <p>Price</p>
    </div>
  );
}
