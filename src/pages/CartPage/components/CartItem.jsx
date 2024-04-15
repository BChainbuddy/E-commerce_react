import { useEffect, useState } from "react";
import "../../../style/CartItem.css";
import { changeQuantity, deleteFromCart } from "../../../api";

export default function CartItem({ item, updateCart }) {
  const [quantity, setQuantity] = useState(item.quantity);

  const handleChangeQuantity = async (e) => {
    setQuantity(e.target.value);
    if (e.target.value > 0) {
      await changeQuantity(item.id, { quantity: Number(e.target.value) });
    }
    updateCart();
  };

  const handleDeleteItem = async () => {
    await deleteFromCart(item.id);
    updateCart();
  };

  return (
    <div id="cartItemContainer">
      <p id="deleteItem" onClick={handleDeleteItem}>
        x
      </p>
      <img
        src={`http://localhost:8001/uploads/${item.image_path}`}
        width={100}
        height={100}
      />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          color: "white",
          width: "300px",
          textAlign: "center",
        }}
      >
        <p style={{ fontSize: "16px" }}>{item.name}</p>
        <div style={{ fontSize: "14px", marginTop: "5px" }}>
          <label htmlFor="cartItemQuantity">Quantity:</label>
          <input
            id="cartItemQuantity"
            style={{ marginLeft: "5px", fontSize: "14px", width: "50px" }}
            type="number"
            value={quantity}
            min={1}
            onChange={handleChangeQuantity}
          ></input>
        </div>
      </div>
      {item.newprice != item.price ? (
        <div style={{ textAlign: "center" }}>
          <p
            style={{
              color: "white",
              fontSize: "15px",
              textDecorationLine: "line-through",
              textDecorationThickness: "1px",
              textDecorationColor: "black",
            }}
          >
            <span>{item.price}</span>
            {` x${quantity} = $${item.price.replace("$", "") * quantity}`}
          </p>
          <p style={{ color: "white", marginTop: "2px" }}>
            <span>{item.newprice}</span>
            {` x${quantity} = $${item.newprice.replace("$", "") * quantity}`}
          </p>
        </div>
      ) : (
        <p style={{ color: "white" }}>
          <span>{item.newprice}</span>
          {` x${quantity} = $${item.newprice.replace("$", "") * quantity}`}
        </p>
      )}
    </div>
  );
}
