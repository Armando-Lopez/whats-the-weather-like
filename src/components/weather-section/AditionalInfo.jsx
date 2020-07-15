import React from "react";

const AditionalIinfo = ({ clouds, humidity, wind_speed }) => {
  return (
    <div className="container">
      <table>
        <tbody>
          <tr>
            <td>Humedad</td>
            <td>{humidity}%</td>
          </tr>
          <tr>
            <td>velocidad del viento</td>
            <td>{wind_speed} m/s</td>
          </tr>
          <tr>
            <td>Nubes</td>
            <td>{clouds}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default AditionalIinfo;
