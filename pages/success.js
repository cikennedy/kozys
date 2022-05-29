import React, { useState } from "react";
import Link from "next/link";
import { BsBagCheckFill } from "react-icons/bs";

import { useStateContext } from "../context/StateContext";

const Success = () => {
  const { setCartItems, setTotalPrice, setTotalQuantities } = useStateContext();
  // const [order, setOrder] = useState(null);

  return (
    <div className="success-wrapper">
      <div className="success">
        <p className="icon">
          <BsBagCheckFill />
        </p>
        <h2>Thank you for your purchase!</h2>
        <p className="email-msg">
          Your receipt has been sent to your email inbox.
        </p>
        <p className="description">
          Please contact us at the below email address for any questions.
          <a className="email" href="mailto:kennedy.christopherian@gmail.com">
            kennedy.christopherian@gmail.com
          </a>
        </p>
        <Link href="/">
          <button type="button" width="300px" className="btn">
            Continue Shopping
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Success;
