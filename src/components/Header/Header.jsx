import React from "react";
import { Link } from "react-router-dom";
import "./Header.scss";
import { HddOutlined } from "@ant-design/icons";
import Button from "../Button/Button";

function Header() {
  return (
    <div className="header">
      <div className="header__container container">
        <Link className="header__link" to="/">
          <HddOutlined className="header__icon" />
          Market Store
        </Link>

        <Button className="header__log-in-out">Log In</Button>
      </div>
    </div>
  );
}

export default Header;
