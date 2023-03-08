import ForecastCard from "./ForecastCard";
import useCurrentWeather from "../../hooks/useCurrentWeather";
import useForecast from "../../hooks/useForecast";
import Image from "next/image";

import { CurrentWeatherData } from "../../types/types";

interface CityCardProps {
  city: string;
  lat: number;
  lon: number;
}

export default function CityCard({ city, lat, lon }: CityCardProps) {
  const forecastData = useForecast(lat, lon);
  const currentWeatherData: CurrentWeatherData | null = useCurrentWeather(
    lat,
    lon
  );

  if (currentWeatherData) {
    const monthNames = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    let month = monthNames[new Date(currentWeatherData.time * 1000).getMonth()];
    const day = new Date(currentWeatherData.time * 1000).getDay();

    const hour = new Date(currentWeatherData.time * 1000).getHours();
    const minute = new Date(currentWeatherData.time * 1000).getMinutes();

    return (
      <div className="cityCard">
        <div className="cityCardBlock">
          <div className="cityCardColumn">
            <div>
              <h2>{city}</h2>
              <p>{currentWeatherData.description}</p>
            </div>
            <div>
              <b>
                {month} {day}
              </b>
              <p>
                {hour}:{minute}
              </p>
            </div>
          </div>
          <div className="cityCardColumn alignRight">
            <div className="temperatureInfo">
              <Image
                src={`https://openweathermap.org/img/wn/${currentWeatherData.icon}@2x.png`}
                alt="weather icon"
                height={60}
                width={60}
              />
              <span className="highlight">
                {Math.round(currentWeatherData.temperature)}
              </span>
              <span>°C</span>
            </div>
            <div>
              <p>Wind: {Math.round(currentWeatherData.wind * 10) / 10}m/s</p>
              <p>Humidity: {currentWeatherData.humidity}%</p>
              {currentWeatherData.precipitation ? (
                <p>Precipitation (3h): {currentWeatherData.precipitation}mm</p>
              ) : (
                <p>No precipitation</p>
              )}
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

  return <p>Loading...</p>;
}
