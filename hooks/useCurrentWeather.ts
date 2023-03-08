import { useEffect, useState } from "react";
import axios from "axios";

import { CurrentWeatherData } from "../types/types";

export default function useCurrentWeather(
  lat: number,
  lon: number
): CurrentWeatherData | null {
  const [currentWeatherData, setCurrentWeatherData] =
    useState<CurrentWeatherData | null>(null);

  useEffect(() => {
    const getCurrentWeather = async () => {
      const { data } = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${process.env.NEXT_PUBLIC_OPEN_WEATHER_KEY}&units=metric`
      );

      const isSnowing =
        data.hasOwnProperty("snow") && data.snow.hasOwnProperty("3h");
      const isRaining =
        data.hasOwnProperty("rain") && data.snow.hasOwnProperty("3h");

      const precipitation = isSnowing
        ? data.snow["3h"]
        : isRaining
        ? data.rain["3h"]
        : null;

      const weatherObject: CurrentWeatherData = {
        time: data.dt,
        description: data.weather[0].description,
        wind: data.wind.speed,
        humidity: data.main.humidity,
        temperature: data.main.temp,
        precipitation,
        icon: data.weather[0].icon,
      };

      setCurrentWeatherData(weatherObject);
    };

    getCurrentWeather();
  }, []);

  return currentWeatherData;
}