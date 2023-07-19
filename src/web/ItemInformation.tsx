import React from 'react'
import cx from 'classnames'

// import CategoryIcon from "./CategoryIcon";
import { ItemType } from '../data/items.type'

type Props = {
  item: ItemType
}

const ItemInformation: React.FC<Props> = ({ item }) => (
  <div
    className={cx(
      'relative z-10 w-full max-w-xs md:max-w-lg',
      'px-6 py-4 text-sm text-white md:mx-4',
      'border border-zelda-darkGray bg-zelda-bgBlackTransparent'
    )}>
    <div className="mb-2 border-b border-zelda-darkGray pb-2 text-lg font-bold">
      {item.name}
    </div>
    <div className="min-h-24">
      <div className="overflow-hidden leading-5">
        <div className="mb-2 flex items-center">
          {/* <CategoryIcon type={item.category} /> */}
          <div className="border border-zelda-lightGray px-3 py-2 text-lg">
            {item.value}
          </div>
        </div>
        <div>{item.description}</div>
      </div>
    </div>
  </div>
)

export default ItemInformation
