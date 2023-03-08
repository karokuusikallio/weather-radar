import Image from "next/image";
import { WeatherData } from "../../types/types";

interface ForecastCardProps {
  weatherData: WeatherData;
}

export default function ForecastCard({ weatherData }: ForecastCardProps) {
  const hour = ("0" + new Date(weatherData.time * 1000).getHours()).slice(-2);

  const minute = ("0" + new Date(weatherData.time * 1000).getMinutes()).slice(
    -2
  );

  return (
    <div className="forecastCard">
      <div className="infoOnWhite">
        <p>
          {hour}:{minute}
        </p>
        <Image
          src={`https://openweathermap.org/img/wn/${weatherData.icon}@2x.png`}
          alt="weather icon"
          height={60}
          width={60}
        />
        <p>
          <span className="highlight">
            {Math.round(weatherData.temperature)}
          </span>
          <span>°C</span>
        </p>
      </div>
      <div className="infoOnBlue smallInfo">
        <p>{Math.round(weatherData.wind * 10) / 10}m/s</p>
        <p>{weatherData.humidity}%</p>
        {weatherData.precipitation ? (
          <p>{Math.round(weatherData.precipitation * 10) / 10}mm</p>
        ) : (
          <p>0mm</p>
        )}
      </div>
    </div>
  );
}
