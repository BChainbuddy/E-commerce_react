import { useNavigate, useParams } from "react-router-dom";
import ProductPictures from "./components/ProductPictures";
import { useEffect, useState } from "react";
import ProductInfo from "./components/ProductInfo";
import "../../style/Product.css";
import { getProductById } from "../../api";

export default function ProductPage() {
  // Get item attributes of an item with id
  const navigate = useNavigate();
  const [product, setProduct] = useState("");
  const [quantity, setQuantity] = useState(1);

  const { id } = useParams();

  const getItem = async () => {
    const item = (await getProductById(id))[0];
    setProduct(item);
    console.log(item);
  };
  useEffect(() => {
    getItem();
  }, []);

  return (
    <div id="productPageContainer">
      <div
        id="goBack"
        style={{
          color: "white",
          cursor: "pointer",
          marginTop: "30px",
          marginLeft: "40px",
        }}
      >
        <div onClick={() => navigate(-1)}>GO BACK</div>
      </div>
      <div id="productPartContainer">
        <ProductPictures path={product} />
        <div style={{ width: "50%" }}>
          <ProductInfo product={product} />
          <div>
            <p style={{ color: "white" }}>Quantity:</p>
            <input
              value={quantity}
              type="number"
              onChange={(e) => {
                setQuantity(e.target.value);
              }}
              min={0}
              style={{ width: "80px" }}
            />
          </div>
          <button id="addToCartButton">Add to cart</button>
        </div>
      </div>
    </div>
  );
}
