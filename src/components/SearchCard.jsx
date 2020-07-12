import React, { useState } from "react";
import Search from "../components/Search.jsx";

import citiesList from "../city.list.json";
import FoundCitiesTable from "./FoundCitiesTable.jsx";

const SearchCard = () => {
  const [foundCities, setFoundCities] = useState([]);

  const onSearch = (value) => {
    const found = citiesList.filter((c) => {
      if (c.name.toLowerCase().includes(value)) {
        return c;
      }
      return null;
    });
    setFoundCities(found);
  };

  return (
    <>
      <div className="col s12 m6">
        <Search onSearch={onSearch} />
      </div>
      <div className="col s12">
        <FoundCitiesTable foundCities={foundCities} />
      </div>
    </>
  );
};

export default SearchCard;
