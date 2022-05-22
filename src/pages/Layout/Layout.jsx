import React from "react";
import Footer from "../../components/Footer";
import Header from "../../components/Header";

const Layout = (props) => {
  return (
    <>
      <Header></Header>
      {props.children}
      <Footer></Footer>
    </>
  );
};

export default Layout;
