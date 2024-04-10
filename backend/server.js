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

// A POST route at '/code' to handle coding requests
app.post('/code', async (req, res) => {
    // Extract the prompt from the request body
    const { prompt } = req.body;

    // Try-catch block for error handling
    try {
        // Calls the OpenAI API to generate completion based on the provided prompt
        const completion = await openai.chat.completions.create({
            messages: [
                {
                    role: "system",
                    content: "You are an assistant that specializes in generating programming code. You should avoid discussing non-technical topics."
                },
                { 
                    role: "user", 
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


// A POST route at '/mood' to handle mood requests
app.post('/mood', async (req, res) => {
    // Extract the prompt from the request body
    const { prompt } = req.body;

    // Try-catch block for error handling
    try {
        // Calls the OpenAI API to generate completion based on the provided prompt
        const completion = await openai.chat.completions.create({
            messages: [
                {
                    role: "system",
                    content: "You are an assistant that communicates using only emojis. Translate the user's feelings and sentiments into emojis without using regular text."
                },
                { 
                    role: "user", 
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


// A POST route at '/paraphraser' to handle paraphrasing requests
app.post('/paraphraser', async (req, res) => {
    // Extract the prompt from the request body
    const { prompt } = req.body;

    // Try-catch block for error handling
    try {
        // Calls the OpenAI API to generate completion based on the provided prompt
        const completion = await openai.chat.completions.create({
            messages: [
                {
                    role: "system",
                    content: "You are an assistant that specializes in paraphrasing the given information. You should avoid discussing non-paraphrasing related topics."
                },
                { 
                    role: "user", 
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


// A POST route at '/summarizer' to handle summarizing of text
app.post('/summarizer', async (req, res) => {
    // Extract the prompt from the request body
    const { prompt } = req.body;

    // Try-catch block for error handling
    try {
        // Calls the OpenAI API to generate completion based on the provided prompt
        const completion = await openai.chat.completions.create({
            messages: [
                {
                    role: "system",
                    content: "You are an assistant that specializes in summarizing general information and essays. You should avoid discussing programming, coding, or technical details related to software development."
                },
                { 
                    role: "user", 
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