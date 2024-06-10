// Style import
import './styles/main.scss';

import { response } from './mock/response';
// Import the API request method
import {
  buttonClick,
  getCity,
  updateInteface,
} from './dom-manipulation/domManipulation';

// Add an event listener to the button

// Create an async function to call the API method

// Add event listener to button
buttonClick?.addEventListener('click', async => {
  getCity();
});
updateInteface(JSON.parse(response));
