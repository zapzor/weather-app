import 'regenerator-runtime/runtime';

export default async function getWeather(input = 'London') {
  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${input}&APPID=b0b37a1ff234bf2b080e8e8d4feb5251`
  );
  const weatherData = await response.json();
  console.log(weatherData.name, weatherData.weather[0].description);
}
