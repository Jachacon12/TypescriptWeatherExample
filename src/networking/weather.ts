import { WeatherResponse } from '../model/weatherResponse';
import { response as fallbackData } from '../mock/response';

// TODO: Create an async function with an argument called city to return the that of the endpoint

export const fetchData = async (city: string) => {
  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=ac6f213887b95d0b8171b342e702e112&units=metric`
  );

  if (!response.ok) {
    return JSON.parse(fallbackData);
  }
  if (response.ok) {
    return await response.json();
  }
};
