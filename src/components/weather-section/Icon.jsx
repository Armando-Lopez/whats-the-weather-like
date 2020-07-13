import React from "react";

const Icon = ({ icon }) => (
  <img
    className="icon"
    src={`http://openweathermap.org/img/w/${icon}.png`}
    alt="weatherIcon"
  />
);

export default Icon;
