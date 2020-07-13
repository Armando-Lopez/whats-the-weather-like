import React from "react";
import { useParams } from "react-router-dom";

const mocl = {
  coord: {
    lon: -75.56,
    lat: 6.25,
  },
  weather: [
    {
      id: 521,
      main: "Rain",
      description: "chubasco",
      icon: "09n",
    },
  ],
  base: "stations",
  main: {
    temp: 286.77,
    feels_like: 287.21,
    temp_min: 285.37,
    temp_max: 288.15,
    pressure: 1028,
    humidity: 100,
  },
  visibility: 10000,
  wind: {
    speed: 1,
    deg: 0,
  },
  clouds: {
    all: 90,
  },
  dt: 1594610528,
  sys: {
    type: 1,
    id: 8619,
    country: "CO",
    sunrise: 1594551242,
    sunset: 1594596084,
  },
  timezone: -18000,
  id: 3674962,
  name: "Medellín",
  cod: 200,
};

const WeatherInfo = () => {
  console.log(useParams());

  return <div className="col s12">fico</div>;
};

export default WeatherInfo;
