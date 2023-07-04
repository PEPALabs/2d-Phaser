import React, {useState} from "react";
import Alert from "./Alert";
import InventoryUI from "./InventoryUI";
import MessageBox from "./MessageBox";
import SigninBox from "./Signin";
import ShopUI from "./ShopUI";
import Quests from "./widgets/Quests";
import questData from "../data/questData";
import ChatBox from "./widgets/ChatBox";

function Iframe(props) {
    return (<div dangerouslySetInnerHTML={ {__html:  props.iframe?props.iframe:""}} />);
  }

function Sidebar({showShopText,showUniswap,showDialogBox,showLogin,showShop,showInventory,message,dialogDone,loginDone,username,teleport12}) {

    const [showQuest, setShowQuest] = useState(false);

    //uniswap test iframe
    const iframe = "<iframe src=\"https://app.uniswap.org/#/swap?outputCurrency=0x89d24a6b4ccb1b6faa2625fe562bdd9a23260359\" height=\"660px\" width=\"100%\" style=\"border: 0;margin: 0 auto;display: block;border-radius: 10px;max-width: 600px;min-width: 300px;\">";

    return (
    <>
        <div id="default-sidebar" className="absolute top-20 left-0 z-40 w-1/4 h-screen pt-0 transition-transform -translate-x-full sm:translate-x-0 bg-gray-50 dark:bg-gray-800" aria-label="Sidebar">
            <div className="flex flex-col px-3 pb-4 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800">
                <ul className="space-y-2 font-medium">
                    <li>
                        <a href="#" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                        <svg aria-hidden="true" className="w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"></path><path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"></path></svg>
                        <span className="ml-3">Dashboard</span>
                        </a>
                    </li>
                    <li>
                        <a href="#" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                        <svg aria-hidden="true" className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M8.707 7.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l2-2a1 1 0 00-1.414-1.414L11 7.586V3a1 1 0 10-2 0v4.586l-.293-.293z"></path><path d="M3 5a2 2 0 012-2h1a1 1 0 010 2H5v7h2l1 2h4l1-2h2V5h-1a1 1 0 110-2h1a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2V5z"></path></svg>
                        <span className="flex-1 ml-3 whitespace-nowrap">Inbox</span>
                        <span className="inline-flex items-center justify-center w-3 h-3 p-3 ml-3 text-sm font-medium text-blue-800 bg-blue-100 rounded-full dark:bg-blue-900 dark:text-blue-300">3</span>
                        </a>
                    </li>
                    
                    <li>
                        <a href="#" onClick={(e)=>{setShowQuest(!showQuest);}} onMouseDown={(e)=>{e.stopPropagation()}} className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                            <svg aria-hidden="true" className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 2a4 4 0 00-4 4v1H5a1 1 0 00-.994.89l-1 9A1 1 0 004 18h12a1 1 0 00.994-1.11l-1-9A1 1 0 0015 7h-1V6a4 4 0 00-4-4zm2 5V6a2 2 0 10-4 0v1h4zm-6 3a1 1 0 112 0 1 1 0 01-2 0zm7-1a1 1 0 100 2 1 1 0 000-2z" clip-rule="evenodd"></path></svg>
                            <span className="flex-1 ml-3 whitespace-nowrap">Quest Book</span>
                        </a>
                    </li>
                    <li>
                        <a href="#" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                        <svg aria-hidden="true" className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 3a1 1 0 00-1 1v12a1 1 0 102 0V4a1 1 0 00-1-1zm10.293 9.293a1 1 0 001.414 1.414l3-3a1 1 0 000-1.414l-3-3a1 1 0 10-1.414 1.414L14.586 9H7a1 1 0 100 2h7.586l-1.293 1.293z" clip-rule="evenodd"></path></svg>
                        <span className="flex-1 ml-3 whitespace-nowrap">Sign In</span>
                        </a>
                    </li>
                    <li>
                        <a href="#" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                        <svg aria-hidden="true" className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5 4a3 3 0 00-3 3v6a3 3 0 003 3h10a3 3 0 003-3V7a3 3 0 00-3-3H5zm-1 9v-1h5v2H5a1 1 0 01-1-1zm7 1h4a1 1 0 001-1v-1h-5v2zm0-4h5V8h-5v2zM9 8H4v2h5V8z" clip-rule="evenodd"></path></svg>
                        <span className="flex-1 ml-3 whitespace-nowrap">Sign Up</span>
                        </a>
                    </li>
                </ul>
            </div>
            <div className="flex flex-col justify-between  flex-1 mt-6 bg-gray-100 border-0 border-gray-200 rounded-lg dark:bg-gray-800">

                <hr className="my-6 border-gray-200 dark:border-gray-600" />
                <a href="#" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                        <svg aria-hidden="true" className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5 4a3 3 0 00-3 3v6a3 3 0 003 3h10a3 3 0 003-3V7a3 3 0 00-3-3H5zm-1 9v-1h5v2H5a1 1 0 01-1-1zm7 1h4a1 1 0 001-1v-1h-5v2zm0-4h5V8h-5v2zM9 8H4v2h5V8z" clip-rule="evenodd"></path></svg>
                        <span className="flex-1 ml-3 whitespace-nowrap">Dashboard</span>
                    </a>
                <div className="grid grid-cols-2 gap-3 mx-8">
                    <div className="flex items-center  px-2 py-1  text-gray-600 transition-colors duration-300 transform rounded-lg dark:text-gray-400 bg-gray-200 dark:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700">
                        <a href="#" className="flex items-center text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                            <svg aria-hidden="true" className="flex-shrink-0 w-3 h-2 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M8.707 7.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l2-2a1 1 0 00-1.414-1.414L11 7.586V3a1 1 0 10-2 0v4.586l-.293-.293z"></path><path d="M3 5a2 2 0 012-2h1a1 1 0 010 2H5v7h2l1 2h4l1-2h2V5h-1a1 1 0 110-2h1a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2V5z"></path></svg>
                            <span className="flex-1 ml-1 whitespace-nowrap">PEPA</span>
                            <span className="inline-flex items-center justify-center w-3 h-3 p-1 ml-1 text-sm font-medium text-blue-800 bg-blue-100 rounded-full dark:bg-blue-900 dark:text-blue-300">0</span>
                        </a>
                    </div>
                    <div className="flex items-center  px-2 py-1  text-gray-600 transition-colors duration-300 transform rounded-lg dark:text-gray-400 bg-gray-200 dark:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700">
                        <a href="#" className="flex items-center text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                            <svg aria-hidden="true" className="flex-shrink-0 w-3 h-2 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M8.707 7.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l2-2a1 1 0 00-1.414-1.414L11 7.586V3a1 1 0 10-2 0v4.586l-.293-.293z"></path><path d="M3 5a2 2 0 012-2h1a1 1 0 010 2H5v7h2l1 2h4l1-2h2V5h-1a1 1 0 110-2h1a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2V5z"></path></svg>
                            <span className="flex-1 ml-1 whitespace-nowrap">Gold</span>
                            <span className="inline-flex items-center justify-center w-3 h-3 p-1 ml-1 text-sm font-medium text-blue-800 bg-blue-100 rounded-full dark:bg-blue-900 dark:text-blue-300">0</span>
                        </a>
                    </div>
                    <div className="flex items-center  px-2 py-1  text-gray-600 transition-colors duration-300 transform rounded-lg dark:text-gray-400 bg-gray-200 dark:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700">
                        <a href="#" className="flex items-center text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                            <svg aria-hidden="true" className="flex-shrink-0 w-3 h-2 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M8.707 7.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l2-2a1 1 0 00-1.414-1.414L11 7.586V3a1 1 0 10-2 0v4.586l-.293-.293z"></path><path d="M3 5a2 2 0 012-2h1a1 1 0 010 2H5v7h2l1 2h4l1-2h2V5h-1a1 1 0 110-2h1a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2V5z"></path></svg>
                            <span className="flex-1 ml-1 whitespace-nowrap">Level</span>
                            <span className="inline-flex items-center justify-center w-3 h-3 p-1 ml-1 text-sm font-medium text-blue-800 bg-blue-100 rounded-full dark:bg-blue-900 dark:text-blue-300">1</span>
                        </a>
                    </div>
                    <div className="flex items-center  px-2 py-1  text-gray-600 transition-colors duration-300 transform rounded-lg dark:text-gray-400 bg-gray-200 dark:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700">
                        <a href="#" className="flex items-center text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                            <svg aria-hidden="true" className="flex-shrink-0 w-3 h-2 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M8.707 7.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l2-2a1 1 0 00-1.414-1.414L11 7.586V3a1 1 0 10-2 0v4.586l-.293-.293z"></path><path d="M3 5a2 2 0 012-2h1a1 1 0 010 2H5v7h2l1 2h4l1-2h2V5h-1a1 1 0 110-2h1a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2V5z"></path></svg>
                            <span className="flex-1 ml-1 whitespace-nowrap">Worker</span>
                            <span className="inline-flex items-center justify-center w-3 h-3 p-1 ml-1 text-sm font-medium text-blue-800 bg-blue-100 rounded-full dark:bg-blue-900 dark:text-blue-300">0</span>
                        </a>
                    </div>
                    <div className="flex items-center  px-2 py-1  text-gray-600 transition-colors duration-300 transform rounded-lg dark:text-gray-400 bg-gray-200 dark:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700">
                        <a href="#" className="flex items-center text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                            <svg aria-hidden="true" className="flex-shrink-0 w-3 h-2 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M8.707 7.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l2-2a1 1 0 00-1.414-1.414L11 7.586V3a1 1 0 10-2 0v4.586l-.293-.293z"></path><path d="M3 5a2 2 0 012-2h1a1 1 0 010 2H5v7h2l1 2h4l1-2h2V5h-1a1 1 0 110-2h1a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2V5z"></path></svg>
                            <span className="flex-1 ml-1 whitespace-nowrap">Wood</span>
                            <span className="inline-flex items-center justify-center w-3 h-3 p-1 ml-1 text-sm font-medium text-blue-800 bg-blue-100 rounded-full dark:bg-blue-900 dark:text-blue-300">0</span>
                        </a>
                    </div>
                    <div className="flex items-center  px-2 py-1  text-gray-600 transition-colors duration-300 transform rounded-lg dark:text-gray-400 bg-gray-200 dark:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700">
                        <a href="#" className="flex items-center text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                            <svg aria-hidden="true" className="flex-shrink-0 w-3 h-2 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M8.707 7.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l2-2a1 1 0 00-1.414-1.414L11 7.586V3a1 1 0 10-2 0v4.586l-.293-.293z"></path><path d="M3 5a2 2 0 012-2h1a1 1 0 010 2H5v7h2l1 2h4l1-2h2V5h-1a1 1 0 110-2h1a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2V5z"></path></svg>
                            <span className="flex-1 ml-1 whitespace-nowrap">Stone</span>
                            <span className="inline-flex items-center justify-center w-3 h-3 p-1 ml-1 text-sm font-medium text-blue-800 bg-blue-100 rounded-full dark:bg-blue-900 dark:text-blue-300">0</span>
                        </a>
                    </div>
                    <div className="flex items-center  px-2 py-1  text-gray-600 transition-colors duration-300 transform rounded-lg dark:text-gray-400 bg-gray-200 dark:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700">
                        <a href="#" className="flex items-center text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                            <svg aria-hidden="true" className="flex-shrink-0 w-3 h-2 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M8.707 7.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l2-2a1 1 0 00-1.414-1.414L11 7.586V3a1 1 0 10-2 0v4.586l-.293-.293z"></path><path d="M3 5a2 2 0 012-2h1a1 1 0 010 2H5v7h2l1 2h4l1-2h2V5h-1a1 1 0 110-2h1a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2V5z"></path></svg>
                            <span className="flex-1 ml-1 whitespace-nowrap">Iron</span>
                            <span className="inline-flex items-center justify-center w-3 h-3 p-1 ml-1 text-sm font-medium text-blue-800 bg-blue-100 rounded-full dark:bg-blue-900 dark:text-blue-300">0</span>
                        </a>
                    </div>
                    <div className="flex items-center  px-2 py-1  text-gray-600 transition-colors duration-300 transform rounded-lg dark:text-gray-400 bg-gray-200 dark:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700">
                        <a href="#" className="flex items-center text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                            <svg aria-hidden="true" className="flex-shrink-0 w-3 h-2 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M8.707 7.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l2-2a1 1 0 00-1.414-1.414L11 7.586V3a1 1 0 10-2 0v4.586l-.293-.293z"></path><path d="M3 5a2 2 0 012-2h1a1 1 0 010 2H5v7h2l1 2h4l1-2h2V5h-1a1 1 0 110-2h1a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2V5z"></path></svg>
                            <span className="flex-1 ml-1 whitespace-nowrap">Water</span>
                            <span className="inline-flex items-center justify-center w-3 h-3 p-1 ml-1 text-sm font-medium text-blue-800 bg-blue-100 rounded-full dark:bg-blue-900 dark:text-blue-300">0</span>
                        </a>
                    </div>
                </div>
            </div>

            <div className="flex flex-col justify-between flex-1 mt-6 bg-gray-50 dark:bg-gray-800">
                <nav>
                    {/* <a className="flex items-center px-4 py-2 mt-5 text-gray-600 transition-colors duration-300 transform rounded-md dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700" href="#">
                        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M10.3246 4.31731C10.751 2.5609 13.249 2.5609 13.6754 4.31731C13.9508 5.45193 15.2507 5.99038 16.2478 5.38285C17.7913 4.44239 19.5576 6.2087 18.6172 7.75218C18.0096 8.74925 18.5481 10.0492 19.6827 10.3246C21.4391 10.751 21.4391 13.249 19.6827 13.6754C18.5481 13.9508 18.0096 15.2507 18.6172 16.2478C19.5576 17.7913 17.7913 19.5576 16.2478 18.6172C15.2507 18.0096 13.9508 18.5481 13.6754 19.6827C13.249 21.4391 10.751 21.4391 10.3246 19.6827C10.0492 18.5481 8.74926 18.0096 7.75219 18.6172C6.2087 19.5576 4.44239 17.7913 5.38285 16.2478C5.99038 15.2507 5.45193 13.9508 4.31731 13.6754C2.5609 13.249 2.5609 10.751 4.31731 10.3246C5.45193 10.0492 5.99037 8.74926 5.38285 7.75218C4.44239 6.2087 6.2087 4.44239 7.75219 5.38285C8.74926 5.99037 10.0492 5.45193 10.3246 4.31731Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M15 12C15 13.6569 13.6569 15 12 15C10.3431 15 9 13.6569 9 12C9 10.3431 10.3431 9 12 9C13.6569 9 15 10.3431 15 12Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>

                        <span className="mx-4 font-medium">Settings</span>
                    </a> */}

                    <hr className="my-6 border-gray-200 dark:border-gray-600" />

                    {/* <a className="flex items-center px-4 py-2 mt-5 text-gray-600 transition-colors duration-300 transform rounded-md dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700" href="#">
                        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M15 5V7M15 11V13M15 17V19M5 5C3.89543 5 3 5.89543 3 7V10C4.10457 10 5 10.8954 5 12C5 13.1046 4.10457 14 3 14V17C3 18.1046 3.89543 19 5 19H19C20.1046 19 21 18.1046 21 17V14C19.8954 14 19 13.1046 19 12C19 10.8954 19.8954 10 21 10V7C21 5.89543 20.1046 5 19 5H5Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>

                        <span className="mx-4 font-medium">Tickets</span>
                    </a> */}

                    
                </nav>

                <a href="#" className="flex items-center px-4 -mx-2">
                    <img className="object-cover mx-2 rounded-full h-9 w-9" src="https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50" alt="avatar" />
                    <span className="mx-2 font-medium text-gray-800 dark:text-gray-200">{username.length>0? username: "Login"}</span>
                </a>
            </div>
        </div>

        
{/* 
        <div className="pt-20"> */}
        <div className="absolute justify-center w-5/6 h-full top-20 left-1/4 border-0">

            <div className="absolute justify-center w-full flex flex-1 border-0 border-gray-200 rounded-lg dark:border-gray-700 ">
                <ChatBox />
            </div>

            {/* alerts  */}
            <div className="absolute justify-center z-5 flex flex-1 border-0 border-gray-200 rounded-lg dark:border-gray-700 ">
                
                <div className="grid p-4 grid-cols-3 gap-4 mb-4 ">
                    {teleport12 && 
                        <Alert text={"Press SPACE to teleport"} />
                    }
                    {showShopText && 
                        <Alert text={"Press \"SPACE\" to Open Shop"}/>
                    }
                </div>
            </div>
            {/* <div className="absolute justify-center z-5 flex flex-1 border-0 border-gray-200 rounded-lg dark:border-gray-700 ">
            
                <div className="grid p-4 grid-cols-3 gap-4 mb-4 ">
                    {showShopText && 
                        <Alert text={"Press \"SPACE\" to Open Shop"}/>
                    }
                    
                </div>
            </div> */}

            {/* <div className="absolute justify-center z-5 flex flex-1 border-0 border-gray-200 rounded-lg dark:border-gray-700 ">
                <div className="grid p-4 grid-cols-3 gap-4 mb-4 ">
                    
                </div>
            </div> */}

            <div className="absolute justify-center w-full flex flex-1 border-0 border-gray-200 rounded-lg dark:border-gray-700 ">
                {showUniswap && 
                    <Iframe iframe={iframe} /> 
                }
            </div>

            <div className="absolute justify-center w-full flex flex-1 border-0 border-gray-200 rounded-lg dark:border-gray-700 ">
                {showDialogBox && (
                    <MessageBox
                        message={message}
                        onDone={dialogDone}
                    />
                )}
            </div>
            <div className="absolute justify-center w-full border-0 border-gray-200 rounded-lg dark:border-gray-700 ">
                {showLogin && (
                    <SigninBox
                        message={message}
                        Signin={loginDone}
                    />
                )}
            </div>
            <div className="absolute justify-center w-full flex flex-1 border-0 border-gray-200 rounded-lg dark:border-gray-700 ">
                {showShop && (
                    <ShopUI />
                    // <Shop message={message}
                    // Signin={loginDone}/>
                )
                }
            </div>
            <div className="relative justify-center flex w-full border-0 border-gray-200 rounded-lg dark:border-gray-700 ">
                {showInventory && (
                    <InventoryUI />
                    // <Shop message={message}
                    // Signin={loginDone}/>
                )
                }
            </div>

            <div className="absolute justify-center w-full flex flex-1 border-0 border-gray-200 rounded-lg dark:border-gray-700 ">
                {showQuest && (
                    <Quests quests={questData} />
                    // <Shop message={message}
                    // Signin={loginDone}/>
                )
                }
            </div>
        </div>

                {/* <div className="grid grid-cols-3 gap-4 mb-4">
                    <div className="flex items-center justify-center h-24 rounded bg-gray-50 dark:bg-gray-800">
                        <p className="text-2xl text-gray-400 dark:text-gray-500">+</p>
                    </div>
                    <div className="flex items-center justify-center h-24 rounded bg-gray-50 dark:bg-gray-800">
                        <p className="text-2xl text-gray-400 dark:text-gray-500">+</p>
                    </div>
                    <div className="flex items-center justify-center h-24 rounded bg-gray-50 dark:bg-gray-800">
                        <p className="text-2xl text-gray-400 dark:text-gray-500">+</p>
                    </div>
                </div>
                <div className="flex items-center justify-center h-48 mb-4 rounded bg-gray-50 dark:bg-gray-800">
                    <p className="text-2xl text-gray-400 dark:text-gray-500">+</p>
                </div>
                <div className="grid grid-cols-2 gap-4 mb-4">
                    <div className="flex items-center justify-center rounded bg-gray-50 h-28 dark:bg-gray-800">
                        <p className="text-2xl text-gray-400 dark:text-gray-500">+</p>
                    </div>
                    <div className="flex items-center justify-center rounded bg-gray-50 h-28 dark:bg-gray-800">
                        <p className="text-2xl text-gray-400 dark:text-gray-500">+</p>
                    </div>
                    <div className="flex items-center justify-center rounded bg-gray-50 h-28 dark:bg-gray-800">
                        <p className="text-2xl text-gray-400 dark:text-gray-500">+</p>
                    </div>
                    <div className="flex items-center justify-center rounded bg-gray-50 h-28 dark:bg-gray-800">
                        <p className="text-2xl text-gray-400 dark:text-gray-500">+</p>
                    </div>
                </div>
                <div className="flex items-center justify-center h-48 mb-4 rounded bg-gray-50 dark:bg-gray-800">
                    <p className="text-2xl text-gray-400 dark:text-gray-500">+</p>
                </div>
                <div className="grid grid-cols-2 gap-4">
                    <div className="flex items-center justify-center rounded bg-gray-50 h-28 dark:bg-gray-800">
                        <p className="text-2xl text-gray-400 dark:text-gray-500">+</p>
                    </div>
                    <div className="flex items-center justify-center rounded bg-gray-50 h-28 dark:bg-gray-800">
                        <p className="text-2xl text-gray-400 dark:text-gray-500">+</p>
                    </div>
                    <div className="flex items-center justify-center rounded bg-gray-50 h-28 dark:bg-gray-800">
                        <p className="text-2xl text-gray-400 dark:text-gray-500">+</p>
                    </div>
                    <div className="flex items-center justify-center rounded bg-gray-50 h-28 dark:bg-gray-800">
                        <p className="text-2xl text-gray-400 dark:text-gray-500">+</p>
                    </div>
                </div> */}
            
        {/* </div> */}
    </>
    );
}


export default Sidebar;