import { useNavigate } from "react-router-dom";
import CartList from "./components/CartList";
import "../../style/CartPage.css";
import { useEffect, useState } from "react";
import { getCart } from "../../api";

export default function CartPage() {
  const [cart, setCart] = useState("");
  const [cartValue, setCartValue] = useState(0);

  const navigate = useNavigate();

  const fetchCart = async () => {
    setCart(await getCart());
  };

  const getCartValue = () => {
    let sum = 0;
    for (let i = 0; i < cart.length; i++) {
      sum += cart[i].newprice.replace("$", "") * cart[i].quantity;
    }
    setCartValue(sum);
  };

  useEffect(() => {
    fetchCart();
  }, []);

  useEffect(() => {
    if (cart.length > 0) {
      getCartValue();
    } else {
      setCartValue(0);
    }
  }, [cart]);

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
          width: "fit-content",
        }}
      >
        <div onClick={() => navigate(-1)}>GO BACK</div>
      </div>
      <div id="cartContainer">
        <CartList products={cart} updateCart={fetchCart} />
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
            <span style={{ marginRight: "2px" }}>{cartValue}</span>$
          </p>
          <button id="proceedButton">PROCEED TO CHECKOUT</button>
        </div>
      </div>
    </div>
  );
}
