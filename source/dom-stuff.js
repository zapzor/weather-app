import api from './api';

export const weatherInfo = document.querySelector('.weatherInfo');
export const cityName = document.querySelector('.cityName');

const citySearch = document.querySelector('.citySearch');
const searchButton = document.querySelector('.searchButton');

function submitSearch() {
  api.getWeather(citySearch.value);
}

searchButton.addEventListener('click', submitSearch);
