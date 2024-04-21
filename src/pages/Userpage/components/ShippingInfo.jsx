import { useEffect, useState } from "react";
import { putAddress } from "../../../api";

export default function ShippingInfo({ info }) {
  const [street, setStreet] = useState("");
  const [aptNumber, setAptNumber] = useState("");
  const [city, setCity] = useState("");
  const [postalCode, setPostalCode] = useState("");
  const [country, setCountry] = useState("");

  useEffect(() => {
    if (info) {
      setStreet(info.street);
      setAptNumber(info.apt_number);
      setCity(info.city);
      setPostalCode(info.postal_code);
      setCountry(info.country);
    }
  }, [info]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (info) {
      handleUpdateAddress();
    } else {
      handleCreateAddress();
    }
  };

  const handleUpdateAddress = async () => {
    let newAddress = {
      street: street,
      apt_number: aptNumber,
      city: city,
      postal_code: postalCode,
      country: country,
    };
    await putAddress(newAddress);
  };

  const handleCreateAddress = async () => {
    let newAddress = {
      street: street,
      apt_number: aptNumber,
      city: city,
      postal_code: postalCode,
      country: country,
    };
    await putAddress(newAddress);
  };

  return (
    <form id="shippingForm" onSubmit={handleSubmit}>
      <p style={{ fontSize: "20px" }}>Your shipping address:</p>
      <label htmlFor="Street" style={{ marginTop: "20px" }}>
        Street:
      </label>
      <input
        id="Street"
        value={street}
        onChange={(e) => {
          setStreet(e.target.value);
        }}
      />
      <label htmlFor="AptNumber" style={{ marginTop: "15px" }}>
        Apt. number:
      </label>
      <input
        id="AptNumber"
        value={aptNumber}
        onChange={(e) => {
          setAptNumber(e.target.value);
        }}
      />
      <label htmlFor="City" style={{ marginTop: "15px" }}>
        City:
      </label>
      <input
        id="City"
        value={city}
        onChange={(e) => {
          setCity(e.target.value);
        }}
      />
      <label htmlFor="PostalCode" style={{ marginTop: "15px" }}>
        Postal Code:
      </label>
      <input
        id="PostalCode"
        value={postalCode}
        onChange={(e) => {
          setPostalCode(e.target.value);
        }}
      />
      <label htmlFor="Country" style={{ marginTop: "15px" }}>
        Country:
      </label>
      <input
        id="Country"
        value={country}
        onChange={(e) => {
          setCountry(e);
        }}
      />
      <input
        type="submit"
        value={"UPDATE"}
        style={{ marginTop: "25px" }}
        className="updateButton"
      />
    </form>
  );
}
