export enum ItemsBonusType {
  FIRE = 'fire',
  SWIMMING = 'swimming',
  CLIMBING = 'climbing'
}

export enum ItemsMainCategoriesType {
  WEAPONS = 'weapons',
  SHIELDS = 'shields',
  ARMORS = 'armors'
}

export enum ItemCategoriesType {
  WEAPON = 'weapon',
  SHIELD = 'shield',
  ARMOR = 'armor',
  GREAVE = 'greave',
  HELM = 'helm',
  SEED = 'seed',
  PLANTS = 'plants',
  EQUIPMENTS = 'equipments',
  BUILDINGS = 'buildings',
  ACCESSORY = 'accessory'
}

export type ItemType = {
  name: string
  category: ItemCategoriesType
  icon: string
  value: string
  description: string
  bonus?: ItemsBonusType
  isNew?: boolean
  itemId?: number
  texture?: string
  price?: number
}

export type ItemsPage = {
  items: ItemType[]
  mainCategory: ItemsMainCategoriesType
  page: number
}

export type QuestType = {
  questId: string
  questName: string
  questCategory: string
  questDescription: string
  questTag: string
  questLocation: string
  questStatus: string
  questImage: string
}

export type MessageType = {
  sender: string
  message: string
}

export type ItemsType = {
  [key: string]: ItemType[]
}

export type PlantState = 'EMPTY' | 'PLANTING' | 'READY'

export type PlantType = {
  id: number
  name: string
  description: string
  state: PlantState
  duration: number // in ms
  seedTexture: string
  plantTexture: string
}
