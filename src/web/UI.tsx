import React, { ReactElement } from 'react'
import { useState, useEffect, useCallback } from 'react';
import {MouseEvent} from 'react'

import MessageBox from "./MessageBox";
import EthersContext from "./EthersContext";
import FuelApp from "./FuelApp";
import SigninBox from './Signin';

function UI() {

    const [message, setMessage] = useState('');
    const [showDialogBox, setShowDialogBox] = useState(false);
    const [showLogin, setShowLogin] = useState(true);
    const [login, setLogin] = useState(false);
    const [username, setUsername] = useState('');

    const dialogBoxEventListener = ({ detail }:any) => {
        setMessage(detail.message);
        setShowDialogBox(true);
    };

    // listen for login event
    const loginEventListener = ({ detail }:any) => {
        setShowLogin(false);
    };
    // todo:  pass callback to login page
    const loginDone = useCallback(( {login, name} :any) => {
        const customEvent = new CustomEvent('end-login');
        window.dispatchEvent(customEvent);
        // setShowLogin(false);
        setLogin(login);
        if(login){
            setUsername(name);
        }
    }, ["no idea"]);

    const dislogDone = useCallback(() => {
        const customEvent = new CustomEvent('end-dialog');
        window.dispatchEvent(customEvent);

        setMessage('');
        setShowDialogBox(false);
    }, ["no idea"]);

    function handleClick(){
        // Changing state
        setMessage('Click!');
        setShowDialogBox(!showDialogBox);
    }

    useEffect(() => {

        window.addEventListener('start-dialog', dialogBoxEventListener);
        window.addEventListener('end-login', loginEventListener);

        return () => {
            window.removeEventListener('start-dialog', dialogBoxEventListener);
            window.removeEventListener('end-login', loginEventListener);
        };
    });


    return (<div id="ui">
        <nav className="bg-white border-gray-200 dark:bg-gray-900">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between p-4">
                <a href="https://flowbite.com/" className="flex items-center">
                    <img src="https://flowbite.com/docs/images/logo.svg" className="h-8 mr-3" alt="Flowbite Logo" />
                    <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">PEPA</span>
                </a>
                <div className="flex md:order-2">
                    <button onClick={handleClick} onMouseDown={(e)=>{e.stopPropagation()}} className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded">
                        Connect Wallet
                    </button>
                </div>

            <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-cta">
                <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                <li>
                    <button  onMouseDown={(e)=>{e.stopPropagation()}} className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded">
                        Town
                    </button>
                </li>
                <li>
                    <button  onMouseDown={(e)=>{e.stopPropagation()}} className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded">
                        Shop
                    </button>
                </li>
                <li>
                    <button onMouseDown={(e)=>{e.stopPropagation()}} className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded">
                        Home
                    </button>
                </li>
                    <button onMouseDown={(e)=>{e.stopPropagation()}} className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded">
                        Inventory
                    </button>
                </ul>
            </div>
            </div>
        </nav>

        {showDialogBox && (
            <MessageBox
                message={message}
                onDone={dislogDone}
            />
        )}

        {showLogin && (
            <SigninBox
                message={message}
                Signin={loginDone}
            />
        )}

        <EthersContext />
        <FuelApp />
    </div>)
}

export default UI;