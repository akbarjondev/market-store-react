import React from "react";
import "./Layout.scss";

function Layout({ children }) {
  return <div className="layout">{children}</div>;
}

Layout.Left = function ({ children, style }) {
  return (
    <div style={style} className="left">
      {children}
    </div>
  );
};

Layout.Content = function ({ children }) {
  return <div className="content">{children}</div>;
};

Layout.right = function ({ children }) {
  return <div className="right">{children}</div>;
};

export default Layout;
