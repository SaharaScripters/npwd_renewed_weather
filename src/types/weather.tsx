export interface WeatherData {
  code: string;
  label: string;
  hasRain?: boolean;
  hasSnow?: boolean;
  windSpeed?: number;
  windDirection?: number;
  startIn?: number;
}

export interface WeatherListProps {
  weatherDataList: WeatherData[];
}
