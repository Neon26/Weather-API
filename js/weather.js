const apiKey = ''
const apiCall = 'https://api.openweathermap.org/data/2.5/weather?q='
const weatherIcon = 'http://openweathermap.org/img/w/'

async function getWeather(city) {
    const response = await fetch(apiCall + city + '&appid=' + apiKey)
    const data = await response.json()
    return data
}


        
getWeather('Dallas').then(data => {
    console.log(data)
    console.log(getHighTemp(data))
    console.log(getLowTemp(data))
    console.log(getWeatherIcon(data))
    console.log(getForecast(data))
    console.log(getHumidity(data))
}).catch(err => {
    console.log(err)
}).finally(() => {
    console.log('finally')
})

const submitButton = document.getElementById('submit')
submitButton.addEventListener('click', async function(e) {
    e.preventDefault()
    const city = document.getElementById('city').value
    const data = await getWeather(city)
    console.log(data)
    document.getElementById('high-temp').innerHTML = getHighTemp(data)
    document.getElementById('low-temp').innerHTML = getLowTemp(data)
    document.getElementById('weather-icon').innerHTML =`<img src=${getWeatherIcon(data)}>`
    document.getElementById('forecast').innerHTML = getForecast(data)
    document.getElementById('humidity').innerHTML = getHumidity(data)
    document.getElementById('description').innerHTML = getdescription(data)
    document.getElementById('city').innerHTML = getCity(data)
    document.getElementById('country').innerHTML = getCountry(data)
} )

function convertToF(temp) {
    return Math.round((temp * 9/5) + 32)
}
function getHighTemp(data) {
    console.log(convertToF(data.main.temp_max - 273.15))
    return convertToF(data.main.temp_max - 273.15)
}

function getLowTemp(data) {
    console.log(convertToF(data.main.temp_min - 273.15))
    return convertToF(data.main.temp_min - 273.15)
}

 function  getWeatherIcon(data) {
    console.log(data.weather[0].icon)
    iconApi = weatherIcon + data.weather[0].icon + '.png'
    return iconApi
}



function getForecast(data) {
    console.log(data.weather[0].description)
    return data.weather[0].description    
}

function getHumidity(data) {
    console.log(data.main.humidity)
    return data.main.humidity    
}

function getdescription(data) {
    console.log(data.weather[0].description)
    return data.weather[0].description
}
function getCity(data) {
    console.log(data.name)
    return data.name
}
function getCountry(data) {
    console.log(data.sys.country)
    return data.sys.country
}

