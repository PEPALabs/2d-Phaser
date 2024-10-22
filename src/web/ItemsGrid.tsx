import React from 'react'
import Item from './Item'
import { ItemType } from '../data/items.type'

type Props = {
  items: ItemType[]
}

const ItemsGrid: React.FC<Props> = ({ items }) => (
  <div className="grid grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-6">
    {items.map((item, index) => (
      <Item
        key={`${item.name}-${index}`}
        name={item.name}
        icon={item.icon}
        value={item.value}
        category={item.category}
        bonus={item.bonus}
        itemIndex={index}
      />
    ))}
  </div>
)

export default ItemsGrid;
