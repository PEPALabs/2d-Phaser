import items from './items'
import {
  ItemType,
  ItemsMainCategoriesType,
  ItemCategoriesType
} from './items.type'

export const emptyItem = {
  name: '',
  icon: 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg"/>',
  value: '',
  description: '',
  category: ItemCategoriesType.WEAPON
}

export const getItems = (
  category = ItemsMainCategoriesType.WEAPONS,
  itemsPerPage = 21
): ItemType[] => {
  const itemsGrid = items[category].concat(
    new Array(itemsPerPage - items[category].length).fill(emptyItem)
  )

  return itemsGrid
}

export const getInventoryItems = (
  itemList: ItemType[],
  itemsPerPage = 20
): ItemType[] => {
  const itemsGrid = itemList.concat(
    new Array(itemsPerPage - itemList.length).fill(emptyItem)
  )

  return itemsGrid
}

// export class getItems;
// export class getInventoryItems;
