import React, { useState } from "react";

// Code Component is responsible for interfacing with OpenAI API to generate codes based on user input
function Code() {
  // useState hook to manage the input text from the user
  const [inputText, setInputText] = useState('');
  // userState hook to store the output text received from the OpenAI API
  const [outputText, setOutputText] = useState('');

  // Event hanlder for input text change
  const handleInputChange = (e) => {
    setInputText(e.target.value);
  };

  // Event handler for button click to trigger the code
  const handleButtonClick = async () => {
    // Send POST request to backend '/code' endpoint
    const respose = await fetch('/code', {
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
    // Update the outputText state with the generated code
    setOutputText(data.result);
  };

  // Render the Summarizer component UI
  return (
    <div className="container">
      <h1>Ask something about coding</h1>
      <textarea value={inputText} onChange={handleInputChange} className="input-field" style={{height: '100px', width: '400px'}} />
      <br/>
      <button onClickCapture={handleButtonClick} className="button">Code It</button>
      <div className="output">
        <p>Output:</p>
        <p>{outputText}</p>
      </div>
    </div>
  );
};

export default Code;