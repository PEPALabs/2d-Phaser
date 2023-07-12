import React from 'react'
import { Center, Container, Stack } from '@mantine/core'
import { useLocalStorage } from '@mantine/hooks'
import QuestCard from './components/QuestCard'
import { QuestType } from '../../../data/items.type'
import quests from '../../../data/questData'

// TODO: Add quest sorting
function QuestsPage() {
  const [questItems, setQuestItems] = React.useState(quests)

  const [focusedItem, setFocusedItem] = useLocalStorage({
    key: 'quest.focusedItem',
    defaultValue: ''
  })

  // function updateQuests1(){
  //     var quest = questItems[0];
  //     quest.questName = "random"
  //     var questItemList = [...questItems];
  //     questItemList[0] = quest;
  //     setQuestItems(questItemList);
  // }

  function focusQuest(questItem) {
    return () => {
      if (
        questItem.questStatus === 'In Progress' &&
        focusedItem !== questItem.questId
      ) {
        setFocusedItem(questItem.questId)
      } else if (
        questItem.questStatus === 'In Progress' &&
        focusedItem === questItem.questId
      ) {
        setFocusedItem('')
      }
      console.log(localStorage.getItem('quest.focusedItem'))
    }
  }

  function updateQuests(quest) {
    return () => {
      if (quest.questStatus === 'Available') quest.questStatus = 'In Progress'
      else if (quest.questStatus === 'In Progress')
        quest.questStatus = 'Completed'
      else if (quest.questStatus === 'Completed') quest.questStatus = 'Archived'
      else return
      var tmpQuests = [...questItems]
      for (var i = 0; i < tmpQuests.length; i++) {
        if (tmpQuests[i].questId == quest.questId) {
          tmpQuests[i] = quest
        }
      }
      setQuestItems(tmpQuests)
    }
  }
  return (
    <Container className="h-full" size="lg">
      <Center className="h-full">
        <Stack className="w-full">
          {questItems.map(quest => (
            <QuestCard
              key={quest.questId}
              questItem={quest}
              questUpdate={updateQuests(quest)}
              isActive={focusedItem === quest.questId}
              onClick={focusQuest(quest)}
            />
          ))}
        </Stack>
      </Center>
    </Container>
  )
}

export default QuestsPage
