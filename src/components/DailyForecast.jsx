import DailyItem from "./DailyItem";

export default function DailyForecast({ data }) {
  return (
    <div className="daily-forecast card">
      <h3 className="card-title">5-Day Forecast</h3>
      <div className="daily-container">
        {data.map((day, index) => (
          <DailyItem key={index} data={day} />
        ))}
      </div>
    </div>
  );
}
