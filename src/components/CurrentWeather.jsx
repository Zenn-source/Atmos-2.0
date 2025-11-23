import WeatherIcon from "./WeatherIcon";
import { getConditionText } from "./iconMapping";

export default function CurrentWeather({ data }) {
  if (!data) return null;

  const displayCondition = getConditionText(data.condition); 

  return (
    <div className="current-weather card">
      <div className="main-info">
        <h2 className="location">{data.location}</h2>
        <p className="rain-chance">
          Precipitation: {Math.round(data.rainChance)}%
        </p>{" "}
        <div className="temperature">{data.temp}°</div>
      </div>
      <div className="icon-container">
        <WeatherIcon iconCode={data.icon} size="8em" />{" "}
        <p className="condition">{displayCondition}</p>
      </div>
    </div>
  );
}
