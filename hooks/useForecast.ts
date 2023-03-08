import { useEffect, useState } from "react";
import axios from "axios";

export default function useForecast(lat: number, lon: number) {
  const [forecastData, setForecastData] = useState(null);

  useEffect(() => {
    const getForecast = async () => {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${process.env.NEXT_PUBLIC_OPEN_WEATHER_KEY}&units=metric&cnt=5`
      );

      console.log("forecast data");
      console.log(response.data);
    };

    getForecast();
  }, [lat, lon]);

  return forecastData;
}
