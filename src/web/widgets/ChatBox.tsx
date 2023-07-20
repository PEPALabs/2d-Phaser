import React, {useState} from 'react';

import messageData from "../../data/messageData"
import ChatMessage from "./ChatMessage"

function ChatBox(){
    const [messages, setMessage] = useState(messageData);
    const [text, setText] = useState("");
      const [username, setUsername] = useState("Test User");

      const handleSend = (e) => {
         e.preventDefault();
         const newMessage = {
            sender: username,
            message: text
         }
         setMessage([...messages, newMessage]);
         // e.target.message.value = "";
         setText("");
      }
    
    return (
    <div className="min-h-screen bg-indigo-50">

    <div className="absolute right-[150px] top-2/4 transform -translate-y-1/2  h-1/2  text-white ">
      <div className="w-full flex-col-reverse flex align-bottom h-full p-5 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">

         <div className="border-t-2  bg-white  sm:mb-0">
            <div className="relative flex bg-gray-200 rounded-md">
               
               <input type="text" value={text} onInput={e => setText(e.currentTarget.value)} placeholder="Write your message!" className="flex-grow-1 focus:outline-none focus:placeholder-gray-400 text-gray-600 placeholder-gray-600 pl-3  bg-gray-200 rounded-md py-3"/>
               <div className="absolute right-0 items-center inset-y-0 hidden sm:flex">
                  
                  <button type="button"  onClick={handleSend} className="inline-flex items-center justify-center rounded-lg px-4 py-3 transition duration-500 ease-in-out text-white bg-blue-500 hover:bg-blue-400 focus:outline-none">
                     
                     <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-6 w-6 ml-2 transform rotate-90">
                        <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z"></path>
                     </svg>
                  </button>
               </div>
            </div>
         </div> 

         <div className="grow w-full">
            <dt className="mb-4 text-gray-500 md:text-lg dark:text-gray-400">Chat History</dt>
         
            <ul className="max-w-md divide-y divide-gray-200 dark:divide-gray-700">
               {messages.map((message)=>
                  <ChatMessage message={message}/>
               )}
            </ul>
         </div>
         
      </div>
    
    </div>
  </div>
  )
}
export default ChatBox;