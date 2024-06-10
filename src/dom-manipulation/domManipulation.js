"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getCity = exports.updateInteface = exports.buttonClick = void 0;
var weatherResponse_1 = require("../model/weatherResponse");
// TODO: Create references for all the html elements
exports.buttonClick = document.getElementById('button-location');
var locationField = document.getElementById('weather-location-input');
var WeatherIconPng = document.getElementById('weather-icon');
var maxTempElement = document.getElementById('text-temp-max');
var minTempElement = document.getElementById('text-temp-min');
var humidityElement = document.getElementById('text-humidity');
var windElement = document.getElementById('text-wind');
var locationElement = document.getElementById('location-text');
var dayElement = document.getElementById('date-dayname');
var dateElement = document.getElementById('date-day');
var tempElement = document.getElementById('weather-temp');
var descElement = document.getElementById('weather-desc');
// TODO: Create the logic of the function
var updateInteface = function (weather) {
    var _a;
    if (maxTempElement)
        maxTempElement.innerText = "".concat(weather.main.temp_max, " \u00BAC");
    if (minTempElement)
        minTempElement.innerText = "".concat(weather.main.temp_min, " \u00BAC");
    if (humidityElement)
        humidityElement.innerText = "".concat(weather.main.humidity, "%");
    if (windElement)
        windElement.innerText = "".concat(weather.wind.speed, " m/s");
    if (locationElement)
        locationElement.innerText = "".concat(weather.name);
    if (dayElement)
        dayElement.innerText = "".concat(getDayOfWeek());
    if (dateElement)
        dateElement.innerText = "".concat(getDate());
    if (dateElement)
        dateElement.innerText = "".concat(getDate());
    if ((_a = weather === null || weather === void 0 ? void 0 : weather.weather[0]) === null || _a === void 0 ? void 0 : _a.icon)
        changeWeatherIcon(weather.weather[0].icon);
    if (tempElement)
        tempElement.innerText = "".concat(weather.main.temp, " \u00BAC");
    if (descElement)
        descElement.innerText = "".concat(weather.weather[0].description);
};
exports.updateInteface = updateInteface;
// TODO: Get the city from the input element
function getCity() {
    if (locationField) {
        return locationField.value;
    }
    return '-';
}
exports.getCity = getCity;
function getDayOfWeek() {
    var day = new Date();
    return weatherResponse_1.DayOfWeek[day.getDay()];
}
function getDate() {
    var date = new Date();
    return date.toLocaleDateString('es-ES');
}
function changeWeatherIcon(weatherImageRef) {
    var _a;
    var weatherMap = [weatherImageRef];
    validateImage(weatherMap);
    var mappedWeather = (_a = weatherMap.map(function (weather) { return weatherResponse_1.WeatherIcon[weather]; })[0]) !== null && _a !== void 0 ? _a : weatherResponse_1.WeatherIcon['01d'];
    if (typeof mappedWeather[0] === 'string') {
        if (WeatherIconPng)
            WeatherIconPng.src = mappedWeather;
    }
}
function validateImage(values) {
    if (!values.every(isValidImage)) {
        throw Error('invalid image');
    }
}
function isValidImage(value) {
    return value in weatherResponse_1.WeatherIcon;
}
