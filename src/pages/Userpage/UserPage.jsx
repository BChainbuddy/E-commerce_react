import { useEffect, useState } from "react";
import { getAddress, getOrders, getUser } from "../../api";
import { useNavigate } from "react-router-dom";
import Loader from "../../components/Loader";
import ShippingInfo from "./components/ShippingInfo";
import Orders from "./components/Orders";
import "../../style/User.css";

export default function UserPage() {
  const [user, setUser] = useState("");
  const [address, setAddress] = useState("");
  const [orders, setOrders] = useState([]);

  const navigate = useNavigate();

  const fetchUser = async () => {
    const response = await getUser();
    if (!response.error) {
      setUser(response.user);
    } else {
      navigate("/login");
    }
  };

  const fetchAddress = async () => {
    const response = await getAddress();
    if (response) {
      setAddress(response[0]);
    } else {
    }
  };

  const fetchOrders = async () => {
    let response = await getOrders();
    if (response) {
      response = await response.json();
      setOrders(response);
    }
  };

  useEffect(() => {
    fetchUser();
    fetchAddress();
    fetchOrders();
  }, []);

  return (
    <>
      {user ? (
        <div id="userPageContainer">
          <div style={{ width: "100%", marginTop: "40px" }}>
            <p
              style={{
                color: "white",
                fontSize: "24px",
                width: "40%",
                textAlign: "center",
              }}
            >{`Welcome back ${user}!`}</p>
          </div>
          <div id="OrdersShippingContainer">
            <div>
              <ShippingInfo info={address} />
              {/* <div style={{ width: "100%", background: "red" }}>
                <button className="logoutButton">LOGOUT</button>
              </div> */}
            </div>
            <div>
              <Orders orders={orders} />
              {/* <p style={{ marginTop: "50px" }}>
                Have any questions, feel free to send us a message
              </p> */}
            </div>
          </div>
        </div>
      ) : (
        <Loader />
      )}
    </>
  );
}
