import {
  PaymentElement,
  useElements,
  useStripe,
} from "@stripe/react-stripe-js";

import "../../../style/Checkout.css";
import { checkoutComplete } from "../../../api";

export default function CheckoutForm() {
  const stripe = useStripe(); // Reference to stripe passed to elements
  const elements = useElements();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await checkoutComplete();
    if (!stripe || !elements) {
      return;
    }
    const result = await stripe.confirmPayment({
      elements,
      confirmParams: {
        return_url: "https://example.com/order/123/complete",
      },
    });
    if (result.error) {
      console.log(result.error.message);
    } else {
      console.log("Payed!");
      // Convert cart to orders!
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <div style={{ height: "250px" }}>
        <PaymentElement />
      </div>
      <button disabled={!stripe} className="submitCheckout">
        Submit
      </button>
    </form>
  );
}
