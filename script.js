 // CHANGING THE SCREENS
let turnOffRequired = function() {
  let citySelektor = document.getElementById("cityName");
  let destinationElement = document.getElementById("destination");
  let locationElement = document.getElementById("location");

  if (destinationElement.checked) {
    citySelektor.required = true;
  } else if (locationElement.checked) {
    citySelektor.required = false;
  }
};

document.getElementById('submitButton').addEventListener('click', () => {
  turnOffRequired();

  let welcomeScreen = document.getElementsByClassName('search-menu-wrapper');
  welcomeScreen[0].className += " inactive";
});

document.getElementsByClassName("weather__search-button")[0].addEventListener('click', () => {
  let welcomeScreen = document.getElementsByClassName('search-menu-wrapper inactive');
  welcomeScreen[0].className = "search-menu-wrapper";
});

// GEOLOCATION
function getCurrentLocation() {
  const geo = navigator.geolocation;

  if (geo) {
    console.log(`Usługa geolokalizacji jest dostępna!`);

    geo.getCurrentPosition((location) => {
      const myWeatherApi = `4876b17d9f9309045bb04bc91a1f6446`;
      const lat = location.coords.latitude;
      const lon = location.coords.longitude;

      const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${myWeatherApi}`;
      const forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=metric&appid=${myWeatherApi}`;

      codeLatLng(lat, lon);
      getWeather(weatherUrl);
      getWeatherForecast(forecastUrl);

      console.log(`Twoje współrzędne to: ${lat}, ${lon}`);
    });
  } else {
    console.log(`Usługa geolokalizacji nie jest dostępna`);
  }
};

function codeLatLng(lat, lng) {
  const latlng = new google.maps.LatLng(lat, lng);
  const geocoder = new google.maps.Geocoder();

  geocoder.geocode({'location': latlng}, function(results, status) {
    if (status == google.maps.GeocoderStatus.OK) {
      if (results[1]) {
        const city = results[1].address_components[3].long_name;
        //formatted address
        document.querySelector('.weather__info--city').innerHTML = city;
        console.log(`Your address: ${results[0].formatted_address}`);

        /*
        //find city name
          for (let i=0; i < results[0].address_components.length; i++) {
            for (let b=0; b < results[0].address_components[i].types.length; b++) {
              //there are different types that might hold a city admin_area_lvl_1/administrative_area_level_2 usually does in come cases looking for sublocality type will be more appropriate
              if (results[0].address_components[i].types[b] == "locality") {
                //this is the object you are looking for
                city = results[0].address_components[i];
                break;
              }
            }
          }
          document.querySelector('.weather__info--city').innerHTML = city.long_name;*/

      } else {
        console.log("No results found");
      }
    } else {
      console.log("Geocoder failed due to: " + status);
    }
  });
};

// WEATHER LOGIC
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
    i = ((index + today) % 7);
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
    //if there is no forecast data for 12 noon, take the previous temperature reading (at 9 am)
    if (el[timeOfTheDay]) {
      forecastDescArr.push(el[timeOfTheDay].weather[0].description);
    } else {
      forecastDescArr.push(el[timeOfTheDay-1].weather[0].description);
    }
    
  });

  nodeEle.forEach((el, index) => {
    el.innerHTML = `${forecastDescArr[index]}`;
  });
}

const getWeather = function(urlApi) {
  const cityName = document.getElementById('cityName').value;
  const currentTemp = document.querySelector('.weather__info--temp');
  const currentDesc = document.querySelector('.weather__info--desc');
  const sunrise = document.querySelector('.details__sunrise');
  const sunset = document.querySelector('.details__sunset');
  const humidity = document.querySelector('.details__humidity');
  const pressure = document.querySelector('.details__pressure');
  
  const storedWeatherData = fetch(urlApi)
    .then((res) => res.json())
    .then((data) => {
      currentTemp.innerHTML = `${data.main.temp.toFixed()}<span class='degree-symbol'>°</span>`;
      currentDesc.innerHTML = data.weather[0].description;
      sunrise.innerHTML = convertUTC(data.sys.sunrise);
      sunset.innerHTML = convertUTC(data.sys.sunset);
      humidity.innerHTML = data.main.humidity;
      pressure.innerHTML = data.main.pressure.toFixed();

      return data.weather[0].icon;
    });

    console.log(storedWeatherData);

  getWeatherSVGIcon(storedWeatherData);
}

const getWeatherForecast = function(urlApi) {
  const nameOfTheDays = document.querySelectorAll('.forecast__day');
  const morningTempEle = document.querySelectorAll('.forecast__temp--morning');
  const dayTempEle = document.querySelectorAll('.forecast__temp--day');
  const eveningTempEle = document.querySelectorAll('.forecast__temp--evening');
  const myWeatherApi = `4876b17d9f9309045bb04bc91a1f6446`;

  const storedForecastData = fetch(urlApi)
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

      // systematic temperature recording
      morningTemperatures = getAverageTemp(forecastDays, 3, 6, 9);
      dayTemperatures = getAverageTemp(forecastDays, 9, 12, 15);
      eveningTemperatures = getAverageTemp(forecastDays, 18, 21, 0);

      // number '4' in the below function means 12 noon
      getAndAssignForecastDesc(forecastDays, 4);

      assignTemp(morningTempEle, morningTemperatures);
      assignTemp(dayTempEle, dayTemperatures);
      assignTemp(eveningTempEle, eveningTemperatures);

      assignDay(nameOfTheDays);
    });
}

//getCurrentLocation();
document.getElementById('submitButton').addEventListener('click', () => {
  const locationInput = document.getElementById('location');
  const cityName = document.getElementById('cityName').value;
  const myWeatherApi = `4876b17d9f9309045bb04bc91a1f6446`;
  const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=${myWeatherApi}`;
  const forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&units=metric&appid=${myWeatherApi}`;

  if (!locationInput.checked) {
    getWeather(weatherUrl);
    getWeatherForecast(forecastUrl);
    document.querySelector('.weather__info--city').innerHTML = cityName;
  } else {
    getCurrentLocation();
  }
});

////////////////////////

const getWeatherSVGIcon = function(weatherDataIcon) {
  const sun =
    `<svg width="235" height="235" xmlns="http://www.w3.org/2000/svg" xmlns:svg="http://www.w3.org/2000/svg">
      <g>
        <title>Sunlights</title>
        <circle stroke="#000000" id="svg_22" r="100" cy="120.5" cx="106.5" opacity="0.3" fill-opacity="0.8" stroke-opacity="0.8" stroke-linecap="null" stroke-linejoin="null" stroke-dasharray="null" stroke-width="0" fill="#f9fc55"/>
        <circle id="svg_1" stroke="#000000" r="80" cy="120.5" cx="106.5" opacity="0.3" fill-opacity="0.8" stroke-opacity="0.8" stroke-linecap="null" stroke-linejoin="null" stroke-dasharray="null" stroke-width="0" fill="#f9fc55"/>
      </g>
      <g>
        <title>Sun</title>
        <circle stroke="#000000" id="svg_8" r="60" cy="120.5" cx="106.5" opacity="0.95" stroke-opacity="0.8" stroke-linecap="null" stroke-linejoin="null" stroke-dasharray="null" stroke-width="0" fill="#f9fc55"/>
        <ellipse fill="#f9fc55" stroke="#000000" stroke-width="0" stroke-dasharray="null" stroke-linejoin="null" stroke-linecap="null" stroke-opacity="0.8" cx="-349.5" cy="51" id="svg_2"/>
      </g>
    </svg>`;

  const icons = {
    '01d': sun
  }

  const weatherIconElement = document.querySelector('.weather__icon');
  console.log(weatherIconElement);

  if (typeof weatherDataIcon === 'object') {
    console.log(icons[weatherDataIcon]);
    console.log(weatherDataIcon);
    return icons[weatherDataIcon];
  }
}
