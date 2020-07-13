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
          let { id, name, country } = city;
          let { lat, lon } = city.coord;
          return (
            <tr key={id}>
              <td>
                <Link to={`weather/${name}/${country}/${lat}/${lon}`}>
                  {name}
                </Link>
              </td>
              <td>
                <Link to={`weather/${name}/${country}/${lat}/${lon}`}>
                  {country}
                </Link>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default FoundCitiesTable;
