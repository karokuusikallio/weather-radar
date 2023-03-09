import ForecastCard from "./ForecastCard";

import { WeatherData } from "../../types/types";
import useForecast from "../../hooks/useForecast";

interface ForecastDataProps {
  lat: number;
  lon: number;
}

export default function ForecastData({ lat, lon }: ForecastDataProps) {
  const forecastData: WeatherData[] | null = useForecast(lat, lon);

  if (forecastData) {
    return (
      <div className="forecastBlock">
        {forecastData.map((weatherData, index) => (
          <ForecastCard weatherData={weatherData} key={index} />
        ))}
      </div>
    );
  }

  return <p>No forecast data.</p>;
}
