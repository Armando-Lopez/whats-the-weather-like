import React from "react";
import logo from "../logo.jpg";

const Intro = () => {
  return (
    <>
      <img
        src={logo}
        className="resposive-img circle center-align"
        alt="logo"
        width="50"
      />
      <h5>Whats the weather like?</h5>
      <p>
        Conoce los pronosticos del tiempo al rededor del mundo en tiempo real
      </p>
    </>
  );
};

export default Intro;
