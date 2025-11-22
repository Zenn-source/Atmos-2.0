import WeatherIcon from "./WeatherIcon";
import { getConditionText } from "./iconMapping";

export default function DailyItem({ data }) {
  const displayCondition = getConditionText(data.condition);

  return (
    <div className="daily-item">
      <div className="daily-day">{data.day}</div>
      <div className="daily-icon-and-condition">
        <WeatherIcon iconCode={data.icon} size="2em" />
        <span className="daily-condition-text">{displayCondition}</span>
      </div>
      <div className="daily-temp">
        {data.maxTemp}°/{data.minTemp}°
      </div>
    </div>
  );
}
