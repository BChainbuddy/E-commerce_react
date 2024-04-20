import { useNavigate, useParams } from "react-router-dom";
import ProductPictures from "./components/ProductPictures";
import { useEffect, useState } from "react";
import ProductInfo from "./components/ProductInfo";
import "../../style/Product.css";
import { addToCart, getProductById } from "../../api";
import Loader from "../../components/Loader";

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

  const handleAddToCart = async () => {
    const itemData = {
      itemId: product.id,
      quantity: Number(quantity),
    };
    const response = await addToCart(itemData);
    if (!response) {
      navigate("login");
    }
  };

  return (
    <>
      {product ? (
        <div id="productPageContainer">
          <div
            id="goBack"
            style={{
              color: "white",
              cursor: "pointer",
              marginTop: "30px",
              marginLeft: "40px",
              width: "fit-content",
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
              <button id="addToCartButton" onClick={handleAddToCart}>
                Add to cart
              </button>
            </div>
          </div>
        </div>
      ) : (
        <Loader />
      )}
    </>
  );
}
