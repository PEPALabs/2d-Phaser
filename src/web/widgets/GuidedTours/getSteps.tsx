import React from 'react'
import { Kbd, List } from '@mantine/core'
import { type Step } from 'react-joyride'

export enum TargetId {
  Resources = 'resources-page',
  Shop = 'shop-page',
  Game = 'game-page',
  GameCanvas = 'game-canvas',
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
    target: '#' + TargetId.GameCanvas,
    disableBeacon: true,
    title: 'Navigate and Explore',
    content: (
      <>
        Use the WASD keys to control your character and explore the map.
        <List fw="bold">
          <List.Item icon={<Kbd>W</Kbd>}>Move forward</List.Item>
          <List.Item icon={<Kbd>A</Kbd>}>Move left</List.Item>
          <List.Item icon={<Kbd>S</Kbd>}>Move backward</List.Item>
          <List.Item icon={<Kbd>D</Kbd>}>Move right</List.Item>
        </List>
        Embark on a journey of exploration and adventure as you uncover every
        corner of the map.
      </>
    )
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
