import React, { ReactElement } from 'react'
import { useState, useEffect, useCallback } from 'react';
import {MouseEvent} from 'react'
import PubSub from 'pubsub-js'
import EventDispatcher from "../EventDispatcher"
import InventoryUI from './InventoryUI';

import MessageBox from "./MessageBox";
import EthersContext from "./EthersContext";
import FuelApp from "./FuelApp";
import SigninBox from './Signin';
import Shop from './Shop';
import ShopUI from './ShopUI';
import Sidebar from './Sidebar';
import Alert from './Alert';

import GameManager from '../GameManager';



function UI() {
    // TODO: add game event handler

    const [message, setMessage] = useState('');
    const [showDialogBox, setShowDialogBox] = useState(false);
    const [showLogin, setShowLogin] = useState(true);
    const [showShop, setShowShop] = useState(false);
    const [showShopText, setShowShopText] = useState(false);
    const [showInventory, setShowInventory] = useState(false);
    const [showUniswap, setShowUniswap] = useState(false);
    const [login, setLogin] = useState(false);
    const [username, setUsername] = useState('');
    const [gameManager, setGameManager] = useState(GameManager.getInstance());
    

    
    var token:string, token1:string = '';
    var tokenShopTextOn:string = '';
    var tokenShopTextOff:string = '';

    const dialogBoxEventListener = ({ detail }:any) => {
        setMessage(detail.message);
        setShowDialogBox(true);
    };

    // listen for login event
    const loginEventListener = ({ detail }:any) => {
        setShowLogin(false);
    };
    const shopEventListener = (msg:string,data:any) => {
        setShowShop(true);
    };
    const shopTextEventListener = (msg:string,data:any) => {
        setShowShopText(true);
    };
    const shopTextStopEventListener = (msg:string,data:any) => {
        setShowShopText(false);
        setShowShop(false);
    };
    const stopEventListener = (msg:string,data:any) => {
        setShowShop(false);
    };

    function escFunction(event:KeyboardEvent){
        if (event.key === "Escape") {
            //Do whatever when esc is pressed
            setShowInventory(false);
            setShowShop(false);
            setShowLogin(false);

            gameManager.values["shopText"] = false;
            gameManager.values["shopOpen"] = false;
        }
    }

    function handleInventory(event: MouseEvent<HTMLButtonElement>) {
        setShowInventory(true);
    } 
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

    const dialogDone = useCallback(() => {
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
        token = PubSub.subscribe('player:shop', shopEventListener);
        token1 = PubSub.subscribe('player:close', stopEventListener);
        tokenShopTextOn = PubSub.subscribe('player:shopText', shopTextEventListener);
        tokenShopTextOff = PubSub.subscribe('player:shopTextStop', shopTextStopEventListener);

        document.addEventListener("keydown", escFunction, false);
        // window.addEventListener('player:shop', shopEventListener);
        // window.addEventListener('player:close', stopEventListener);
        return () => {
            window.removeEventListener('start-dialog', dialogBoxEventListener);
            window.removeEventListener('end-login', loginEventListener);
            // window.removeEventListener('player:shop', shopEventListener);
            // window.removeEventListener('player:close', stopEventListener);
            PubSub.unsubscribe(token);
            PubSub.unsubscribe(token1);
            PubSub.unsubscribe(tokenShopTextOn);
            PubSub.unsubscribe(tokenShopTextOff);

            document.removeEventListener("keydown", escFunction, false);
        };
    });


    return (
    <div id="ui">
            <nav className="absolute justify-center fixed top-0 z-100 w-full h-20 bg-white border-gray-200 dark:bg-gray-900">
                <div className="max-w-screen-xl flex flex-wrap items-center justify-between p-4 z-100">
                    <a href="https://flowbite.com/" className="flex items-center">
                        <img src="https://flowbite.com/docs/images/logo.svg" className="h-8 mr-3" alt="Flowbite Logo" />
                        <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">PEPA</span>
                    </a>
                    <div className="flex md:order-2">
                        {/* <button onClick={handleClick} onMouseDown={(e)=>{e.stopPropagation()}} className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded">
                            Connect Wallet
                        </button> */}
                        <FuelApp />
                    </div>

                    <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-cta">
                        <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                        <li>
                            <button  onClick={(e)=>{setShowLogin(true);}} onMouseDown={(e)=>{e.stopPropagation()}} className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded">
                                {login? username:"Login"}
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
                        <li>
                            <button onClick={()=>{setShowUniswap(!showUniswap)}} onMouseDown={(e)=>{e.stopPropagation()}} className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded">
                                Uniswap
                            </button>
                        </li>
                            <button onClick={handleInventory} onMouseDown={(e)=>{e.stopPropagation()}} className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded">
                                Inventory
                            </button>
                        </ul>
                    </div>
                </div>
            </nav>
        
            <Sidebar showShopText={showShopText} showUniswap={showUniswap} showDialogBox={showDialogBox} showLogin={showLogin} showShop={showShop} showInventory={showInventory} message={message} dialogDone={dialogDone} loginDone={loginDone} username={username}/>
            <div/>
                
        

                {/* {showUniswap && 
                <Iframe iframe={iframe} /> 
                }


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

                {showShop && (
                    <ShopUI />
                    // <Shop message={message}
                    // Signin={loginDone}/>
                )
                }

                {showInventory && (
                    <InventoryUI />
                    // <Shop message={message}
                    // Signin={loginDone}/>
                )
                } */}
                {/* 
                <EthersContext />
                <FuelApp /> */
                }

        
    </div>)
}

export default UI;