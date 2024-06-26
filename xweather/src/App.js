import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";
import axios from "axios";
import Card from "./Card";

function App() {
  const [city, setCity] = useState("");
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(false)
  // console.log(data)
  const getWeather = () => {
    (async () => {
      try {
        setLoading(true);
        var response = await axios.get(
          "https://api.weatherapi.com/v1/current.json?key=79bfb5c1f25b4ac686a24934230112&q=" +
            city
        );
        setData(response.data);
        console.log(data);
        setLoading(false)
      } catch (err) {
        //return new Error("Failed to Fetch !", err);
        console.error("Failed to fetch");
      }
    })();
  };
  return (
    <div className="App">
      <input
        type="text"
        placeholder="Enter city name"
        onChange={(e) => {
          setCity(e.target.value);
        }}
      />
      <button onClick={getWeather}>Search</button>
      {loading?<p>Loading data...</p>:<></>}
      <div className="WeatherDetails">
        {Object.keys(data).length != 0 ? (
          <>
            <Card title="Temperature" value={data.current.temp_c} />
            <Card title="Humidity" value={data.current.humidity} />
            <Card title="Condition" value={data.current.condition.text} />
            <Card title="Wind Speed" value={data.current.wind_kph} />
          </>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
}

export default App;
