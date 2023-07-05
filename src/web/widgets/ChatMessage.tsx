import React from "react";



function ChatMessage({message}){

    return (
        <li className="pb-3 sm:pb-4">
               <div className="flex items-center space-x-4">
                  {/* <div className="flex-shrink-0">
                     <img className="w-8 h-8 rounded-full" src="/docs/images/people/profile-picture-1.jpg" alt="Neil image" />
                  </div> */}
                  <div className="flex-shrink-0 w-1/4">
                     <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                    {message.sender}
                     </p>
                     <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                        npc
                     </p>
                  </div>
                  <div className="inline-flex w-3/4 items-center text-base font-semibold text-gray-900 dark:text-white">
                     {message.message}
                  </div>
               </div>
            </li>
    )
}

export default ChatMessage;