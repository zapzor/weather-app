import 'regenerator-runtime/runtime';
import { weatherInfo, cityName } from './dom-stuff';

export default async function getWeather(input) {
  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${input}&APPID=b0b37a1ff234bf2b080e8e8d4feb5251`
  );
  const weatherData = await response.json();

  cityName.textContent = weatherData.name;
  weatherInfo.textContent = weatherData.weather[0].main;
}
