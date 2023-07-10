import React from 'react';

import QuestCard from './QuestCard';
import { QuestType } from '../../data/items.type';
import { useLocalStorage } from '../../hooks/useLocalStorage';


// TODO: Add quest sorting
function Quests({quests}){
    const [questItems, setQuestItems] = React.useState(quests);
    // const [focusedItem, setFocusedItem] = React.useState("");

    const [focusedItem, setFocusedItem] = useLocalStorage("quest.focusedItem","");

    // function updateQuests1(){
    //     var quest = questItems[0];
    //     quest.questName = "random"
    //     var questItemList = [...questItems];
    //     questItemList[0] = quest;
    //     setQuestItems(questItemList);
    // }

    function focusQuest(questItem){
        return ()=>{
            if(questItem.questStatus==="In Progress" && focusedItem!==questItem.questId){
                setFocusedItem(questItem.questId);
            }
            else if(questItem.questStatus==="In Progress" && focusedItem===questItem.questId){
                setFocusedItem("");
            }
            console.log(localStorage.getItem("quest.focusedItem"));
        }
    }

    function updateQuests(quest){
        return ()=>{
            if(quest.questStatus==="Available")
                quest.questStatus="In Progress";
            else if(quest.questStatus==="In Progress")
                quest.questStatus="Completed";
            else if(quest.questStatus==="Completed")
                quest.questStatus="Archived";
            else
                return
            var tmpQuests:QuestType[] = [...questItems];
            for(var i = 0; i < tmpQuests.length; i++){
                if(tmpQuests[i].questId == quest.questId){
                    tmpQuests[i] = quest;
                }
            }
            setQuestItems(tmpQuests);
        }
    }
    return (<div className="relative flex min-h-screen flex-col flex-1 jus items-center justify-center overflow-hidden gap-3 bg-gray-50 p-6 sm:py-12">

                {questItems.map((quest) => {
                    return focusedItem===quest.questId?
                        <div onClick={focusQuest(quest)} className="bg-white  shadow-xl shadow-gray-100 w-2/3 flex flex-col sm:flex-row gap-3 sm:items-center  justify-between px-5 py-4 rounded-md">
                            <QuestCard key={quest.questId} questItem={quest} questUpdate={updateQuests(quest)} />
                        </div>
                        :
                        <div onClick={focusQuest(quest)} className="bg-yellow  shadow-xl shadow-yellow-500 w-2/3 flex flex-col sm:flex-row gap-3 sm:items-center  justify-between px-5 py-4 rounded-md">
                            <QuestCard key={quest.questId} questItem={quest} questUpdate={updateQuests(quest)} />
                        </div>
                    }   
                )}
            </div>)
}

export default Quests;