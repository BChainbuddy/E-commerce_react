import { useNavigate, useParams } from "react-router-dom";
import ProductPictures from "./components/ProductPictures";
import { useState } from "react";
import ProductInfo from "./components/ProductInfo";
import "../../style/Product.css";

export default function ProductPage() {
  // Get item attributes of an item with id
  const navigate = useNavigate();
  const [product, setProduct] = useState(["Yes"]);
  const [quantity, setQuantity] = useState(1);

  const { id } = useParams();
  // Call async function to get attributes
  // If id doesnt exist -> item not found

  return (
    <div id="productPageContainer">
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
      <div id="productPartContainer">
        <ProductPictures pictures={product} />
        <div>
          <ProductInfo product={product} />
          <div>
            <p>Quantity:</p>
            <input
              value={quantity}
              type="number"
              onChange={(e) => {
                setQuantity(e.target.value);
              }}
              min={0}
            />
          </div>
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
            }}
          >
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
}
