import React from "react";
import Link from "next/link";

const About = () => {
  return (
    <div className="success-wrapper">
      <div className="success">
        <h2>Service, Selection &amp; Savings</h2>
        <br></br>
        <p className="email-msg">
          The best service, selection and savings has kept Kozy's Cyclery as the
          premier bike store in Chicago for 75 years. Our locations include the
          best and largest selection of brands in the industry. Kozy's has a
          vast array of accessories and clothing, and full service & repair
          departments. Let our friendly and knowledgeable staff help you with
          all your cycling needs.
        </p>
        <p className="description">
          Test Rides are Available!
          <a className="email" href="mailto:kennedy.christopherian@gmail.com">
            Test Ride
          </a>
          &nbsp;the bike before you buy.
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

export default About;
