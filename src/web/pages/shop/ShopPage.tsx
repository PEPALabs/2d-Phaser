import React, { useState, useEffect, useRef } from 'react'
import ItemsGrid from '../../ItemsGrid'
import { getItems, getInventoryItems, emptyItem } from '../../../utils/getItems'
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
import { Container, Center, AspectRatio } from '@mantine/core'

// import linkImage from "./assets/bg.png";

function ShopUI() {
  const [items, setItems] = useState(getItems())
  const [itemSelected, setItemSelected] = useState(0)
  const [itemAmount, setItemAmount] = useState(0)
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

  const handleIncrement = (event: React.MouseEvent) => {
    let currentAmount = itemAmount
    setItemAmount(currentAmount + 1)
  }

  const handleDecrement = (event: React.MouseEvent) => {
    let currentAmount = itemAmount
    if (currentAmount > 0) setItemAmount(currentAmount - 1)
  }

  useEffect(() => {
    if (inventoryRef.current) {
      inventoryRef.current.focus()
    }
  }, [])

  return (
    <Container className="h-full" size="xl">
      <Center className="h-full">
        <AspectRatio
          className="font-calamity w-full bg-pepa-blue"
          ratio={16 / 9}>
          <div
            ref={inventoryRef}
            className="h-full flex-col p-10"
            onKeyDown={handleKeyPressed}
            tabIndex={0}>
            <div className="flex w-full flex-row items-center space-x-10">
              <div className="flex flex-row items-center space-x-3 text-gray-700">
                <img className="h-10 w-10" src="/assets/coin.png" />
                <div>User Balance: 1000 ETH</div>
              </div>
              <div className="text-2xl text-gray-700">PEPA Shop</div>
            </div>
            <div className="container mx-auto flex flex-col space-y-10">
              <div className="relative mx-auto mt-10 flex w-3/4 flex-col items-center">
                <ItemsContext.Provider value={contextState}>
                  <div className="flex">
                    {/* <ItemsGrid direction={direction} page={page} items={items} /> */}
                    <ItemsGrid items={items} />
                  </div>
                </ItemsContext.Provider>
              </div>

              <div className="flex w-3/4 flex-col items-center self-center">
                {isSelectedItemNotEmpty && (
                  <ItemInformation item={items[itemSelected]} />
                )}

                {/* Add text component */}
                <div className="flex flex-row items-center space-x-5 p-5">
                  <div className="custom-number-input w-32">
                    <label
                      htmlFor="custom-input-number"
                      className="w-full text-base font-semibold text-gray-700">
                      Amount
                    </label>
                    <div className="relative mt-1 flex h-10 w-full flex-row rounded-lg bg-transparent">
                      <button
                        onClick={handleDecrement}
                        className=" h-full w-20 cursor-pointer rounded-l bg-pepa-lightPink text-gray-600 outline-none hover:bg-pepa-pink hover:text-white">
                        <span className="m-auto text-2xl font-thin">-</span>
                      </button>
                      <input
                        type="number"
                        className="md:text-basecursor-default flex w-full items-center bg-pepa-lightPink text-center text-base font-semibold text-gray-700  outline-none hover:text-black focus:text-black focus:outline-none"
                        name="custom-input-number"
                        value={itemAmount}
                        onChange={e => setItemAmount}></input>
                      <button
                        onClick={handleIncrement}
                        className="h-full w-20 cursor-pointer rounded-r bg-pepa-lightPink text-gray-600 outline-none hover:bg-pepa-pink hover:text-white">
                        <span className="m-auto text-2xl font-thin">+</span>
                      </button>
                    </div>
                  </div>
                  <div className="flex self-end">
                    <a
                      href="#"
                      className="focus:ring-3 inline-flex h-10 items-center rounded-lg bg-pepa-pink px-4 py-2 text-center text-base font-medium text-white hover:bg-pepa-pink/80 focus:outline-none focus:ring-pepa-darkPink">
                      Purchase
                      <svg
                        aria-hidden="true"
                        className="-mr-1 ml-2 h-4 w-4"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg">
                        <path
                          fillRule="evenodd"
                          d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                          clipRule="evenodd"></path>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </AspectRatio>
      </Center>
    </Container>
  )
}

export default ShopUI
