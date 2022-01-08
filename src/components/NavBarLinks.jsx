import React, { Fragment } from "react";
import { Link } from "react-router-dom";

function NavBarLinks(props) {
  return (
    <Fragment>
      <Link to="/">HOME</Link>
      <Link to="/search">SEARCH</Link>
      <Link to="/favourites">FAVOURITES</Link>
    </Fragment>
  );
}

export default NavBarLinks;
