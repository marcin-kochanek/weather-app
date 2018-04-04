document.getElementById('submitButton').addEventListener('click', getWeather);

function getWeather() {
  let cityName = document.getElementById('cityName').value;
  
  document.querySelector('.current-weather__details--city').innerHTML = cityName;

  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=4876b17d9f9309045bb04bc91a1f6446`)
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      console.log(`Temperatura: ${data.main.temp}`);
      console.log(`Opis: ${data.weather[0].main}`);

      document.querySelector('.current-weather__details--temp').innerHTML = data.main.temp;
      document.querySelector('.current-weather__details--desc').innerHTML = data.weather[0].main;
      document.querySelector('.forecast__sunrise').innerHTML = data.sys.sunrise;
      document.querySelector('.forecast__sunset').innerHTML = data.sys.sunset;
      document.querySelector('.forecast__humidity').innerHTML = data.main.humidity;
      document.querySelector('.forecast__pressure').innerHTML = data.main.pressure;
    });

    
};