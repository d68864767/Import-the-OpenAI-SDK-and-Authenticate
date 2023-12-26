// openai.js

// Import the OpenAI SDK
import OpenAI from "openai";

// Authenticate with OpenAI using the API key stored as an environment variable
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
  dangerouslyAllowBrowser: true,
});

export default openai;
