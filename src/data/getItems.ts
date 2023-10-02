import items from './items'
import {
  ItemType,
  ItemsMainCategoriesType,
  ItemCategoriesType
} from './items.type'

export const emptyItem = {
  name: '\u200B',
  icon: 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="96" height="96"/>',
  value: '',
  description: '',
  category: ItemCategoriesType.WEAPON
}

export const getItems = (
  category = ItemsMainCategoriesType.WEAPONS
): ItemType[] => {
  return [...items[category], ...items[category], ...items[category]]
  // return items[category]
}
