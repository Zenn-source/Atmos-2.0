import HourlyItem from "./HourlyItem";

export default function HourlyForecast({ data }) {
  return (
    <div className="hourly-forecast card">
      {" "}
      <h3 className="card-title">Today's forecast</h3>
      <div className="hourly-container">
        {data.map((hour, index) => (
          <HourlyItem key={index} data={hour} />
        ))}
      </div>
    </div>
  );
}
