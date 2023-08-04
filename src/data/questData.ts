import { QuestType } from './items.type'

enum QuestCategoriesType {
  TUTORIAL = 'tutorial',
  WELCOME_REWARDS = 'welcomeRewards',
  FIRST_TRADE = 'firstTrade'
}

const PUBLIC_URL = 'http://localhost:8080/'
const DEFAULT_IMAGE_URL = PUBLIC_URL + 'assts/guapen.png'
// Quest status: Available (not taken) -> In Progress (taken, not complete) -> completed (complete, rewards available) -> Archived(reward taken)
const quests: QuestType[] = [
  {
    questId: '1',
    questName: 'quest1',
    questCategory: QuestCategoriesType.TUTORIAL,
    questDescription: 'Purchase one seed from shop',
    questTag: 'Tutorial',
    questLocation: 'Shop',
    questStatus: 'In Progress',
    questImage: DEFAULT_IMAGE_URL
  },
  {
    questId: '5',
    questName: 'Test Welcome Rewards',
    questCategory: QuestCategoriesType.WELCOME_REWARDS,
    questDescription: 'Test',
    questTag: 'Welcome Rewards',
    questLocation: 'Homepage',
    questStatus: 'Available',
    questImage: DEFAULT_IMAGE_URL
  },
  {
    questId: '6',
    questName: 'Test First Trade',
    questCategory: QuestCategoriesType.FIRST_TRADE,
    questDescription: 'Plant one seed in the garden',
    questTag: 'First Trade',
    questLocation: 'Uniswap',
    questStatus: 'Available',
    questImage: DEFAULT_IMAGE_URL
  },
  {
    questId: '2',
    questName: 'quest2',
    questCategory: QuestCategoriesType.TUTORIAL,
    questDescription: 'Plant one seed in the garden',
    questTag: 'Tutorial',
    questLocation: 'Farm',
    questStatus: 'Available',
    questImage: DEFAULT_IMAGE_URL
  },

  {
    questId: '3',
    questName: 'quest0',
    questCategory: QuestCategoriesType.TUTORIAL,
    questDescription: 'Log in for the first time',
    questTag: 'Tutorial',
    questLocation: 'Homepage',
    questStatus: 'Completed',
    questImage: DEFAULT_IMAGE_URL
  },
  {
    questId: '4',
    questName: 'test quest',
    questCategory: QuestCategoriesType.TUTORIAL,
    questDescription: 'Test',
    questTag: 'Tutorial',
    questLocation: 'Homepage',
    questStatus: 'Archived',
    questImage: DEFAULT_IMAGE_URL
  }
]

export default quests
