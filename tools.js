// tools.js

// Import the functions
import getLocation from './getLocation.js';
import getCurrentWeather from './getCurrentWeather.js';

// Define the tools array
const tools = [
  {
    type: "function",
    function: {
      name: "getLocation",
      description: "Get the user's location based on their IP address",
      parameters: {},
    },
  },
  {
    type: "function",
    function: {
      name: "getCurrentWeather",
      description: "Get the current weather in a given location",
      parameters: {
        latitude: {
          type: "number",
          description: "The latitude of the location",
        },
        longitude: {
          type: "number",
          description: "The longitude of the location",
        },
      },
    },
  },
];

// Export the tools array
export default tools;
