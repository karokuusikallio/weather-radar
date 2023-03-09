export interface WeatherData {
  time: number;
  description: string;
  wind: number;
  humidity: number;
  temperature: number;
  precipitation: number | null;
  icon: string;
}

export enum PickerOptions {
  Tampere = "Tampere",
  Espoo = "Espoo",
  Jyväskylä = "Jyväskylä",
  Kuopio = "Kuopio",
  All = "All Cities",
}

export enum LoadingStates {
  idle,
  loading,
  finished,
}
