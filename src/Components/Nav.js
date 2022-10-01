import React, { useEffect, useState } from "react";
import "../style/Nav.css";
import MyImage from "./netflix.svg";

const Nav = () => {
  const [show, handleShow] = useState();
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        handleShow(true);
      } else handleShow(false);
    });
    return () => {
      window.removeEventListener("scroll");
    };
  }, []);

  return (
    <div className={`nav ${show && "nav_black"}`}>
      <img
        className="nav_logo"
        src={MyImage}
        alt="Netflix Logo"
      />
      <img
        className="nav_avtar"
        src=""
        alt="netflix logo Avtar"
      />
    </div>
  );
};

export default Nav;
