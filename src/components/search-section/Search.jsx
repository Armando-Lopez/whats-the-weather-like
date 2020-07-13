import React from "react";

const Search = ({ onSearch }) => {
  const handleInput = (e) => {
    const value = e.target.value.toLowerCase().trim();
    if (value.length > 3) {
      onSearch(value);
    } else {
      onSearch(false);
    }
  };

  return (
    <div className="center-align green-text darken-4 accent-4">
      <h6>Buscar Cuidad</h6>
      <div className="input-field">
        <i className="material-icons prefix green-text darken-3">place</i>
        <input type="text" onChange={handleInput} />
      </div>
    </div>
  );
};

export default Search;
