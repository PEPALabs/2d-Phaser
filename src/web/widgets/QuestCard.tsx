import React from 'react';

import { QuestType } from '../../data/items.type';

function QuestCard({questItem,questUpdate}) {

    // change mission status
    function takeMission(){
        if(questItem.questStatus==="Available")
            questItem.questStatus="In Progress";
    }

    function completeMission(){
        if(questItem.questStatus==="In Progress")
            questItem.questStatus="Completed";

    }
    
    function takeReward(){
        if(questItem.questStatus==="Completed")
            questItem.questStatus="Archived";
    }

    

    return (
        // <div className="relative flex min-h-screen flex-col jus items-center justify-center overflow-hidden bg-gray-50 p-6 sm:py-12">
            <div className="bg-white  shadow-xl shadow-gray-100 w-2/3 flex flex-col sm:flex-row gap-3 sm:items-center  justify-between px-5 py-4 rounded-md">
                <div>
                    <span className="text-purple-800 text-sm">{questItem.questCategory}</span>
                    <h3 className="font-bold mt-px">{questItem.questName}</h3>
                    <div className="flex items-center gap-3 mt-2">
                    <span className="bg-purple-100 text-purple-700 rounded-full px-3 py-1 text-sm">{questItem.questTag}</span>
                    <span className="text-slate-600 text-sm flex gap-1 items-center"> 
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                            <path stroke-linecap="round" stroke-linejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg> 
                        {questItem.questLocation}
                    </span>
                    </div>
                </div>
                <div>
                    {questItem.questStatus==="Completed"?
                        // awaiting rewards
                        <button onClick={questUpdate} onMouseDown={(e)=>{e.stopPropagation()}} className="bg-purple-900 text-white font-medium px-4 py-2 rounded-md flex gap-1 items-center">
                                Take Rewards
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                            </svg>
                        </button>
                        :
                            questItem.questStatus==="In Progress"?
                            <div  className="bg-purple-900 text-white font-medium px-4 py-2 rounded-md flex gap-1 items-center">
                                In Progress
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                </svg>
                            </div>
                            :
                                questItem.questStatus==="Available"?
                                    <button  onClick={questUpdate} onMouseDown={(e)=>{e.stopPropagation()}} className="bg-purple-900 text-white font-medium px-4 py-2 rounded-md flex gap-1 items-center">
                                        Start Quest
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                        </svg>
                                    </button>
                                :
                                    <div  className="bg-grey-900 text-white font-medium px-4 py-2 rounded-md flex gap-1 items-center">
                                        Archived
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                        </svg>
                                    </div>
                    }
                        
                </div>
            </div>
           


    )
}

export default QuestCard;