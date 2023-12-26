// app.js

// Import the necessary modules and functions
import agent from './agent.js';

// Define a sample user input
const userInput = "Where am I located right now?";

// Define the main function
async function main() {
  // Run the agent function with the sample input
  const result = await agent(userInput);

  // Log the result
  console.log(result);

  // Loop for continued interaction
  for (let i = 0; i < 5; i++) {
    // Get a new user input
    const newUserInput = prompt("What do you want to ask next?");

    // Run the agent function with the new user input
    const newResult = await agent(newUserInput);

    // Log the new result
    console.log(newResult);
  }
}

// Run the main function
main().catch(console.error);
