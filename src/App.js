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
        'Content-Type:' : 'application/json',
      },
      body: JSON.stringify({ prompt: inputText}),
    });
    const data = await respose.json();
    setOutputText(data.result);
  };

  return (
    <div>
      <input type="text" value={inputText} onChange={handleButtonClick} />
      <button onClickCapture={handleButtonClick}></button>
      <p>Output: {outputText}</p>
    </div>
  );
};

export default App;