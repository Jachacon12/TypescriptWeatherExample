import { WeatherResponse } from '../model/weatherResponse';
import { response as data } from '../mock/response';

const fallbackData: WeatherResponse = JSON.parse(data);

export const fetchData = async (city: string): Promise<WeatherResponse> => {
  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=ac6f213887b95d0b8171b342e702e112&units=metric`
    );

    if (!response.ok) {
      // If response not ok, return fallback data
      return fallbackData;
    }

    const jsonData = await response.json();
    // Using type assertion to ensure jsonData matches WeatherResponse
    const weatherResponse = jsonData as WeatherResponse;

    return weatherResponse;
  } catch (error) {
    console.error('Error:', error);
    // Consolidating error handling
    return fallbackData;
  }
};
