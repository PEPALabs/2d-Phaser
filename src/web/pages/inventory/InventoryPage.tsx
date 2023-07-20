import React, { useState, useEffect, useRef } from "react";
import ItemsGrid from "../../ItemsGrid";
import { getItems, getInventoryItems } from "../../../utils/getItems";
import ItemsContext from "../../ItemsContext";
import ItemInformation from "../../ItemInformation";
import {
  goUp,
  goLeft,
  goRight,
  getMatrixPositionFromIndex,
  goDown,
  getIndexFromMaxtrixPosition,
} from "../../../utils/keyboardNavigation";

import GameManager from "../../../GameManager";

// import linkImage from "./assets/bg.png";

function InventoryUI() {
  const gameManager = GameManager.getInstance();
  const items = getItems();
  const [itemSelected, setItemSelected] = useState(0);
  const [itemAmount, setItemAmount] = useState(0);
  const contextState = {
    setItemSelected,
    itemSelected,
  };
  const [inventoryItems, setInventoryItems] = useState(
    getInventoryItems(gameManager.inventory)
  );
  const inventoryRef = useRef<HTMLDivElement>(null);

  const handleKeyPressed = (event: React.KeyboardEvent) => {
    let newItemSelected = null;
    const positionItemSelected = getMatrixPositionFromIndex(itemSelected);
    if (event.key === "ArrowUp") {
      newItemSelected = goUp(positionItemSelected);
    } else if (event.key === "ArrowDown") {
      newItemSelected = newItemSelected = goDown(positionItemSelected);
    } else if (event.key === "ArrowLeft") {
      newItemSelected = goLeft(positionItemSelected);
    } else if (event.key === "ArrowRight") {
      newItemSelected = goRight(positionItemSelected);
    }
    if (newItemSelected) {
      setItemSelected(getIndexFromMaxtrixPosition(newItemSelected));
    }
  };

  const handleIncrement = (event: React.MouseEvent) => {
    let currentAmount = itemAmount;
    setItemAmount(currentAmount + 1);
  };

  const handleDecrement = (event: React.MouseEvent) => {
    let currentAmount = itemAmount;
    if (currentAmount > 0) setItemAmount(currentAmount - 1);
  };

  useEffect(() => {
    if (inventoryRef.current) {
      inventoryRef.current.focus();
    }
    setInventoryItems(getInventoryItems(gameManager.inventory));
    console.log("inventoryItems", gameManager.inventory);
  }, []);

  return (
    <div
      ref={inventoryRef}
      onKeyDown={handleKeyPressed}
      className="bg-pepa-blue min-h-screen flex-1 font-calamity p-10"
      tabIndex={0}
    >
      <div className="flex flex-row w-full space-x-10 items-center">
        <div className="flex flex-row items-center space-x-3 text-gray-700">
          <img className="w-10 h-10" src="/assets/coin.png" />
          <div>User Balance: 1000 ETH</div>
        </div>

        <div className="text-2xl text-gray-700">Inventory</div>
      </div>
      <div className="container mx-auto flex mt-16 flex-col space-y-20">
        {/* Left panel */}
        <div className="flex flex-col items-center w-3/4 mx-auto relative">
          {/* expand the context to entire board */}
          <ItemsContext.Provider value={contextState}>
            <div className="flex">
              <ItemsGrid items={inventoryItems} />
            </div>
          </ItemsContext.Provider>
        </div>
        {/*Right panel */}
        <div className="flex flex-col items-center self-center w-3/4">
          {inventoryItems[itemSelected].name && (
            <ItemInformation item={inventoryItems[itemSelected]} />
          )}

          <div className="p-5 flex flex-row space-x-5 items-center">
            <div className="custom-number-input w-32">
              <label
                htmlFor="custom-input-number"
                className="w-full text-gray-700 text-base font-semibold"
              >
                Amount
              </label>
              <div className="flex flex-row h-10 w-full rounded-lg relative bg-transparent mt-1">
                <button
                  onClick={handleDecrement}
                  className=" bg-pepa-lightPink text-gray-600 hover:text-white hover:bg-pepa-pink h-full w-20 rounded-l cursor-pointer outline-none"
                >
                  <span className="m-auto text-2xl font-thin">-</span>
                </button>
                <input
                  type="number"
                  className="outline-none focus:outline-none text-center w-full bg-pepa-lightPink font-semibold text-base hover:text-black focus:text-black  md:text-basecursor-default flex items-center text-gray-700"
                  name="custom-input-number"
                  value={itemAmount}
                  onChange={(e) => setItemAmount}
                ></input>
                <button
                  onClick={handleIncrement}
                  className="bg-pepa-lightPink text-gray-600 hover:text-white hover:bg-pepa-pink h-full w-20 rounded-r cursor-pointer outline-none"
                >
                  <span className="m-auto text-2xl font-thin">+</span>
                </button>
              </div>
            </div>
            <div className="flex self-end">
              <a
                href="#"
                className="inline-flex items-center px-4 py-2 h-10 text-base font-medium text-center text-white bg-pepa-pink rounded-lg hover:bg-pepa-pink/80 focus:ring-3 focus:outline-none focus:ring-pepa-darkPink"
              >
                Use
                <svg
                  aria-hidden="true"
                  className="w-4 h-4 ml-2 -mr-1"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </a>
            </div>
            <div className="flex self-end items-center">
              <a
                href="#"
                className="inline-flex items-center px-4 py-2 h-10 text-base font-medium text-center text-white bg-pepa-pink rounded-lg hover:bg-pepa-pink/80 focus:ring-3 focus:outline-none focus:ring-pepa-darkPink"
              >
                Drop
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="ml-2 -mr-1"
                  viewBox="0 0 16 16"
                >
                  <path
                    d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"
                    fill="white"
                  ></path>
                  <path
                    fillRule="evenodd"
                    d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"
                    fill="white"
                  ></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default InventoryUI;
