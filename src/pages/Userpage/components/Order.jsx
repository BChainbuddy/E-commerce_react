import "../../../style/User.css";

export default function Order({ order }) {
  console.log(order);

  const convertDate = (date) => {
    const newDate = new Date(date);
    const day = newDate.getDate();
    const month = newDate.getMonth();
    const year = newDate.getFullYear();
    const formattedDate = `${day.toString().padStart(2, "0")}-${month
      .toString()
      .padStart(2, "0")}-${year}`;
    return formattedDate;
  };

  return (
    <div className="order">
      <p style={{ width: "10%" }}>{order.id}</p>
      <p style={{ width: "30%" }}>{convertDate(order.date)}</p>
      <p style={{ width: "30%" }}>{order.value}</p>
      <p style={{ color: `${order.fulfilled ? "green" : "#FF0000"}` }}>
        {order.fulfilled ? "Fulfilled" : "Not fulfilled"}
      </p>
    </div>
  );
}
