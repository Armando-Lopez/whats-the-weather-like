import React from "react";

const FoundCitiesTable = ({ cities }) => {
  return (
    <table className="striped green accent-2 highlight centered">
      <thead>
        <tr>
          <th>Ciudad</th>
          <th>País</th>
        </tr>
      </thead>

      <tbody></tbody>
    </table>
  );
};

export default FoundCitiesTable;
