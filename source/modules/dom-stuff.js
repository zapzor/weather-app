import api from './api';

function dom(weatherData) {
  const weatherInfo = document.querySelector('.weatherInfo');
  const cityName = document.querySelector('.cityName');
  const citySearch = document.querySelector('.citySearch');
  const searchButton = document.querySelector('.searchButton');

  cityName.textContent = weatherData.name;
  weatherInfo.textContent = weatherData.weather[0].main;

  function submitSearch() {
    api.getWeather(citySearch.value);
  }

  searchButton.addEventListener('click', submitSearch);
}

export default dom;
