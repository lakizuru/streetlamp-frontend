import React, { useEffect, useState } from "react";
import { database } from "../Firebase/firebase";
import * as SECRETS from '../../constants/secrets';

export default function Map() {
  const [lat, setLat] = useState([]);
  const [long, setLong] = useState([]);

  useEffect(() => {
    const fetchCoords = async () => {
      database.ref("/WeatherLocation").once("value", (snapshot) => {
        setLat(snapshot.val().latitude);
        setLong(snapshot.val().longitude);
      });
    };
    fetchCoords();
  }, [lat, long]);

  if (lat == undefined || long == undefined) {
    return <div>Loading</div>;
  } else {
    let url = "https://www.google.com/maps/embed/v1/view?key=" + SECRETS.GOOGLE_MAP_API_KEY + "&center=" + lat + "," + long + "&zoom=14e";
    return (
      <div className="app">
        <div className="row">
          <iframe
            width="300"
            height="400"
            frameborder="0"
            scrolling="no"
            marginheight="0"
            marginwidth="0"
            src={url}
          />
        </div>
      </div>
    );
  }
}
