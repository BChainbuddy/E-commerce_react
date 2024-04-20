import { useEffect, useState } from "react";
import "./../style/ErrorPage.css";
import Confetti from "react-confetti";

import { useNavigate } from "react-router-dom";
export default function CheckoutComplete() {
  const navigate = useNavigate();

  const [seeConfetti, setSeeConfetti] = useState(true);

  const { innerWidth: width, innerHeight: height } = window;

  return (
    <>
      <div id="errorPageContainer">
        <p style={{ fontSize: "50px" }}>🎉</p>
        <div style={{ fontSize: "30px" }}>Thank you for your purchase!</div>
        <div
          className="getBackToHome"
          onClick={() => {
            navigate("/");
          }}
        >
          Back to homepage
        </div>
      </div>
      {/* {seeConfetti ? (
        // <Confetti width={width} height={height} tweenDuration={200} />
      ) : ( */}
      {/* <></>
      )} */}
    </>
  );
}
