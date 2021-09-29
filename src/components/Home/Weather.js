import React, { useEffect, useState } from "react";
import moment from "moment";
import { database } from "../Firebase/firebase";

export default function Weather() {
  const [lat, setLat] = useState([]);
  const [long, setLong] = useState([]);
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchCoords = async () => {
      database.ref("/WeatherLocation").once("value", (snapshot) => {
        setLat(snapshot.val().latitude);
        setLong(snapshot.val().longitude);
      });
    

      await fetch(
        `https://api.openweathermap.org/data/2.5/weather/?lat=${lat}&lon=${long}&units=metric&APPID=${process.env.REACT_APP_API_KEY}`
      )
        .then((res) => res.json())
        .then((result) => {
          setData(result);
        });
    };

    fetchCoords();
    console.log(data);
  }, [lat, long]);

  if (typeof data.main == "undefined") {
    return <div>Loading</div>;
  } else {
    console.log(lat, long)
    return (
      <div>
        <div className="row">
          <div className="col">
            <p className="header">
              <b>{data.name}</b>
            </p>
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

        <div className="row">
          <div className="col">
            <p className="temp">🌡 {data.main.temp} &deg;C</p>
          </div>
          <div className="col">
            <p className="temp">💧 {data.main.humidity} %</p>
          </div>
        </div>

        <div className="row">
          <div className="col">
            <p className="sunrise-sunset">
              🌄 {new Date(data.sys.sunrise * 1000).toLocaleTimeString("en-IN")}
            </p>
          </div>
          <div className="col">
            <p className="sunrise-sunset">
              🌅 {new Date(data.sys.sunset * 1000).toLocaleTimeString("en-IN")}
            </p>
          </div>
        </div>
      </div>
    );
  }
}
