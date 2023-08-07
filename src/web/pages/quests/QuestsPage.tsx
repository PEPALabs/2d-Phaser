import React from 'react'
import {
  Text,
  Group,
  Stack,
  Image,
  ScrollArea,
  AspectRatio,
  Title
} from '@mantine/core'
import { useLocalStorage } from '@mantine/hooks'
import QuestCategoryTabs from './components/QuestCategoryTabs'
import QuestCard from './components/QuestCard'
import useGameStore, { questActions } from '../../../data/useGameStore'
import useQuestCategory from './hooks/useQuestCategory'

// TODO: Add quest sorting
function QuestsPage() {
  const questItems = useGameStore(state => state.quests)
  const { category } = useQuestCategory()

  const categorizedQuests =
    category === 'all'
      ? questItems
      : questItems.filter(quest => quest.questCategory === category)

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
      questActions.updateQuests(quest.questId)
    }
  }
  return (
    <Stack className="w-full overflow-hidden">
      <Group className="w-full" position="apart">
        <QuestCategoryTabs />
        <Group spacing="sm">
          <Image width={36} height={36} src="/assets/coin.png" />
          <Text className="font-bold tracking-wider">
            User Balance: 1000 ETH
          </Text>
        </Group>
      </Group>
      <Stack className="h-full w-full overflow-hidden">
        {categorizedQuests.length > 0 && (
          <ScrollArea>
            {categorizedQuests.map(quest => (
              <QuestCard
                key={quest.questId}
                questItem={quest}
                questUpdate={updateQuests(quest)}
                isActive={focusedItem === quest.questId}
                onClick={focusQuest(quest)}
              />
            ))}
          </ScrollArea>
        )}
      </Stack>
    </Stack>
  )
}

export default QuestsPage
