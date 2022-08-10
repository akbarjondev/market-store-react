import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.scss";
import "./../../sass/general.scss";

import { Header, Layout, Footer, Nav, Goods } from "..";

const Sales = React.lazy(() => import("../Sales/Sales"));
const Customers = React.lazy(() => import("../Customers/Customers"));
const Good = React.lazy(() => import("../Good/Good"));

function App() {
  return (
    <div className="app">
      <Header />
      <Layout>
        <Layout.Left style={{ width: "200px" }}>
          <Nav />
        </Layout.Left>
        <Layout.Content>
          <React.Suspense fallback={<h4>Loading...</h4>}>
            <Routes>
              <Route index element={<Goods />} />
              <Route path="/goods" element={<Goods />} />
              <Route path="/goods/:goodId" element={<Good />} />
              <Route path="/sales" element={<Sales />} />
              <Route path="/customers" element={<Customers />} />
              <Route
                path="*"
                element={
                  <div>
                    Ugh! Something went wrong! <br /> Page not found.
                  </div>
                }
              />
            </Routes>
          </React.Suspense>
        </Layout.Content>
      </Layout>
      <Footer />
    </div>
  );
}

export default App;
