// src/App.jsx
import React, { ReactElement } from 'react'
import { useState } from 'react';
// import './App.css'


import UI from "./UI";
import GameRoot from "./Game";

function App(){
    const [messages, setMessage] = useState('');
    const [showDialogBox, setShowDialogBox] = useState(false);

    

    
	return <div className="App">
        <UI />
        <div id="game">
            <GameRoot />
        </div>
    </div>
}


export default App