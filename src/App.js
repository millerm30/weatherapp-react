import React, {useState} from "react";
import axios from "axios";

function App() {

  const [data,setData] = useState({});
  const [location, setLocation] = useState("")
  const apiKey = "YOUR API KEY";

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=${apiKey}`;

  const searchLocation = (event) => {
    if (event.key === "Enter") {
      axios.get(url).then((response) => {
        setData(response.data);
        console.log(response.data);
      })
      setLocation("")
    } 
  };

  return (
    <div className="relative bg-black/40 text-[#fff] h-screen bg-hero-pattern bg-no-repeat bg-center bg-cover">
      <div className="text-center p-1">
        <input
          className="px-1 py-2 text-lg rounded-xl border-2 border-solid border-white/80 bg-white/10 outline-none text-[#f8f8f8] placeholder:text-[#f8f8f8]"
          value={location}
          onChange={(event) => setLocation(event.target.value)}
          onKeyPress={searchLocation}
          placeholder="Enter City"
          type="text"
        />
      </div>
      <div className="m-auto py-1 relative top-1 flex flex-col justify-between max-w-2xl h-[90%]">
        <div className="w-full px-2 my-auto">
          <div className="location">
            <p className="text-lg">{data.name}</p>
          </div>
          <div className="temp">
            {data.main ? <h1 className="text-8xl">{data.main.temp.toFixed()}°C</h1> : null}
          </div>
          <div className="text-right">
            {data.weather ? <p className="text-lg">{data.weather[0].main}</p> : null}
            {data.weather ? <img className="w-14 inline-block" src={`http://openweathermap.org/img/w/${data.weather[0].icon}.png`} alt="" /> : null}
          </div>
        </div>
        {data.name !== undefined && (
          <div className="flex justify-evenly text-center w-full m-auto p-4 rounded-xl bg-black/20">
            <div className="feels">
              {data.main ? (
                <p className="text-lg font-bold">{data.main.feels_like.toFixed()}°C</p>
              ) : null}
              <p className="text-lg">Feels Like</p>
            </div>
            <div className="humidity">
              {data.main ? (
                <p className="text-lg font-bold">{data.main.humidity} %</p>
              ) : null}
              <p className="text-lg">Humidity</p>
            </div>
            <div className="wind">
              {data.wind ? (
                <p className="text-lg font-bold">{data.wind.speed.toFixed()} KM/h</p>
              ) : null}
              <p className="text-lg">Wind Speed</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
