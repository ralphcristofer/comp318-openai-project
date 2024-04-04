// Load environment variable from the.env file
require('dotenv').config();

// Import express module to create HTTP server
const express = require('express');
// Import OpenAI SDK to interact with OpenAI API
const OpenAI = require('openai');

// Initialize Express app
const app = express();
// Using express.json middleware to parse JSON bodies in incoming requests
app.use(express.json());

// Initialize OpenAI API client using the API key from environment variable
const openai = new OpenAI(process.env.OPENAI_API_KEY);

// A POST route at '/generate' to handle text generation requests
app.post('/generate', async (req, res) => {
    // Extract the prompt from the request body
    const { prompt } = req.body;

    // Try-catch block for error handling
    try {
        // Calls the OpenAI API to generate completion based on the provided prompt
        const completion = await openai.chat.completions.create({
            messages: [
                { 
                    role: "system", 
                    content: prompt 
                }
            ],
            model: "gpt-3.5-turbo-1106", // GPT Model used
        });
        // Send the generated text back to client
        res.json({ result: completion.choices[0].message.content});
    } catch (error) {
        // Show the log error in the terminal
        console.error('Error calling OpenAI', error);
        res.status(500).send('Error processing your request');
    }
});

// Define the port number to listen
const PORT = 3001;

// Start the Express server on the specified port
app.listen(PORT, () => {
    // Log message when server starts successfully
    console.log('Server listening on http://localhost:${PORT}');
});