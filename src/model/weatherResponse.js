"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DayOfWeek = exports.WeatherIcon = void 0;
var cloudy_png_1 = require("../images/cloudy.png");
var sunny_png_1 = require("../images/sunny.png");
var mostly_cloudy_png_1 = require("../images/mostly-cloudy.png");
var clear_cloudy_png_1 = require("../images/clear-cloudy.png");
var showers_png_1 = require("../images/showers.png");
var drizzle_png_1 = require("../images/drizzle.png");
var thunderstroms_png_1 = require("../images/thunderstroms.png");
var snow_png_1 = require("../images/snow.png");
var foggy_png_1 = require("../images/foggy.png");
exports.WeatherIcon = {
    '01d': sunny_png_1.default,
    '01n': sunny_png_1.default,
    '02d': clear_cloudy_png_1.default,
    '02n': clear_cloudy_png_1.default,
    '03d': cloudy_png_1.default,
    '03n': cloudy_png_1.default,
    '04d': mostly_cloudy_png_1.default,
    '04n': mostly_cloudy_png_1.default,
    '09d': showers_png_1.default,
    '09n': showers_png_1.default,
    '10d': drizzle_png_1.default,
    '10n': drizzle_png_1.default,
    '11d': thunderstroms_png_1.default,
    '11n': thunderstroms_png_1.default,
    '13d': snow_png_1.default,
    '13n': snow_png_1.default,
    '50d': foggy_png_1.default,
    '50n': foggy_png_1.default,
};
exports.DayOfWeek = [
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
    'Sunday',
];
