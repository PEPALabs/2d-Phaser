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
  TUTORIAL = 'Tutorial'
}

export type ItemType = {
  name: string
  category: ItemCategoriesType
  icon: string
  value: string
  description: string
  bonus?: ItemsBonusType
  isNew?: boolean
}

export type ItemsPage = {
  items: ItemType[]
  mainCategory: ItemsMainCategoriesType
  page: number
}

export type QuestType = {
  questId: string
  questName: string
  questCategory: `${ItemCategoriesType}`
  questDescription: string
  questTag: string
  questLocation: string
  questStatus: string
  questImage: string
}

export type ItemsType = {
  [key: string]: ItemType[]
}
