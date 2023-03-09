import { useEffect, useState } from "react";
import axios from "axios";

import { WeatherData } from "../types/types";

export default function useForecast(
  lat: number,
  lon: number
): WeatherData[] | null {
  const [forecastData, setForecastData] = useState<WeatherData[] | null>(null);

  useEffect(() => {
    const getForecast = async () => {
      try {
        const { data } = await axios.get(
          `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${process.env.NEXT_PUBLIC_OPEN_WEATHER_KEY}&units=metric&cnt=5`
        );

        let forecastArray: WeatherData[] = [];

        data.list.map((forecast: any) => {
          const isSnowing =
            forecast.hasOwnProperty("snow") &&
            forecast.snow.hasOwnProperty("3h");
          const isRaining =
            forecast.hasOwnProperty("rain") &&
            forecast.snow.hasOwnProperty("3h");

          const precipitation = isSnowing
            ? forecast.snow["3h"]
            : isRaining
            ? forecast.rain["3h"]
            : null;

          const weatherObject: WeatherData = {
            time: forecast.dt,
            description: forecast.weather[0].description,
            wind: forecast.wind.speed,
            humidity: forecast.main.humidity,
            temperature: forecast.main.temp,
            precipitation,
            icon: forecast.weather[0].icon,
          };

          forecastArray.push(weatherObject);
        });

        setForecastData(forecastArray);
      } catch (error) {
        console.log(error);
      }
    };

    getForecast();
  }, [lat, lon]);

  return forecastData;
}
