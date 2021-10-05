import 'regenerator-runtime/runtime';
import dom from './dom-stuff';

const api = (() => {
  async function getWeather(input = 'London') {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${input}&APPID=b4ee885eaec9ea05cd43fb9f9d11a428`
    );
    const weatherData = await response.json();

    dom(weatherData);
  }
  return { getWeather };
})();

export default api;
