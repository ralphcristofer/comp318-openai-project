import React, { useState } from "react";

function App() {
  const [inputText, setInputText] = useState('');
  const [outputText, setOutputText] = useState('');

  const handleInputChange = (e) => {
    setInputText(e.target.value);
  };

  const handleButtonClick = async () => {
    const respose = await fetch('/generate', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ prompt: inputText}),
    });
    const data = await respose.json();
    setOutputText(data.result);
  };

  return (
    <div className="container">
      <h1>COMP318-402-W24 Group 3 OpenAI Generator</h1>
      <input type="text" value={inputText} onChange={handleInputChange} className="input-field" />
      <button onClickCapture={handleButtonClick} className="button">Generate</button>
      <div className="output">
        <p>Output:</p>
        <p>{outputText}</p>
      </div>
    </div>
  );
};

export default App;