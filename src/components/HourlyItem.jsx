import WeatherIcon from "../WeatherIcon/WeatherIcon";

export default function HourlyItem({ data }) {
  return (
    <div className="hourly-item">
      <div className="hourly-time">{data.time}</div>
      <WeatherIcon iconCode={data.icon} size={50} />
      <div className="hourly-temp">{data.temp}°</div>
    </div>
  );
}
