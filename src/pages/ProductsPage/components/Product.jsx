import "../../../style/Products.css";
import { useNavigate } from "react-router-dom";

export default function Product({ product }) {
  // name, description, discount, newprice, price,
  const navigate = useNavigate();

  const toProductPage = () => {
    navigate(`/products/${product.id}`);
  };

  return (
    <div className="grid-item" onClick={toProductPage}>
      <div className="imageContainer">
        <img
          src={`http://localhost:8001/uploads/${product.image_path}`}
          height={120}
          width={120}
          alt={product.image_path}
        />
        <p className="overlay">See product</p>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          flex: "1",
          justifyContent: "center",
          alignItems: "center",
          alignSelf: "center",
          overflow: "hidden",
        }}
      >
        <p style={{ fontSize: "14px" }}>{product.name}</p>
        {product.discount ? (
          <p style={{ fontSize: "12px" }}>
            <span
              style={{
                fontSize: "11px",
                marginRight: "5px",
                textDecorationLine: "line-through",
                textDecorationThickness: "0.1px",
                // textDecorationColor: "#22d1dc",
              }}
            >
              {product.price}
            </span>
            {product.newprice}
          </p>
        ) : (
          <p style={{ fontSize: "12px" }}>{product.price}</p>
        )}
      </div>
    </div>
  );
}
