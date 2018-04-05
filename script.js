document.getElementById('submitButton').addEventListener('click', () => {
  getWeather();
  getWeatherForecast();
});

(function getCurrentDate() {
  const WEEK_DAYS = [`monday`, `tuesday`, `wednesday`, `thursday`, `friday`, `saturday`, `sunday`];
  const MONTHS = [`jan`, `feb`,`mar`,`apr`,`may`];

  let addZero = (current) => {
    return current = (current < 10) ? '0'+current : current;
  };

  let today = new Date();
  console.log(today);
  let currentDay = WEEK_DAYS[today.getDay()-1]; //monday is 0!
  let currentDate = today.getDate();
  let currentMonth = MONTHS[today.getMonth()];

  let currentHH = today.getHours();
  let currentMM = today.getMinutes();
  let currentTime = `${addZero(currentHH)}:${addZero(currentMM)}`;

  document.querySelector('.current-weather__day').innerHTML = currentDay;
  document.querySelector('.current-weather__month').innerHTML = `${currentMonth} ${currentDate}`;
  document.querySelector('.current-weather__time').innerHTML = currentTime;
}());

function convertUTC(date) {
  let today = new Date(date * 1000);
 
  //set the options to get rid of the seconds
  return today.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'});
}

function getAverageTemp(arr, h1, h2, h3) {
  let newArr = [];

  arr.forEach((el) => {
    let tempSum = el.filter((ele) => {
      const filteredTime = new Date(ele.dt_txt).getHours();
      return (filteredTime === h1 || filteredTime === h2 || filteredTime === h3);
    }).reduce((sum, elem) => {
      return (sum + elem.main.temp);
    },0);

    newArr.push((tempSum/3).toFixed(1));
    //return ((tempSum/3).toFixed(1));
  });

  return newArr;
}

function getWeather() {
  let cityName = document.getElementById('cityName').value;
  
  document.querySelector('.current-weather__details--city').innerHTML = cityName;

  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=4876b17d9f9309045bb04bc91a1f6446`)
    .then((res) => res.json())
    .then((data) => {

      document.querySelector('.current-weather__details--temp').innerHTML = `${data.main.temp.toFixed(1)}°C`;
      document.querySelector('.current-weather__details--desc').innerHTML = data.weather[0].main;
      document.querySelector('.forecast__sunrise').innerHTML = convertUTC(data.sys.sunrise);
      document.querySelector('.forecast__sunset').innerHTML = convertUTC(data.sys.sunset);
      document.querySelector('.forecast__humidity').innerHTML = data.main.humidity;
      document.querySelector('.forecast__pressure').innerHTML = data.main.pressure.toFixed();
    });
}

function getWeatherForecast() {
  let cityName = document.getElementById('cityName').value;

  fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&units=metric&appid=4876b17d9f9309045bb04bc91a1f6446`)
    .then((res) => res.json())
    .then((data) => {
      let today = new Date().getDay();
      let forecastDays = [];

      let filterForecast = function(today, iteration) {
        return data.list.filter((li) => {
          const filteredDay = new Date(li.dt_txt).getDay();
          const forecastedDay = (today + iteration)%7;
          //const filteredTime = new Date(li.dt_txt).getHours();

          return ((filteredDay === forecastedDay));
          // && (filteredTime === 6 || filteredTime === 12 || filteredTime === 18));
        });
      };

      forecastDays[0] = filterForecast(today, 1);
      forecastDays[1] = filterForecast(today, 2);
      forecastDays[2] = filterForecast(today, 3);

      // systematic weather recording three times per day: 06-18 for daily temp
      let dayTemp = getAverageTemp(forecastDays, 6, 12, 18);
      let nightTemp = getAverageTemp(forecastDays, 0, 3, 21);

      console.log(dayTemp, nightTemp);
    });
}
