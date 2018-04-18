(function getCurrentDate() {
  //const WEEK_DAYS = [`monday`, `tuesday`, `wednesday`, `thursday`, `friday`, `saturday`, `sunday`];
  const WEEK_DAYS_SHORT = [`mon`, `tue`, `wed`, `thu`, `fri`, `sat`, `sun`];
  const MONTHS = [`jan`, `feb`, `mar`, `apr`, `may`, `jun`, `jul`, `aug`, `sep`, `oct`, `nov`, `dec`];

  const addZero = (current) => {
    return current = (current < 10) ? '0'+current : current;
  };

  const today = new Date();
  const currentDay = WEEK_DAYS_SHORT[today.getDay()-1]; //monday is 0!
  const currentDate = today.getDate();
  const currentMonth = MONTHS[today.getMonth()];
  const currentYear = today.getFullYear();

  const currentHH = today.getHours();
  const currentMM = today.getMinutes();
  const currentTime = `${addZero(currentHH)} : ${addZero(currentMM)}`;

  document.querySelector('.weather__time').innerHTML = currentTime;
  document.querySelector('.weather__week-day').innerHTML = `${currentDay}, `;
  document.querySelector('.weather__full-date').innerHTML = `${currentMonth} ${currentDate}`;
}());

function assignTemp(nodeEle, tempsArr) {
  nodeEle.forEach((el, index) => {
    el.innerHTML = `${tempsArr[index]}°`;
  });
}

function assignDay(nodeEle) {
  //const WEEK_DAYS_SHORT = [`mon`, `tue`, `wed`, `thu`, `fri`, `sat`, `sun`];
  const WEEK_DAYS = [`monday`, `tuesday`, `wednesday`, `thursday`, `friday`, `saturday`, `sunday`];
  const today = new Date().getDay();
  
  nodeEle.forEach((el, index) => {
    i = ((index + today) % 7)
    el.innerHTML = WEEK_DAYS[i];
  });
}

function convertUTC(date) {
  const today = new Date(date * 1000);
 
  //set the options to get rid of the seconds
  return today.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'});
}

const filterForecast = function(output, today, iteration) {
  return output.list.filter((li) => {
    const filteredDay = new Date(li.dt_txt).getDay();
    const forecastedDay = ((today + iteration) % 7);
    //const filteredTime = new Date(li.dt_txt).getHours();

    return ((filteredDay === forecastedDay));
    // && (filteredTime === 6 || filteredTime === 12 || filteredTime === 18));
  });
};

const getAverageTemp = function(arr, h1, h2, h3) {
  const avgTempArr = [];

  arr.forEach((el) => {
    const tempSum = el.filter((ele) => {
      const filteredTime = new Date(ele.dt_txt).getHours();
      return (filteredTime === h1 || filteredTime === h2 || filteredTime === h3);
    }).reduce((sum, elem) => {
      return (sum + elem.main.temp);
    },0);

    avgTempArr.push((tempSum/3).toFixed());
    //return ((tempSum/3).toFixed(1));
  });

  return avgTempArr;
}

const getAndAssignForecastDesc = function(arr, timeOfTheDay) {
  const forecastDescArr = [];
  const nodeEle = document.querySelectorAll('.forecast__desc'); 

  arr.forEach((el) => {
    forecastDescArr.push(el[timeOfTheDay].weather[0].description);
  });

  nodeEle.forEach((el, index) => {
    el.innerHTML = `${forecastDescArr[index]}`;
  });
}

function getWeather() {
  const cityName = document.getElementById('cityName').value;
  const currentTemp = document.querySelector('.weather__info--temp');
  const currentDesc = document.querySelector('.weather__info--desc');
  const sunrise = document.querySelector('.details__sunrise');
  const sunset = document.querySelector('.details__sunset');
  const humidity = document.querySelector('.details__humidity');
  const pressure = document.querySelector('.details__pressure');
  const myWeatherApi = `4876b17d9f9309045bb04bc91a1f6446`;

  document.querySelector('.weather__info--city').innerHTML = cityName;

  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=${myWeatherApi}`)
    .then((res) => res.json())
    .then((data) => {
      currentTemp.innerHTML = `${data.main.temp.toFixed()}<span class='degree-symbol'>°</span>`;
      currentDesc.innerHTML = data.weather[0].description;
      sunrise.innerHTML = convertUTC(data.sys.sunrise);
      sunset.innerHTML = convertUTC(data.sys.sunset);
      humidity.innerHTML = data.main.humidity;
      pressure.innerHTML = data.main.pressure.toFixed();
    });
}

function getWeatherForecast() {
  const cityName = document.getElementById('cityName').value;
  const nameOfTheDays = document.querySelectorAll('.forecast__day');
  const morningTempEle = document.querySelectorAll('.forecast__temp--morning');
  const dayTempEle = document.querySelectorAll('.forecast__temp--day');
  const eveningTempEle = document.querySelectorAll('.forecast__temp--evening');
  const myWeatherApi = `4876b17d9f9309045bb04bc91a1f6446`;

  fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&units=metric&appid=${myWeatherApi}`)
    .then((res) => res.json())
    .then((data) => {
      let morningTemperatures;
      let dayTemperatures;
      let eveningTemperatures;
      const today = new Date().getDay();
      const forecastDays = [];

      forecastDays[0] = filterForecast(data, today, 1);
      forecastDays[1] = filterForecast(data, today, 2);
      forecastDays[2] = filterForecast(data, today, 3);
      forecastDays[3] = filterForecast(data, today, 4);
      forecastDays[4] = filterForecast(data, today, 5);

      console.log(forecastDays);

      // systematic temperature recording
      morningTemperatures = getAverageTemp(forecastDays, 3, 6, 9);
      dayTemperatures = getAverageTemp(forecastDays, 9, 12, 15);
      eveningTemperatures = getAverageTemp(forecastDays, 18, 21, 0);

      getAndAssignForecastDesc(forecastDays, 4);

      assignTemp(morningTempEle, morningTemperatures);
      assignTemp(dayTempEle, dayTemperatures);
      assignTemp(eveningTempEle, eveningTemperatures);

      assignDay(nameOfTheDays);
    });
}

document.getElementById('submitButton').addEventListener('click', () => {
  getWeather();
  getWeatherForecast();
});