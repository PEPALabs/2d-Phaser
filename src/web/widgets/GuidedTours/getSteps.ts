import { type Step } from 'react-joyride'

export enum TargetId {
  Resources = 'resources-page',
  Shop = 'shop-page',
  Game = 'game-page',
  Uniswap = 'uniswap-page',
  Inventory = 'inventory-page'
}

const getSteps = (): Step[] => [
  {
    target: '#' + TargetId.Resources,
    disableBeacon: true,
    title: 'Resources',
    content:
      'This is the Resources page, where you can view and manage your in-game resources, including gold, wood, stone, and more.'
  },
  {
    target: '#' + TargetId.Shop,
    disableBeacon: true,
    title: 'Shop',
    content:
      'Welcome to the Shop! Here, you can purchase various items and props to aid your progress in the game.'
  },
  {
    target: '#' + TargetId.Game,
    disableBeacon: true,
    title: 'Game',
    content:
      'Welcome to the main Game interface! Here, you will experience the core gameplay and challenges.'
  },
  {
    target: '#' + TargetId.Uniswap,
    disableBeacon: true,
    title: 'Uniswap',
    content: 'This is the Uniswap page, a trading platform.'
  },
  {
    target: '#' + TargetId.Inventory,
    disableBeacon: true,
    title: 'Inventory',
    content:
      'This is your Inventory page, where you can view and manage all your items and rewards.'
  }
]

export default getSteps
