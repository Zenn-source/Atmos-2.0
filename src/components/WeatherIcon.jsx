import { getWeatherIcon } from "./iconMapping";

function WeatherIcon({ iconCode, size = "3em", color }) {
  if (!iconCode) return null;

  return (
    <div className="weather-icon-wrapper">
      {" "}
      {getWeatherIcon(iconCode, size, color)}
    </div>
  );
}

export default WeatherIcon;