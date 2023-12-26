// getLocation.js

// Import the necessary modules
import axios from 'axios';

// Define the getLocation function
async function getLocation() {
  try {
    // Make a request to the IP API
    const response = await axios.get('https://ipapi.co/json/');

    // Return the location data
    return response.data;
  } catch (error) {
    // Log any errors
    console.error(`Error: ${error}`);
  }
}

// Export the getLocation function
export default getLocation;
