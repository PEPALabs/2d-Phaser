import React, { useState, useEffect, useRef } from 'react'
import ItemsGrid from '../../ItemsGrid'
import { getItems, emptyItem } from '../../../utils/getItems'
import ItemsContext from '../../ItemsContext'
import { ItemType } from '../../../data/items.type'
import ItemInformation from '../../ItemInformation'
import {
  goUp,
  goLeft,
  goRight,
  getMatrixPositionFromIndex,
  goDown,
  getIndexFromMaxtrixPosition
} from '../../../utils/keyboardNavigation'

// import linkImage from "./assets/bg.png";

function ShopPage() {
  const [items, setItems] = useState(getItems())
  const [itemSelected, setItemSelected] = useState(0)
  const [isModalOpened, setIsModalOpened] = useState(false)

  const [isModalOpened1, setIsModalOpened1] = useState(false)
  const [itemsEquipped, setItemsEquipped] = useState<{
    [key: string]: ItemType
  }>({})
  const isSelectedItemNotEmpty = items[itemSelected].name !== ''
  const inventoryRef = useRef<HTMLDivElement>(null)

  const closeModal = () => {
    setIsModalOpened(false)
    if (inventoryRef.current) {
      inventoryRef.current.focus()
    }
  }

  const equipItem = () => {
    const itemSelectedData = items[itemSelected]
    setItemsEquipped({
      ...itemsEquipped,
      [itemSelectedData.category]: itemSelectedData
    })
    // playAction();
  }

  const dropItem = () => {
    const newItems = [...items]
    newItems.splice(itemSelected, 1)
    newItems.push(emptyItem)
    setItems(newItems)
    // setItemsPaginated(newItemsPaginated);
    // playAction();
  }
  //   setItemSelected: React.Dispatch<React.SetStateAction<number>>;
  //   setIsModalOpened: React.Dispatch<React.SetStateAction<boolean>>;
  //   itemSelected: number;
  //   isModalOpened: boolean;
  //   closeModal: () => void;
  //   equipItem: () => void;
  //   dropItem: () => void;
  //   itemsEquipped:
  const contextState = {
    setItemSelected,
    setIsModalOpened,
    setIsModalOpened1,
    itemSelected,
    isModalOpened,
    isModalOpened1,
    closeModal,
    equipItem,
    dropItem,
    itemsEquipped
  }

  const handleKeyPressed = (event: React.KeyboardEvent) => {
    let newItemSelected = null
    const positionItemSelected = getMatrixPositionFromIndex(itemSelected)
    if (event.key === 'ArrowUp') {
      newItemSelected = goUp(positionItemSelected)
    } else if (event.key === 'ArrowDown') {
      newItemSelected = newItemSelected = goDown(positionItemSelected)
    } else if (event.key === 'ArrowLeft') {
      newItemSelected = goLeft(positionItemSelected)
    } else if (event.key === 'ArrowRight') {
      newItemSelected = goRight(positionItemSelected)
    } else if (event.key === 'Enter') {
      setIsModalOpened(!isModalOpened)
    }
    if (newItemSelected) {
      setItemSelected(getIndexFromMaxtrixPosition(newItemSelected))
    }
  }

  useEffect(() => {
    if (inventoryRef.current) {
      inventoryRef.current.focus()
    }
  }, [])

  return (
    <div
      ref={inventoryRef}
      onKeyDown={handleKeyPressed}
      className="font-calamity h-full flex-1 bg-zelda-darkGreen"
      tabIndex={0}>
      <div className="container mx-auto flex flex-col xl:flex-row">
        <div className="relative mx-auto flex w-full  flex-col justify-center xl:w-1/2 ">
          {/* <CategoriesMenu
            categorySelected={itemsPaginated[page].mainCategory}
            setPage={setPage}
          /> */}
          <ItemsContext.Provider value={contextState}>
            <div className="flex">
              {/* <ItemsGrid direction={direction} page={page} items={items} /> */}
              <ItemsGrid items={items} />
            </div>
          </ItemsContext.Provider>
          {/* <NavigationArrow
            currentPage={page}
            setPage={setPage}
            variant={NavigationArrowVariant.LEFT}
          />
          <NavigationArrow
            currentPage={page}
            setPage={setPage}
            variant={NavigationArrowVariant.RIGHT}
          /> */}
        </div>

        <div className="my-6 flex w-full flex-col items-center self-end xl:my-0 xl:w-1/2 xl:items-start">
          {/* <img
            className="absolute hidden xl:block top-0 ml-48 z-0"
            src={linkImage}
            alt="link"
          /> */}
          {isSelectedItemNotEmpty && (
            <ItemInformation item={items[itemSelected]} />
          )}

          {/* {items[itemSelected].name && (
                <ItemInformation item={items[itemSelected]} />
          )} */}

          {/* Add text component */}
          <a href="#">
            <img
              className="rounded-t-lg"
              src="/docs/images/blog/image-1.jpg"
              alt=""
            />
          </a>
          <div className="p-5">
            <a href="#">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-white dark:text-white">
                Noteworthy technology acquisitions 2021
              </h5>
            </a>
            <p className="mb-3 font-normal text-white dark:text-gray-400">
              Here are the biggest enterprise technology acquisitions of 2021 so
              far, in reverse chronological order.
            </p>
            <div className="mt-4 flex space-x-3 md:mt-6">
              <a
                href="#"
                className="inline-flex items-center rounded-lg bg-blue-700 px-3 py-2 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                Use Item
              </a>
              <a
                href="#"
                className="inline-flex items-center rounded-lg bg-blue-700 px-3 py-2 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                Purchase
                <svg
                  aria-hidden="true"
                  className="-mr-1 ml-2 h-4 w-4"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    fill-rule="evenodd"
                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                    clip-rule="evenodd"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ShopPage
