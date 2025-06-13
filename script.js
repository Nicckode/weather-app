const API_KEY = 'dd662f5daad9458693c131746251306';
const searchBtn = document.getElementById('searchBtn');
const cityInput = document.getElementById('cityInput');

searchBtn.addEventListener('click', () => {
  const city = cityInput.value.trim();
  if (city) {
    fetchWeather(city);
  }
});

function fetchWeather(city) {
  const url = `https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${city}`;

  fetch(url)
    .then(res => res.json())
    .then(data => {
      if (data.error) {
        alert("City not found. Try again.");
        return;
      }

      document.getElementById('cityName').textContent = data.location.name + ', ' + data.location.country;
      document.getElementById('weatherIcon').src = "https:" + data.current.condition.icon;
      document.getElementById('weatherCondition').textContent = data.current.condition.text;
      document.getElementById('temperature').textContent = data.current.temp_c;
      document.getElementById('feelsLike').textContent = data.current.feelslike_c;
      document.getElementById('humidity').textContent = data.current.humidity;
      document.getElementById('wind').textContent = data.current.wind_kph;

      document.getElementById('weatherCard').classList.remove('hidden');
    })
    .catch(err => {
      alert("Something went wrong. Please try again.");
      console.error(err);
    });
}
