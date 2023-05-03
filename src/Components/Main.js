import React from "react";
import Nav from "./Nav";
import { Outlet } from "react-router";
import Footer from "./Footer";

function Main() {
  return (
    <div>
      <Nav></Nav>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
}

export default Main;
