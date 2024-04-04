import React, { useState } from "react";

// Generate Component is responsible for interfacing with OpenAI API to generate text based on user input
function Generate() {
  // useState hook to manage the input text from the user
  const [inputText, setInputText] = useState('');
  // userState hook to store the output text received from the OpenAI API
  const [outputText, setOutputText] = useState('');

  // Event hanlder for input text change
  const handleInputChange = (e) => {
    setInputText(e.target.value);
  };

  // Event handler for button click to trigger the generation
  const handleButtonClick = async () => {
    // Send POST request to backend '/generate' endpoint
    const respose = await fetch('/generate', {
      method: 'POST',
      headers: {
        // Set content type to JSON
        'Content-Type': 'application/json',
      },
      // Send the user's text input as the request body
      body: JSON.stringify({ prompt: inputText}),
    });
    // Parse the JSON response from the server
    const data = await respose.json();
    // Update the outputText state with the generated text
    setOutputText(data.result);
  };

  // Render the Generate component UI
  return (
    <div className="container">
      <h1>Generate</h1>
      <input type="text" value={inputText} onChange={handleInputChange} className="input-field" />
      <button onClickCapture={handleButtonClick} className="button">Generate</button>
      <div className="output">
        <p>Output:</p>
        <p>{outputText}</p>
      </div>
    </div>
  );
};

export default Generate;