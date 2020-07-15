import React, { useState, useEffect } from "react";

import Search from "./Search.jsx";
import FoundCitiesTable from "./FoundCitiesTable.jsx";

import citiesList from "../../db/city.list.json";

const SearchSection = () => {
  const [search, setSearch] = useState("");
  const [foundCities, setFoundCities] = useState([]);

  useEffect(() => {
    if (!search) {
      setFoundCities([]);
    } else {
      const found = citiesList.filter((city) => {
        if (city.name.toLowerCase().includes(search)) {
          return city;
        }
        return null;
      });
      setFoundCities(sortResults(found));
    }
  }, [search]);

  const onSearch = (value) => setSearch(value);

  const sortResults = (results) => {
    return results.sort((a, b) => (a.name < b.name ? -1 : 1));
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
