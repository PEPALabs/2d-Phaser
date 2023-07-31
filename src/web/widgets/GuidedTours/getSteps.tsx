import React from 'react'
import { Text } from '@mantine/core'
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
    content: (
      <Text>
        This is the Resources page, where you can view and manage your in-game
        resources, including gold, wood, stone, and more.
      </Text>
    )
  },
  {
    target: '#' + TargetId.Shop,
    disableBeacon: true,
    content: (
      <Text>
        Welcome to the Shop! Here, you can purchase various items and props to
        aid your progress in the game.
      </Text>
    )
  },
  {
    target: '#' + TargetId.Game,
    disableBeacon: true,
    content: (
      <Text>
        Welcome to the main Game interface! Here, you will experience the core
        gameplay and challenges.
      </Text>
    )
  },
  {
    target: '#' + TargetId.Uniswap,
    disableBeacon: true,
    content: <Text>This is the Uniswap page, a trading platform.</Text>
  },
  {
    target: '#' + TargetId.Inventory,
    disableBeacon: true,
    content: (
      <Text>
        This is your Inventory page, where you can view and manage all your
        items and rewards.
      </Text>
    )
  }
]

export default getSteps
