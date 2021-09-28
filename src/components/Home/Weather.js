import React, { useEffect, useState } from "react";
import moment from "moment";

export default function Weather() {
  const [lat, setLat] = useState([]);
  const [long, setLong] = useState([]);
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fectchData = async () => {
      navigator.geolocation.getCurrentPosition(function (position) {
        setLat(position.coords.latitude);
        setLong(position.coords.longitude);
      });

      await fetch(
        `https://api.openweathermap.org/data/2.5/weather/?lat=${lat}&lon=${long}&units=metric&APPID=${process.env.REACT_APP_API_KEY}`
      )
        .then((res) => res.json())
        .then((result) => {
          setData(result);
          setIsLoading(false);
        });
    };

    fectchData();
    console.log(data);
  }, [lat, long]);

  if (typeof data.main == 'undefined') {
    return <div>Loading</div>;
  } else {
    return (
      <div className="main">
        <div className="row">
          <div className="col">
            <p className="header">{data.name}</p>
          </div>
          <div className="col">
            <p className="description">{data.weather[0].main}</p>
          </div>
        </div>
        <div className="flex">
          <p className="day">
            {moment().format("dddd")}, <span>{moment().format("LL")}</span>
          </p>
        </div>

        <div className="flex">
          <p className="temp">Temprature: {data.main.temp} &deg;C</p>
          <p className="temp">Humidity: {data.main.humidity} %</p>
        </div>

        <div className="flex">
          <p className="sunrise-sunset">
            Sunrise:{" "}
            {new Date(data.sys.sunrise * 1000).toLocaleTimeString("en-IN")}
          </p>
          <p className="sunrise-sunset">
            Sunset:{" "}
            {new Date(data.sys.sunset * 1000).toLocaleTimeString("en-IN")}
          </p>
        </div>
      </div>
    );
  }
}
