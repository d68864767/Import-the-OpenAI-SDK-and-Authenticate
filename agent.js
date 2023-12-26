// agent.js

// Import the necessary modules and functions
import openai from './openai.js';
import tools from './tools.js';
import messages from './messages.js';
import availableTools from './availableTools.js';

// Define the agent function
async function agent(userInput) {
  // Push the user input to the messages array
  messages.push({
    role: "user",
    content: userInput,
  });

  // Use the openai.chat.completions.create method to get responses from OpenAI
  const response = await openai.chat.completions.create({
    model: "text-davinci-002",
    messages: messages,
    max_tokens: 150,
  });

  // Check if there are any tool calls in the response
  if (response.data.choices[0].finish_reason === "stop") {
    // If there are no tool calls, return the response
    return response.data.choices[0].message.content;
  } else {
    // If there are tool calls, execute the appropriate function
    const toolCall = response.data.choices[0].message.tool_call;

    // Get the function to call and the arguments to pass
    const functionToCall = toolCall.function;
    const args = toolCall.args;

    // Call the function and get the result
    const result = await availableTools[functionToCall](...args);

    // Return the result
    return result;
  }
}

// Export the agent function
export default agent;
