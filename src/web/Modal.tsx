import React, { useState, useRef, useEffect, useContext } from 'react'
import cx from 'classnames'
// import TrianglesBox from "./TrianglesBox";
import useClickOutside from '../hooks/useClickOutside'
import ItemsContext from './ItemsContext'

import GameManager from '../GameManager'
import { Game } from 'phaser'
import { getItems } from '../utils/getItems'
enum ModalOptions {
  EQUIP = 0,
  DROP = 1,
  CANCEL = 2,
  ADD = 3
}

export default () => {
  const { closeModal, equipItem, dropItem, itemSelected } =
    useContext(ItemsContext)
  const [selectedOption, setSelectedOption] = useState(ModalOptions.EQUIP)
  const modalRef = useRef<HTMLDivElement>(null)
  const [gameManager, setGameManager] = useState(GameManager.getInstance())

  // TODO: add items to context
  const [items, setItems] = useState(getItems())

  useClickOutside(modalRef, closeModal)

  const addToInventoryAndClose = () => {
    if (closeModal && gameManager) {
      GameManager.addItem(gameManager, items[itemSelected])
      console.log('added item', items[itemSelected])
      closeModal()
    }
  }

  const equipAndClose = () => {
    if (closeModal && equipItem) {
      equipItem()
      closeModal()
    }
  }

  const dropAndClose = () => {
    if (closeModal && dropItem) {
      dropItem()
      closeModal()
    }
  }

  const handleKeyPressed = (event: React.KeyboardEvent) => {
    event.stopPropagation()
    if (event.key === 'ArrowUp') {
      setSelectedOption(Math.max(selectedOption - 1, 0))
    } else if (event.key === 'ArrowDown') {
      setSelectedOption(Math.min(selectedOption + 1, 2))
    } else if (event.key === 'Enter') {
      switch (selectedOption) {
        case ModalOptions.EQUIP:
          equipAndClose()
          break
        case ModalOptions.DROP:
          dropAndClose()
          break
        default:
          closeModal && closeModal()
          break
      }
      closeModal && closeModal()
    }
  }

  useEffect(() => {
    if (modalRef.current) {
      modalRef.current.focus()
    }
  }, [])

  return (
    <div
      ref={modalRef}
      onKeyDown={handleKeyPressed}
      tabIndex={0}
      className="bg-zelda-bgModal absolute left-0 top-0 z-50 mx-6 my-6 w-32 border border-zelda-darkGray text-white outline-none">
      <div
        className="flex flex-col p-4"
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-headline">
        <div
          className={cx(
            {
              'border-2 border-zelda-softYellow shadow-yellow':
                selectedOption === ModalOptions.EQUIP
            },
            'relative mb-4 flex justify-center border border-zelda-darkGray px-6 py-2'
          )}
          onClick={equipAndClose}>
          {selectedOption === ModalOptions.EQUIP}
          Equip
        </div>
        <div
          className={cx(
            {
              'border-2 border-zelda-softYellow shadow-yellow':
                selectedOption === ModalOptions.DROP
            },
            'relative mb-4 flex justify-center border border-zelda-darkGray px-6 py-2'
          )}
          onClick={dropAndClose}>
          {selectedOption === ModalOptions.DROP}
          Drop
        </div>
        {/* add item to inventory */}
        <div
          className={cx(
            {
              'border-2 border-zelda-softYellow shadow-yellow':
                selectedOption === ModalOptions.ADD
            },
            'relative mb-4 flex justify-center border border-zelda-darkGray px-6 py-2'
          )}
          onClick={addToInventoryAndClose}>
          {selectedOption === ModalOptions.ADD}
          Add
        </div>

        <div
          className={cx(
            {
              'border-2 border-zelda-softYellow shadow-yellow':
                selectedOption === ModalOptions.CANCEL
            },
            'relative flex justify-center border border-zelda-darkGray px-6 py-2'
          )}
          onClick={closeModal}>
          {selectedOption === ModalOptions.CANCEL}
          Cancel
        </div>
      </div>
    </div>
  )
}
