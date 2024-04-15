import { useNavigate } from "react-router-dom";
import CartItem from "./CartItem";
import "../../../style/CartItem.css";
import { clearCart } from "../../../api";

export default function CartList({ products, updateCart }) {
  const navigate = useNavigate();

  const handleClearCart = async () => {
    await clearCart();
    updateCart();
  };

  return (
    <div style={{ height: "100%", width: "600px" }}>
      <p style={{ fontSize: "30px", color: "white" }}>Cart</p>
      {products.length > 0 ? (
        <div>
          {products.map((element) => (
            <CartItem item={element} updateCart={updateCart} key={element.id} />
          ))}
          <div id="clearCart" onClick={handleClearCart}>
            Clear cart
          </div>
        </div>
      ) : (
        <p style={{ marginTop: "50px", color: "white" }}>
          No items currently selected in the cart.
          <span
            id="navigateBrowseItems"
            onClick={() => {
              navigate("/products");
            }}
          >
            Click to browse items
          </span>
        </p>
      )}
    </div>
  );
}
