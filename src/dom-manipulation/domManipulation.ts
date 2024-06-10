import {
  DayOfWeek,
  WeatherIcon,
  WeatherIcontype,
  WeatherResponse,
} from '../model/weatherResponse';

// TODO: Create references for all the html elements
export const buttonClick = document.getElementById('button-location');
const locationField = document.getElementById('weather-location-input');
const WeatherIconPng = document.getElementById('weather-icon');
const maxTempElement = document.getElementById('text-temp-max');
const minTempElement = document.getElementById('text-temp-min');
const humidityElement = document.getElementById('text-humidity');
const windElement = document.getElementById('text-wind');
const locationElement = document.getElementById('location-text');
const dayElement = document.getElementById('date-dayname');
const dateElement = document.getElementById('date-day');
const tempElement = document.getElementById('weather-temp');
const descElement = document.getElementById('weather-desc');

// TODO: Create the logic of the function
export const updateInteface = (weather: WeatherResponse): void => {
  if (maxTempElement) maxTempElement.innerText = `${weather.main.temp_max} ºC`;
  if (minTempElement) minTempElement.innerText = `${weather.main.temp_min} ºC`;
  if (humidityElement) humidityElement.innerText = `${weather.main.humidity}%`;
  if (windElement) windElement.innerText = `${weather.wind.speed} m/s`;
  if (locationElement) locationElement.innerText = `${weather.name}`;
  if (dayElement) dayElement.innerText = `${getDayOfWeek()}`;
  if (dateElement) dateElement.innerText = `${getDate()}`;
  if (dateElement) dateElement.innerText = `${getDate()}`;
  if (weather?.weather[0]?.icon) changeWeatherIcon(weather.weather[0].icon);
  if (tempElement) tempElement.innerText = `${weather.main.temp} ºC`;
  if (descElement) descElement.innerText = `${weather.weather[0].description}`;
};

// TODO: Get the city from the input element
export function getCity(): string {
  if (locationField) {
    return (locationField as HTMLInputElement).value;
  }
  return '-';
}

function getDayOfWeek(): string {
  let day = new Date();
  return DayOfWeek[day.getDay()];
}

function getDate(): string {
  let date = new Date();
  return date.toLocaleDateString('es-ES');
}

function changeWeatherIcon(weatherImageRef: string) {
  const weatherMap = [weatherImageRef];
  validateImage(weatherMap);
  const mappedWeather =
    weatherMap.map(weather => WeatherIcon[weather])[0] ?? WeatherIcon['01d'];
  if (typeof mappedWeather[0] === 'string') {
    if (WeatherIconPng)
      (WeatherIconPng as HTMLImageElement).src = mappedWeather;
  }
}

function validateImage(values: string[]): asserts values is WeatherIcontype[] {
  if (!values.every(isValidImage)) {
    throw Error('invalid image');
  }
}

function isValidImage(value: string): value is WeatherIcontype {
  return value in WeatherIcon;
}
