// Style import
import './styles/main.scss';

import { response } from './mock/response';
// Import the API request method
import { fetchData } from './networking/weather';
import {
  buttonClick,
  getCity,
  updateInteface,
} from './dom-manipulation/domManipulation';

const defaultCity = 'London';

// Initialize app
updateInteface(JSON.parse(response));

// Add an event listener to the button
buttonClick?.addEventListener('click', async () => {
  // Get new value of location input, fallback to defaultCity if undefined
  const city = getCity();
  const newCity = city.length > 0 && city !== '-' ? city : defaultCity;

  // Create an async function to call the API method
  // fetch new data base on the value
  const newResponse = await fetchData(newCity)
    .then(data => {
      return data;
    })
    .catch(error => {
      console.error('Error:', error);
    });

  // update interface based response
  if (newResponse) updateInteface(newResponse);
});
