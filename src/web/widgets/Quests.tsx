import React from 'react';

import QuestCard from './QuestCard';
import { QuestType } from '../../data/items.type';


// TODO: Add quest sorting
function Quests({quests}){
    const [questItems, setQuestItems] = React.useState(quests);

    // function updateQuests1(){
    //     var quest = questItems[0];
    //     quest.questName = "random"
    //     var questItemList = [...questItems];
    //     questItemList[0] = quest;
    //     setQuestItems(questItemList);
    // }

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
                {questItems.map((quest) => <QuestCard key={quest.questId} questItem={quest} questUpdate={updateQuests(quest)}/>)}
            </div>)
}

export default Quests;