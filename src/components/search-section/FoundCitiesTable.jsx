import React from "react";
import { Link } from "react-router-dom";

const FoundCitiesTable = ({ foundCities }) => {
  return (
    <table className="striped green accent-2">
      <thead>
        <tr>
          <th>Ciudad</th>
          <th>País</th>
        </tr>
      </thead>

      <tbody>
        {foundCities.map((city) => {
          let { lat, lon } = city.coord;
          return (
            <tr key={city.id}>
              <td>
                <Link to={`weather/${lat}/${lon}`}>{city.name}</Link>
              </td>
              <td>
                <Link to={`weather/${lat}/${lon}`}>{city.country}</Link>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default FoundCitiesTable;
