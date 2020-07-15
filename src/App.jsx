import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Nav from "./components/Nav.jsx";
import Intro from "./components/Intro.jsx";
import SearchSection from "./components/search-section/SearchSection.jsx";
import WeatherSection from "./components/weather-section/WeatherSection.jsx";

function App() {
  return (
    <>
      <Nav />
      <main className="container section">
        <div className="row card-panel">
          <div className="col s12 m6">
            <Intro />
          </div>

          <Router>
            <Switch>
              <Route exact path="/" component={SearchSection} />

              <Route
                exact
                path="/weather/:city/:country/:lat/:lon"
                component={WeatherSection}
              />
            </Switch>
          </Router>
        </div>
      </main>
    </>
  );
}

export default App;
