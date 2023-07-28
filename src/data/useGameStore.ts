import { create } from 'zustand'
import { immer } from 'zustand/middleware/immer'
import { subscribeWithSelector } from 'zustand/middleware'
import type { QuestType, PlantType, MessageType, ItemType } from './items.type'
import quests from './questData'
import messageData from './messageData'
import { getInventoryItems, getItems } from './getItems'
import GameManager from '../GameManager'

interface GameState {
  playerID: string
  time: Date
  plants: Record<number, PlantType>
  quests: QuestType[]
  inventories: ItemType[]
  messages: MessageType[]
  shop: { products: ItemType[]; balance: number; index: number }
}

const useGameStore = create(
  subscribeWithSelector(
    immer<GameState>(() => ({
      playerID: Date.now().toString(),
      time: new Date(),
      plants: {},
      quests,
      inventories: getInventoryItems(GameManager.getInstance().inventory),
      messages: messageData,
      shop: { products: getItems(), balance: 1000, index: 0 }
    }))
  )
)

export const shopAtions = {
  setIndex(newIndex: number) {
    useGameStore.setState(state => {
      state.shop.index = newIndex
    })
  },
  purchase(count: number) {
    useGameStore.setState(state => {
      const product = state.shop.products[state.shop.index]

      product.value = (+product.value - count).toString()

      state.shop.balance = state.shop.balance - product.price * count
    })
  }
}

export const questActions = {
  updateQuests(questId: string) {
    useGameStore.setState(state => {
      const quest = state.quests.find(item => item.questId === questId)

      if (quest.questStatus === 'Available') quest.questStatus = 'In Progress'
      else if (quest.questStatus === 'In Progress')
        quest.questStatus = 'Completed'
      else if (quest.questStatus === 'Completed') quest.questStatus = 'Archived'
      else return
      for (let i = 0; i < state.quests.length; i++) {
        if (state.quests[i].questId == quest.questId) {
          state.quests[i] = quest
        }
      }
    })
  }
}

export const plantActions = {
  populateId(id: number) {
    useGameStore.setState(state => {
      if (Object.keys(state.plants).length == 0) {
        for (let i = 0; i < id; i++) {
          state.plants[String(i)] = null
        }
      }
    })
  },
  addPlant(plant: PlantType, id: string | number) {
    useGameStore.setState(state => {
      state.plants[id] = plant
    })
  },
  removePlant(id: string | number) {
    useGameStore.setState(state => {
      state.plants[id] = null
    })
  },
  updatePlant(plant: PlantType, id: string | number) {
    useGameStore.setState(state => {
      state.plants[id] = plant
    })
  }
}

export const inventoryActions = {
  updateInventories(inventories: ItemType[]) {
    useGameStore.setState(state => {
      state.inventories = inventories
    })
  }
}

export const messageActions = {
  addMessage(message: MessageType) {
    useGameStore.setState(state => {
      state.messages.push(message)
    })
  }
}

export default useGameStore
