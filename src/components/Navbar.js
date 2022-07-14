import React from "react";
import Logo from "../images/Vector.png";
import "../style.css";

function Navbar() {
  return (
    <nav>
      <img src={Logo} className="nav--logo" alt="airbnbLogo" />
    </nav>
  );
}
export default Navbar;
