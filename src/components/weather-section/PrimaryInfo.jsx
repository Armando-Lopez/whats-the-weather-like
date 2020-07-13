import React from "react";
import Icon from "./Icon.jsx";

const PrimaryInfo = ({ city, country, icon, temp, description }) => {
  return (
    <>
      <h5>
        {city},{country}
      </h5>
      <Icon icon={icon} />
      <h4>{temp}°C</h4>
      <p className="primary-info">{description}</p>
    </>
  );
};

export default PrimaryInfo;
