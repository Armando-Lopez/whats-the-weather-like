import React, { useState, useEffect } from "react";
import { useParams, Redirect } from "react-router-dom";

import PrimaryInfo from "./PrimaryInfo.jsx";
import AditionalIinfo from "./AditionalInfo.jsx";
import Axios from "axios";

const WeatherInfo = () => {
  const { city, country, lat, lon } = useParams();
  const [weather, setWeather] = useState(undefined);
  const [backPage, setBackPage] = useState(false);

  useEffect(() => {
    const getWeather = async () => {
      try {
        const response = await Axios.get(
          `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&lang=es&units=metric&appid=a0c735de4c1a433eb11d192df22f32e0`
        );
        const data = await response.data;
        setWeather(data);
      } catch (error) {
        console.log(error);
      }
    };
    getWeather();
  }, [lat, lon]);

  if (backPage) {
    return <Redirect to="/" />;
  }

  if (weather) {
    const { dt, temp, humidity, clouds, wind_speed } = weather.current;

    const { main, description, icon } = weather.current.weather[0];

    const isDay = icon.includes("d" || "D") ? true : false;

    return (
      <div className="col s12 center-align weather-info z-depth-3">
        <i
          className="material-icons white green-text text-darken-2 left z-depth-2 btn-floating arrow_back"
          onClick={() => setBackPage(true)}
        >
          arrow_back
        </i>
        <div
          className={`row blue ${
            isDay
              ? "accent-1 blue-text text-darken-3"
              : "darken-4 blue-text text-lighten-4"
          }`}
        >
          <div className="col s12 m6 primary-info">
            <PrimaryInfo
              city={city}
              country={country}
              temp={temp}
              icon={icon}
              main={main}
              description={description}
              clouds={clouds}
            />
          </div>
          <div className="col s12 m6 white blue-grey-text text-darken-2 more-info">
            <AditionalIinfo
              humidity={humidity}
              clouds={clouds}
              wind_speed={wind_speed}
            />
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="col s12">
        <i
          className="material-icons green-text text-darken-2 arrow_back"
          onClick={() => setBackPage(true)}
        >
          arrow_back
        </i>
      </div>
    );
  }
};

export default WeatherInfo;
