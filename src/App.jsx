import React from "react";

import Nav from "./components/Nav.jsx";
import Intro from "./components/Intro.jsx";
import SearchCard from "./components/SearchCard.jsx";

function App() {
  return (
    <>
      <Nav />
      <main className=" container section">
        <div className="row card-panel">
          <div className="col s12 m6">
            <Intro />

            <div className="divider"></div>
          </div>

          <div className="col s12">
            <SearchCard />
          </div>
        </div>
      </main>
    </>
  );
}

export default App;
