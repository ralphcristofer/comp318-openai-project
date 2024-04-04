require('dotenv').config();
const express = require('express');
const OpenAI = require('openai');

const app = express();
app.use(express.json());

const openai = new OpenAI(process.env.OPENAI_API_KEY);

app.post('/generate', async (req, res) => {
    const { prompt } = req.body;
    try {
        const completion = await openai.chat.completions.create({
            messages: [{ role: "system", content: prompt }],
            model: "gpt-3.5-turbo-1106",
        });
        res.json({ result: completion.choices[0].message.content});
    } catch (error) {
        console.error('Error calling OpenAI', error);
        res.status(500).send('Error processing your request');
    }
});

const PORT = 3001;

app.listen(PORT, () => {
    console.log('Server listening on http://localhost:${PORT}');
});