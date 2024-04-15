/*
Comp 318 sec 402
Author: Ralph
Modified by: Anne
*/

import React from 'react';



function HomePage() {
    return (
    <div>
        <header></header>
        <div>
            <h1>Welcome to Our Home Page!</h1>
        </div>
        <div className="HomeContent">
            <p>Please click on one of the options in the above navigation bar to get started!</p>
            <p>The Mood button leads you to a page that lets you write what you are feeling and the AI will output your mood interms of emojis.</p>
            <p>The Summarizer processes the text entered and outputs a summary of the input.</p>
            <p>The Paraphraser paraphrases your input.</p>
            <p>Code button lets you ask the AI about how to code something and the AI will output the solution.</p>
        </div>
    </div>)
}

export default HomePage;