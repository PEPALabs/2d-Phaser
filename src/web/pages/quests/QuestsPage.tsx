import React from 'react'
import {
  Text,
  Group,
  Stack,
  Title,
  Container,
  Image,
  Grid,
  ScrollArea,
  AspectRatio,
  Center
} from '@mantine/core'
import { useLocalStorage } from '@mantine/hooks'
import QuestCategoryTabs from './components/QuestCategoryTabs'
import QuestCard from './components/QuestCard'
import useGameStore, { questActions } from '../../../data/useGameStore'

// TODO: Add quest sorting
function QuestsPage() {
  const questItems = useGameStore(state => state.quests)

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
    <Container className="h-full" size="xl">
      <Center className="h-full">
        <AspectRatio className="w-full bg-pepa-blue" ratio={16 / 9}>
          <Stack className="h-full overflow-hidden" p="xl">
            <Group className="w-full" position="apart">
              <Title order={2} color="blue">
                PEPA Quest Book
              </Title>
              <Group spacing="sm">
                <Image width={36} height={36} src="/assets/coin.png" />
                <Text>User Balance: 1000 ETH</Text>
              </Group>
            </Group>
            <QuestCategoryTabs />
            <Stack className="w-full">
              <ScrollArea h={500} className="px-10 py-2">
                {questItems.map(quest => (
                  <QuestCard
                    key={quest.questId}
                    questItem={quest}
                    questUpdate={updateQuests(quest)}
                    isActive={focusedItem === quest.questId}
                    onClick={focusQuest(quest)}
                  />
                ))}
              </ScrollArea>
            </Stack>
          </Stack>
        </AspectRatio>
      </Center>
    </Container>
  )
}

export default QuestsPage
