import { create } from 'zustand'
import { immer } from 'zustand/middleware/immer'
import { subscribeWithSelector } from 'zustand/middleware'
import type { QuestType, PlantType, ItemType } from './items.type'
import quests from './questData'
import { getItems } from './getItems'
import { EnterSceneData, SceneMessage } from '../multiplayer/emitter'

interface GameState {
  playerID: string
  roomId: string | null
  isOnlineMode: boolean
  sceneData: EnterSceneData | null
  time: Date
  plants: Record<number, PlantType>
  quests: QuestType[]
  inventories: { products: ItemType[]; balance: number; index: number }
  messages: SceneMessage[]
  shop: { products: ItemType[]; balance: number; index: number }
}

const useGameStore = create(
  subscribeWithSelector(
    immer<GameState>(() => ({
      playerID: Date.now().toString(),
      roomId: null,
      isOnlineMode: false,
      sceneData: null,
      time: new Date(),
      plants: {},
      quests,
      inventories: { products: getItems(), balance: 1000, index: 0 },
      messages: [],
      shop: { products: getItems(), balance: 1000, index: 0 }
    }))
  )
)

export const shopActions = {
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
      state.inventories.products = inventories
    })
  },
  setIndex(newIndex: number) {
    useGameStore.setState(state => {
      state.inventories.index = newIndex
    })
  },
  updateAmount(count: number) {
    useGameStore.setState(state => {
      const product = state.inventories.products[state.inventories.index]

      product.value = (+product.value - count).toString()
    })
  }
}

export const messageActions = {
  addMessage(message: SceneMessage) {
    useGameStore.setState(state => {
      state.messages.push(message)
    })
  }
}

export default useGameStore
