import React from "react";
import "./Nav.scss";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <div className="nav">
      <Link className="nav__link" to="/">
        Goods
      </Link>
      <Link className="nav__link" to="/customers">
        Customers
      </Link>
      <Link className="nav__link" to="/sales">
        Sales
      </Link>
    </div>
  );
}

export default Nav;
