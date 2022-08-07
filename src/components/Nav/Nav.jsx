import React from "react";
import { Link, useLocation } from "react-router-dom";
import { toCapitalize } from "../../helpers";
import "./Nav.scss";

const routes = ["goods", "sales", "customers"];

function Nav() {
  const { pathname } = useLocation();

  return (
    <div className="nav">
      {routes.map((route, index) => (
        <Link
          key={index}
          className={`nav__link ${
            pathname === `/${route}` ? "nav__link--active" : ""
          }`}
          to={route}
        >
          {toCapitalize(route)}
        </Link>
      ))}
    </div>
  );
}

export default Nav;
