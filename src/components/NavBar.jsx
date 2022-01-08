import React from "react";
import NavBarLinks from "./NavBarLinks";
import "./../styles/navbar.css";

function NavBar(props) {
  return (
    <div className="navbar">
      <NavBarLinks />
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/NASA_logo.svg/110px-NASA_logo.svg.png"
        alt=""
      />
    </div>
  );
}

export default NavBar;
