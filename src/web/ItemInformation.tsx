import React from 'react'
import cx from 'classnames'

// import CategoryIcon from "./CategoryIcon";
import { ItemType } from '../data/items.type'

type Props = {
  item: ItemType;
};

const ItemInformation: React.FC<Props> = ({ item }) => (
  <div
    className={cx(
      "relative w-11/12 z-10",
      "text-white text-sm py-6 px-8",
      "bg-pepa-black/70 border border-zelda-darkGray rounded-xl"
    )}
  >
    <div className="w-full text-2xl mb-2 pb-2 border-zelda-darkGray border-b flex items-center flex-row">
      <div className="font-bold flex-1">{item.name}</div>
      <div className="flex space-x-2 text-lg items-center justify-end">
        {/* <CategoryIcon type={item.category} /> */}
        <div>In Stock:</div>
        <div className="py-1 px-2 border-2 rounded-lg border-pepa-gold">
          {item.value}
        </div>
      </div>
    </div>

    <div className="min-h-24">
      <div className="overflow-hidden leading-5 mt-4 text-base">
        <div>{item.description}</div>
      </div>
    </div>
  </div>
)

export default ItemInformation;
