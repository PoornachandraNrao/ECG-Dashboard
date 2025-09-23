import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <p>
      {new Date().getFullYear()} ECG Monitoring System. All rights
        reserved.
      </p>
      <p className="credit">
        Built by <span className="team">Our Team</span>
      </p>
    </footer>
  );
};

export default Footer;
