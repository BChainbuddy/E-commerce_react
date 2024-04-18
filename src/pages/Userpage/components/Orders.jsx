import Order from "./Order";
import "../../../style/User.css";

export default function Orders({ orders }) {
  return (
    <div id="ordersContainer">
      <p style={{ fontSize: "20px", marginBottom: "10px" }}>Your past orders</p>
      <div className="orders">
        {orders.map((order, i) => (
          <Order order={order} key={i} />
        ))}
      </div>
    </div>
  );
}
