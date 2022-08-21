import { ClickToComponent } from "click-to-react-component";

import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App/App";
import { BrowserRouter as Router } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Router>
    <ClickToComponent />
    <App />
  </Router>
);
