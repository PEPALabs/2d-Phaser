import React, {useState} from 'react';



function ChatBox(){
    const [messages, setMessage] = useState([]);

    

    
    return (<div className="min-h-screen bg-indigo-50">



    <div className="absolute right-[150px] top-2/4 transform -translate-y-1/2  h-1/2  text-white ">
      <div className="w-full h-full p-5 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
  
      <dt className="mb-4 text-gray-500 md:text-lg dark:text-gray-400">Chat History</dt>
        
  <ul className="max-w-md divide-y divide-gray-200 dark:divide-gray-700">
     <li className="pb-3 sm:pb-4">
        <div className="flex items-center space-x-4">
           <div className="flex-shrink-0">
              <img className="w-8 h-8 rounded-full" src="/docs/images/people/profile-picture-1.jpg" alt="Neil image" />
           </div>
           <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                 Neil Sims
              </p>
              <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                 email@flowbite.com
              </p>
           </div>
           <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
              $320
           </div>
        </div>
     </li>
     <li className="py-3 sm:py-4">
        <div className="flex items-center space-x-4">
           <div className="flex-shrink-0">
              <img className="w-8 h-8 rounded-full" src="/docs/images/people/profile-picture-3.jpg" alt="Neil image" />
           </div>
           <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                 Bonnie Green
              </p>
              <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                 email@flowbite.com
              </p>
           </div>
           <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
              $3467
           </div>
        </div>
     </li>
     <li className="py-3 sm:py-4">
        <div className="flex items-center space-x-4">
           <div className="flex-shrink-0">
              <img className="w-8 h-8 rounded-full" src="/docs/images/people/profile-picture-2.jpg" alt="Neil image"/>
           </div>
           <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                 Michael Gough
              </p>
              <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                 email@flowbite.com
              </p>
           </div>
           <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
              $67
           </div>
        </div>
     </li>
     <li className="py-3 sm:py-4">
        <div className="flex items-center space-x-4">
           <div className="flex-shrink-0">
              <img className="w-8 h-8 rounded-full" src="/docs/images/people/profile-picture-5.jpg" alt="Neil image"/>
           </div>
           <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                 Thomas Lean
              </p>
              <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                 email@flowbite.com
              </p>
           </div>
           <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
              $2367
           </div>
        </div>
     </li>
     <li className="pt-3 pb-0 sm:pt-4">
        <div className="flex items-center space-x-4">
           <div className="flex-shrink-0">
              <img className="w-8 h-8 rounded-full" src="/docs/images/people/profile-picture-4.jpg" alt="Neil image"/>
           </div>
           <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                 Lana Byrd
              </p>
              <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                 email@flowbite.com
              </p>
           </div>
           <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
              $367
           </div>
        </div>
     </li>
  </ul>
  

      </div>
        <div >

        </div> 
    
    </div>
  </div>
  )
}
export default ChatBox;