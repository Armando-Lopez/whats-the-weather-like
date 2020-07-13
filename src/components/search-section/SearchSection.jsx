import React, { useState } from "react";

import Search from "./Search.jsx";
import FoundCitiesTable from "./FoundCitiesTable.jsx";

import citiesList from "../../db/city.list.json";

const SearchSection = () => {
  const [foundCities, setFoundCities] = useState([]);

  const onSearch = (value) => {
    if (!value) {
      setFoundCities([]);
    } else {
      const found = citiesList.filter((city) => {
        if (city.name.toLowerCase().includes(value)) {
          return city;
        }
        return null;
      });
      sortResults(found);
    }
  };

  const sortResults = (results) => {
    const sorted = results.sort((a, b) => {
      if (a.name < b.name) {
        return -1;
      }
      if (a.name > b.name) {
        return 1;
      }
      return 0;
    });

    setFoundCities(sorted);
  };

  return (
    <>
      <div className="col s12 m6">
        <Search onSearch={onSearch} />
      </div>
      <div className="col s12 found-table">
        <FoundCitiesTable foundCities={foundCities} />
      </div>
    </>
  );
};

export default SearchSection;
