import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from "./components/CheckoutForm";
import { useEffect, useState } from "react";
import { stripeSession } from "../../api";
import "../../style/Checkout.css";
import Loader from "../../components/Loader";

const stripePromise = loadStripe(
  "pk_test_51P6DO3FctiVEGljE49vqJvkWbOe0lGsIu9qPkClNLIGdyrro10vLOdXAuie1ecXL76uEuUQtPKtgdMjmj6gsp3RD009kGkvmHJ"
);

export default function Checkout() {
  const [secretId, setSecretId] = useState("");

  const handleStripeSession = async () => {
    const response = await stripeSession();
    if (response) {
      setSecretId(response);
    }
  };

  const options = {
    clientSecret: secretId.clientSecret,
  };

  useEffect(() => {
    handleStripeSession();
  }, []);

  return (
    <div id="checkoutPageContainer">
      {secretId ? (
        <div className="formContainer">
          <Elements stripe={stripePromise} options={options}>
            <CheckoutForm />
          </Elements>
        </div>
      ) : (
        <Loader />
      )}
    </div>
  );
}
