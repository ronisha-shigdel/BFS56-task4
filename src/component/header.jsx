import React from "react";
import logo from "../assets/images/logo.webp";

function Header() {
  return (
    <header className="header">
      <img className="logo" src={logo} />
      <h1>Act Now for a Sustainable Future</h1>
    </header>
  );
}

export default Header;
