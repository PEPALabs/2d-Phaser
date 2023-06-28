import React from 'react';

import QuestCard from './QuestCard';
import { QuestType } from '../../data/items.type';



function Quests({quests}){
    return (<div className="relative flex min-h-screen flex-col jus items-center justify-center overflow-hidden bg-gray-50 p-6 sm:py-12">
            {quests.map((quest) => <QuestCard questItem={quest}/>)}
            </div>)
}

export default Quests;