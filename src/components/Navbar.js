import React from "react";

export default function Navbar() {
  return (
    <nav>
      <img
        src={require(`../images/nav-icon.png`)}
        alt="journal logo"
        className="nav--logo"
      />
      <span className="nav--title">my travel journal.</span>
    </nav>
  );
}
