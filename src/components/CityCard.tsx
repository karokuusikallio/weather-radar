import useCurrentWeather from "../../hooks/useCurrentWeather";
import Image from "next/image";

import ForecastData from "./ForecastData";
import { WeatherData } from "../../types/types";

interface CityCardProps {
  city: string;
  lat: number;
  lon: number;
}

export default function CityCard({ city, lat, lon }: CityCardProps) {
  const currentWeatherData: WeatherData | null = useCurrentWeather(lat, lon);

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

    const hour = (
      "0" + new Date(currentWeatherData.time * 1000).getHours()
    ).slice(-2);
    const minute = (
      "0" + new Date(currentWeatherData.time * 1000).getMinutes()
    ).slice(-2);

    return (
      <div className="cityCard">
        <div className="cityCardBlock">
          <div className="cityCardColumn">
            <div>
              <h2 id={city}>{city}</h2>
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
              <p className="highlight">
                {Math.round(currentWeatherData.temperature)}°C
              </p>
            </div>
            <div>
              <p>Wind: {Math.round(currentWeatherData.wind * 10) / 10}m/s</p>
              <p>Humidity: {currentWeatherData.humidity}%</p>
              {currentWeatherData.precipitation ? (
                <p>
                  Precipitation (3h):
                  {Math.round(currentWeatherData.precipitation * 10) / 10}mm
                </p>
              ) : (
                <p>No precipitation</p>
              )}
            </div>
          </div>
        </div>
        <ForecastData lat={lat} lon={lon} />
      </div>
    );
  }

  return <p>No weather data.</p>;
}
