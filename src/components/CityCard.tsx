import ForecastCard from "./ForecastCard";

export default function CityCard() {
  return (
    <div className="cityCard">
      <div className="cityCardBlock">
        <div className="cityCardColumn">
          <div>
            <h2>Espoo</h2>
            <p>Scattered clouds</p>
          </div>
          <div>
            <b>May 2nd</b>
            <p>11:53</p>
          </div>
        </div>
        <div className="cityCardColumn alignRight">
          <div className="temperatureInfo">
            <i>Cloud Icon</i>
            <p>
              <span className="highlight">0</span>°C
            </p>
          </div>
          <div>
            <p>Wind: 5.1m/s</p>
            <p>Humidity: 86%</p>
            <p>Precipitation (3h): 5mm</p>
          </div>
        </div>
      </div>
      <div className="forecastBlock">
        <ForecastCard />
        <ForecastCard />
        <ForecastCard />
        <ForecastCard />
        <ForecastCard />
      </div>
    </div>
  );
}
