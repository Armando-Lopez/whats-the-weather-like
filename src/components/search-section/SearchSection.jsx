import React, { useState } from "react";

import Search from "./Search.jsx";
import FoundCitiesTable from "./FoundCitiesTable.jsx";

// import citiesList from "../../db/city.list.json";

const SearchSection = () => {
  const [foundCities, setFoundCities] = useState([]);

  const onSearch = (value) => {
    // if (!value) {
    //   setFoundCities([]);
    // } else {
    //   const found = citiesList.filter((city) => {
    //     if (city.name.toLowerCase().includes(value)) {
    //       return city;
    //     }
    //     return null;
    //   });
    //   setFoundCities(sortResults(found));
    // }
  };

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
