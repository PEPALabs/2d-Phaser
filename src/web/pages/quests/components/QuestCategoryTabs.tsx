import React from 'react'
import { Tabs } from '@mantine/core'
import useQuestCategory from '../hooks/useQuestCategory'

interface QuestCategoryTab {
  name: string
  value: string
}

const questCategoryTabs: QuestCategoryTab[] = [
  { name: 'All', value: 'all' },
  { name: 'Tutorial', value: 'tutorial' },
  { name: 'Welcome Rewards', value: 'welcomeRewards' },
  { name: 'First Trade', value: 'firstTrade' }
]

const QuestCategoryTabs = () => {
  const { category, setCategory } = useQuestCategory()

  return (
    <Tabs
      variant="pills"
      value={category}
      onTabChange={value => {
        setCategory(value)
      }}>
      <Tabs.List>
        {questCategoryTabs.map(tab => (
          <Tabs.Tab
            key={tab.name}
            value={tab.value}
            className="font-bold tracking-wider">
            {tab.name}
          </Tabs.Tab>
        ))}
      </Tabs.List>
    </Tabs>
  )
}

export default QuestCategoryTabs
