import ForecastCard from "./ForecardCard";

export default function CityCard() {
  return (
    <div>
      <div>
        <div>
          <h2>Espoo</h2>
          <p>Scattered clouds</p>
        </div>
        <div>
          <b>May 2nd</b>
          <p>11:53</p>
        </div>
      </div>
      <div>
        <div>
          <i>Cloud Icon</i>
          <p>
            <span>0</span>°C
          </p>
        </div>
        <div>
          <p>Wind: 5.1m/s</p>
          <p>Humidity: 86%</p>
          <p>Precipitation (3h): 5mm</p>
        </div>
      </div>
      <ForecastCard />
      <ForecastCard />
      <ForecastCard />
      <ForecastCard />
      <ForecastCard />
    </div>
  );
}
