export default function ProductInfo({ product }) {
  return (
    <div style={{ color: "white" }}>
      <p style={{ fontSize: "30px", marginBottom: "20px" }}>{product.name}</p>
      {product.discount ? (
        <p style={{ fontSize: "22px", marginBottom: "20px" }}>
          <span
            style={{
              fontSize: "18px",
              marginRight: "10px",
              textDecorationLine: "line-through",
              textDecorationThickness: "1px",
              // textDecorationColor: "#22d1dc",
            }}
          >
            {product.price}
          </span>
          {product.newprice}
        </p>
      ) : (
        <p style={{ fontSize: "22px", marginBottom: "20px" }}>
          {product.price}
        </p>
      )}
      <p style={{ fontSize: "22px", marginBottom: "20px" }}>Description:</p>
      <p style={{ fontSize: "16px", marginBottom: "20px" }}>
        {product.description}
      </p>
    </div>
  );
}
