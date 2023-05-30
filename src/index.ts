// Style import
import "./styles/main.scss";
import {
  buttonClick,
  getCity,
  updateInteface,
  clearInterface,
  showSpinner,
  hideSpinner,
} from "./dom-manipulation/domManipulation";
import { getWeather, getWeatherPromises } from "./networking/weather";

export const displayWeather = () => {
  let city = getCity();
  if (city !== "") {
    showSpinner();
    getWeatherPromises(city)
      .then((response) => {
        updateInteface(response);
      })
      .catch((_) => {
        clearInterface();
        alert("Error, no se encontró ciudad, intentelo de nuevo");
      })
      .finally(() => {
        hideSpinner();
        (<HTMLInputElement>buttonClick).disabled = false;
      });
  }
};

if (buttonClick) buttonClick.addEventListener("click", displayWeather);
