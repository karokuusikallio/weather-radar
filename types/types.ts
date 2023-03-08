export interface CurrentWeatherData {
  time: number;
  description: string;
  wind: number;
  humidity: number;
  temperature: number;
  precipitation: number | null;
  icon: string;
}
