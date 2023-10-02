import React from 'react'
import { Stack, ScrollArea } from '@mantine/core'
import { useLocalStorage } from '@mantine/hooks'
import QuestCard from './components/QuestCard'
import useGameStore, { questActions } from '../../../data/useGameStore'

// TODO: Add quest sorting
function QuestsPage() {
  const questItems = useGameStore(state => state.quests)

  const [focusedItem, setFocusedItem] = useLocalStorage({
    key: 'quest.focusedItem',
    defaultValue: ''
  })

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
      questActions.updateQuests(quest.questId)
    }
  }

  return (
    <ScrollArea className="h-full w-full">
      <Stack px="xl">
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
    </ScrollArea>
  )
}

export default QuestsPage

export const Component = QuestsPage
