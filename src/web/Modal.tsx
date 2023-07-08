import React, { useState, useRef, useEffect, useContext } from "react";
import cx from "classnames";
// import TrianglesBox from "./TrianglesBox";
import useClickOutside from "../hooks/useClickOutside";
import ItemsContext from "./ItemsContext";

import GameManager from "../GameManager";
import { Game } from "phaser";
import { getItems } from "../utils/getItems";
enum ModalOptions {
  EQUIP = 0,
  DROP = 1,
  ADD = 2,
  CANCEL = 3,
}

export default () => {
  const { closeModal, equipItem, dropItem, itemSelected } =
    useContext(ItemsContext);
  const [selectedOption, setSelectedOption] = useState(ModalOptions.EQUIP);
  const modalRef = useRef<HTMLDivElement>(null);
  const [gameManager, setGameManager] = useState(GameManager.getInstance());

  // TODO: add items to context
  const [items, setItems] = useState(getItems());

  useClickOutside(modalRef, closeModal);

  const addToInventoryAndClose = () => {
    if (closeModal && gameManager) {
      GameManager.addItem(gameManager, items[itemSelected]);
      console.log("added item", items[itemSelected]);
      closeModal();
    }
  };

  const equipAndClose = () => {
    if (closeModal && equipItem) {
      equipItem();
      closeModal();
    }
  };

  const dropAndClose = () => {
    if (closeModal && dropItem) {
      dropItem();
      closeModal();
    }
  };

  const handleKeyPressed = (event: React.KeyboardEvent) => {
    event.stopPropagation();
    if (event.key === "ArrowUp") {
      setSelectedOption(Math.max(selectedOption - 1, 0));
    } else if (event.key === "ArrowDown") {
      setSelectedOption(Math.min(selectedOption + 1, 3));
    } else if (event.key === "Enter") {
      switch (selectedOption) {
        case ModalOptions.EQUIP:
          equipAndClose();
          break;
        case ModalOptions.DROP:
          dropAndClose();
          break;
        default:
          closeModal && closeModal();
          break;
      }
      closeModal && closeModal();
    }
  };

  useEffect(() => {
    if (modalRef.current) {
      modalRef.current.focus();
    }
  }, []);

  return (
    <div
      ref={modalRef}
      onKeyDown={handleKeyPressed}
      tabIndex={0}
      className="w-32 bg-pepa-textBlue absolute top-0 left-0 z-50 mx-10 my-10 outline-none text-white rounded-xl"
    >
      <div
        className="flex flex-col"
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-headline"
      >
        <div
          className={cx(
            {
              "shadow-yellow border-zelda-softYellow border":
                selectedOption === ModalOptions.EQUIP,
            },
            "flex justify-center px-6 py-4 relative rounded-t-xl bg-pepa-darkBlue"
          )}
          onClick={equipAndClose}
        >
          {selectedOption === ModalOptions.EQUIP}
          Equip
        </div>
        <div
          className={cx(
            {
              "shadow-yellow border-zelda-softYellow border":
                selectedOption === ModalOptions.DROP,
            },
            "flex justify-center px-6 py-4 relative bg-pepa-darkBlue"
          )}
          onClick={dropAndClose}
        >
          {selectedOption === ModalOptions.DROP}
          Drop
        </div>
        {/* add item to inventory */}
        <div
          className={cx(
            {
              "shadow-yellow border-zelda-softYellow border":
                selectedOption === ModalOptions.ADD,
            },
            "flex justify-center px-6 py-4 relative bg-pepa-darkBlue"
          )}
          onClick={addToInventoryAndClose}
        >
          {selectedOption === ModalOptions.ADD}
          Add
        </div>

        <div
          className={cx(
            {
              "shadow-yellow border-zelda-softYellow border":
                selectedOption === ModalOptions.CANCEL,
            },
            "flex justify-center px-6 py-4 relative rounded-b-xl bg-pepa-darkBlue"
          )}
          onClick={closeModal}
        >
          {selectedOption === ModalOptions.CANCEL}
          Cancel
        </div>
      </div>
    </div>
  );
};
