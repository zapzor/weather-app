import 'regenerator-runtime/runtime';
import { weatherInfo, cityName } from './dom-stuff';

const api = (() => {
  async function getWeather(input = 'London') {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${input}&APPID=b4ee885eaec9ea05cd43fb9f9d11a428`
    );
    const weatherData = await response.json();

    cityName.textContent = weatherData.name;
    weatherInfo.textContent = weatherData.weather[0].main;
  }
  return { getWeather };
})();

export default api;
