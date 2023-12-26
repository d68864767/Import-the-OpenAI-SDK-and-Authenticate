// getCurrentWeather.js

// Import the fetch function from node-fetch module
import fetch from 'node-fetch';

// Define the function to get current weather
async function getCurrentWeather(latitude, longitude) {
  // Define the API endpoint with the provided latitude and longitude
  const apiEndpoint = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&hourly=temperature_2m`;

  // Fetch the data from the API
  const response = await fetch(apiEndpoint);

  // Check if the request was successful
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  // Parse the response data as JSON
  const data = await response.json();

  // Return the current weather data
  return data;
}

// Export the function
export default getCurrentWeather;
