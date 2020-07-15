import React from "react";
import Icon from "./Icon.jsx";

const Cloud = ({ delay }) => {
  const style = {
    top: `${Math.random() * 100}%`,
    animationDelay: `${delay}s`,
  };
  return (
    <i className="material-icons cloud" style={style}>
      cloud
    </i>
  );
};

const PrimaryInfo = ({
  city,
  country,
  icon,
  temp,
  main,
  description,
  clouds,
}) => {
  return (
    <>
      <div className="content">
        <h5>
          {city},{country}
        </h5>
        <h4>{temp.toFixed(1)}°C</h4>
        <Icon icon={icon} />
        <p className="description">
          {main}
          <br />
          {description}
        </p>
      </div>
      {[...Array(Math.ceil(clouds))].map((item, i) => {
        return <Cloud key={i} delay={i} />;
      })}
    </>
  );
};

export default PrimaryInfo;
