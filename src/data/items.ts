import { ItemCategoriesType, ItemsMainCategoriesType } from './items.type'

const PUBLIC_URL = 'http://localhost:8080/'
const items= {
  [ItemsMainCategoriesType.WEAPONS]: [
    {
      name: 'Tree Branch',
      category: ItemCategoriesType.BUILDINGS,
      icon: PUBLIC_URL + 'items/weapons/BotW_Tree_Branch_Icon.png',
      value: '2',
      isNew: true,
      description:
        "Wooden branches such as this are pretty common, but it's surprisingly well-balanced. It doesn't do much damage but can serve as a weapon in a pinch.",
      price: 100
    },
    {
      name: 'Ancient Short Sword',
      category: ItemCategoriesType.EQUIPMENTS,
      icon: PUBLIC_URL + 'items/weapons/BotW_Ancient_Short_Sword_Icon.png',
      value: '40',
      description:
        'The blade of this sword was made using an ancient power lost to this modern age. Its blade appears only when drawn, and its cutting power surpasses metal swords.',
      price: 200
    },
    {
      name: 'Random Item',
      category: ItemCategoriesType.WEAPON,
      icon: PUBLIC_URL + 'items/shields/BotW_Wooden_Shield_Icon.png',
      value: '1',
      description: 'A random item that is not in the game.',
      price: 300
    }
  ],
  [ItemsMainCategoriesType.SHIELDS]: [
    {
      name: 'Wooden Shield',
      category: ItemCategoriesType.SHIELD,
      icon: PUBLIC_URL + 'items/shields/BotW_Wooden_Shield_Icon.png',
      value: '2',
      description:
        'This lightweight, simple shield is ideal for less-experienced fighters. It can withstand light attacks, but blocking stronger blows is not recommended.'
    },
    {
      name: "BotW Traveler's Shield",
      category: ItemCategoriesType.SHIELD,
      icon: PUBLIC_URL + "items/shields/BotW_Traveler's_Shield_Icon.png",
      value: '4',
      description:
        'A sturdy shield loved by many an adventurer. It is made of animal hide and sturdy wood and is best suited to defending against weak monsters or animals.',
      price: 400
    }
  ]
}

export default items