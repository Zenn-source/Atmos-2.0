import { useState, useEffect } from "react";
import "./App.css";

import SearchBar from "./components/SearchBar";
import CurrentWeather from "./components/CurrentWeather";
import HourlyForecast from "./components/HourlyForecast";
import DailyForecast from "./components/DailyForecast";

const getDayOfWeek = (timestamp) => {
  const date = new Date(timestamp * 1000);
  return date.toLocaleDateString("en-PH", { weekday: "short" });
};
const getHour = (timestamp) => {
  const date = new Date(timestamp * 1000);
  return date.toLocaleTimeString("en-PH", { hour: "numeric", hour12: false });
};

function App() {
  const [location, setLocation] = useState("Pasig");
  const [weatherData, setWeatherData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const API_KEY = import.meta.env.VITE_OPENWEATHER_API_KEY;

  useEffect(() => {
    if (!location) return;

    const fetchWeather = async () => {
      setIsLoading(true);
      setError(null);
      setWeatherData(null);

      try {
        const currentURL = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${API_KEY}&units=metric`;
        const forecastURL = `https://api.openweathermap.org/data/2.5/forecast?q=${location}&appid=${API_KEY}&units=metric`;

        const [currentRes, forecastRes] = await Promise.all([
          fetch(currentURL),
          fetch(forecastURL),
        ]);

        if (!currentRes.ok || !forecastRes.ok) {
          throw new Error("Weather data not found. Check the city name.");
        }

        const currentData = await currentRes.json();
        const forecastData = await forecastRes.json();

        const transformedCurrent = {
          location: currentData.name,
          temp: Math.round(currentData.main.temp),
          rainChance: forecastData.list[0].pop * 100,
          condition: currentData.weather[0].main,
          icon: currentData.weather[0].icon,
        };

        const transformedHourly = forecastData.list
          .slice(0, 10)
          .map((item) => ({
            time: `${getHour(item.dt)}:00`,
            temp: Math.round(item.main.temp),
            icon: item.weather[0].icon,
          }));

        const transformedDaily = forecastData.list
          .filter((item) => item.dt_txt.includes("12:00:00"))
          .map((item) => ({
            day: getDayOfWeek(item.dt),
            temp: Math.round(item.main.temp),
            minTemp: Math.round(item.main.temp_min),
            maxTemp: Math.round(item.main.temp_max),
            icon: item.weather[0].icon,
            condition: item.weather[0].main,
          }));

        setWeatherData({
          current: transformedCurrent,
          hourly: transformedHourly,
          daily: transformedDaily,
        });
      } catch (err) {
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchWeather();
  }, [location, API_KEY]);

  const handleSearch = (newLocation) => {
    setLocation(newLocation);
  };

  return (
    <div className="app-container">
      <main className="main-content">
        <SearchBar onSearch={handleSearch} />

        {isLoading && <div className="message">Loading...</div>}
        {error && <div className="message error">{error}</div>}

        {weatherData && (
          <div className="main-weather-wrapper">
            <CurrentWeather data={weatherData.current} />
            <HourlyForecast data={weatherData.hourly} />
          </div>
        )}
      </main>

      <aside className="forecast-column">
        {weatherData && !isLoading && !error && (
          <DailyForecast data={weatherData.daily} />
        )}
      </aside>
    </div>
  );
}

export default App;
