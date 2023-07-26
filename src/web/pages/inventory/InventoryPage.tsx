import React, { useState, useEffect, useRef } from 'react'
import ItemsGrid from '../../ItemsGrid'
import { getItems, getInventoryItems } from '../../../data/getItems'
import ItemsContext from '../../ItemsContext'
import ItemInformation from '../../ItemInformation'
import {
  goUp,
  goLeft,
  goRight,
  getMatrixPositionFromIndex,
  goDown,
  getIndexFromMaxtrixPosition
} from '../../../utils/keyboardNavigation'

import GameManager from '../../../GameManager'
import { Container, Center, AspectRatio } from '@mantine/core'
import useGameStore, { inventoryActions } from '../../../data/useGameStore'

// import linkImage from "./assets/bg.png";

function InventoryUI() {
  const gameManager = GameManager.getInstance()
  const items = getItems()
  const [itemSelected, setItemSelected] = useState(0)
  const [itemAmount, setItemAmount] = useState(0)
  const contextState = {
    setItemSelected,
    itemSelected
  }
  const inventoryItems = useGameStore(state => state.inventories)
  const inventoryRef = useRef<HTMLDivElement>(null)

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
    inventoryActions.updateInventories(getInventoryItems(gameManager.inventory))
    console.log('inventoryItems', gameManager.inventory)
  }, [])

  return (
    <Container className=" h-full" size="xl">
      <Center className="h-full">
        <AspectRatio
          className="font-calamity w-full bg-pepa-blue"
          ratio={16 / 9}>
          <div
            ref={inventoryRef}
            onKeyDown={handleKeyPressed}
            className="h-full flex-col p-10"
            tabIndex={0}>
            <div className="flex w-full flex-row items-center space-x-10">
              <div className="flex flex-row items-center space-x-3 text-gray-700">
                <img className="h-10 w-10" src="/assets/coin.png" />
                <div>User Balance: 1000 ETH</div>
              </div>

              <div className="text-2xl text-gray-700">Inventory</div>
            </div>
            <div className="container mx-auto flex flex-col space-y-10">
              {/* Left panel */}
              <div className="relative mx-auto mt-10 flex w-3/4 flex-col items-center">
                {/* expand the context to entire board */}
                <ItemsContext.Provider value={contextState}>
                  <div className="flex">
                    <ItemsGrid items={inventoryItems} />
                  </div>
                </ItemsContext.Provider>
              </div>
              {/*Right panel */}
              <div className="flex w-3/4 flex-col items-center self-center">
                {inventoryItems[itemSelected].name && (
                  <ItemInformation item={inventoryItems[itemSelected]} />
                )}

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
                        className="h-full w-20 cursor-pointer rounded-l border-0 bg-pepa-lightPink text-gray-600 outline-none hover:bg-pepa-pink hover:text-white">
                        <span className="m-auto text-2xl font-thin">-</span>
                      </button>
                      <input
                        type="number"
                        className="md:text-basecursor-default flex w-full items-center border-0 bg-pepa-lightPink text-center text-base font-semibold text-gray-700  outline-none hover:text-black focus:text-black focus:outline-none"
                        name="custom-input-number"
                        value={itemAmount}
                        onChange={e => setItemAmount}></input>
                      <button
                        onClick={handleIncrement}
                        className="h-full w-20 cursor-pointer rounded-r border-0 bg-pepa-lightPink text-gray-600 outline-none hover:bg-pepa-pink hover:text-white">
                        <span className="m-auto text-2xl font-thin">+</span>
                      </button>
                    </div>
                  </div>
                  <div className="flex self-end">
                    <a
                      href="#"
                      className="focus:ring-3 inline-flex h-10 items-center rounded-lg bg-pepa-pink px-4 py-2 text-center text-base font-medium text-white hover:bg-pepa-pink/80 focus:outline-none focus:ring-pepa-darkPink">
                      Use
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
                  <div className="flex items-center self-end">
                    <a
                      href="#"
                      className="focus:ring-3 inline-flex h-10 items-center rounded-lg bg-pepa-pink px-4 py-2 text-center text-base font-medium text-white hover:bg-pepa-pink/80 focus:outline-none focus:ring-pepa-darkPink">
                      Drop
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        className="-mr-1 ml-2"
                        viewBox="0 0 16 16">
                        <path
                          d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"
                          fill="white"></path>
                        <path
                          fillRule="evenodd"
                          d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"
                          fill="white"></path>
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

export default InventoryUI
