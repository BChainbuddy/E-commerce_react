import CartItem from "./CartItem";

export default function CartList({ products }) {
  return (
    <div style={{ height: "100%" }}>
      <p style={{ fontSize: "30px", color: "white" }}>Cart</p>
      {products ? (
        products.map((element) => <CartItem item={element} />)
      ) : (
        <p>No items in the cart</p>
      )}
    </div>
  );
}
