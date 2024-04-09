import { useNavigate } from "react-router-dom";
import CartList from "./components/CartList";
import "../../style/CartPage.css";

export default function CartPage() {
  const navigate = useNavigate();
  return (
    <div id="cartPageContainer">
      <div
        id="goBack"
        style={{
          marginTop: "20px",
          color: "white",
          cursor: "pointer",
          marginTop: "30px",
          marginLeft: "40px",
        }}
      >
        <div onClick={() => navigate(-1)}>GO BACK</div>
      </div>
      <div id="cartContainer">
        <CartList products={""} />
        <div
          id="checkoutPart"
          style={{
            height: "100%",
            color: "white",
            textAlign: "center",
          }}
        >
          <p
            style={{
              fontSize: "20px",
              borderBottom: "1px solid white",
              width: "120px",
            }}
          >
            Cart value
          </p>
          <p style={{ fontSize: "16px", marginTop: "5px" }}>
            <span style={{ marginRight: "2px" }}>139</span>eur
          </p>
          <button
            style={{
              padding: "10px",
              textAlign: "center",
              background: "#22d1dc",
              outline: "none",
              borderRadius: "16px",
              border: "0",
              cursor: "pointer",
              transition: "background 500ms ease-in",
              color: "black",
              fontSize: "18px",
              marginTop: "30px",
            }}
          >
            PROCEED TO CHECKOUT
          </button>
        </div>
      </div>
    </div>
  );
}
