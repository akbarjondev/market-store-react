import React from "react";
import "./../../sass/general.scss";
import "./App.scss";
import Header from "../Header/Header";
import Layout from "../Layout/Layout";
import Footer from "../Footer/Footer";

function App() {
  return (
    <div className="app">
      <Header />
      <Layout>
        <Layout.Left style={{ width: "200px" }}>Left</Layout.Left>
        <Layout.Content>Content</Layout.Content>
      </Layout>
      <Footer />
    </div>
  );
}

export default App;
