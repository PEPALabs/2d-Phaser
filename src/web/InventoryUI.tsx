import React, { useState, useEffect, useRef } from "react";
import ItemsGrid from "./ItemsGrid";
import ShopGrid from "./ShopGrid";
import {getItems, getInventoryItems} from "../utils/getItems";
import ItemsContext from "./ItemsContext";
import ItemInformation from "./ItemInformation";
import {
  goUp,
  goLeft,
  goRight,
  getMatrixPositionFromIndex,
  goDown,
  getIndexFromMaxtrixPosition,
} from "../utils/keyboardNavigation";

import GameManager from "../GameManager";

// import linkImage from "./assets/bg.png";

function InventoryUI() {
  const gameManager = GameManager.getInstance();
  const items = getItems();
  gameManager.inventory.push(items[0]);
  const [itemSelected, setItemSelected] = useState(0);
  const contextState = {
    setItemSelected,
    itemSelected,
  };
  const [inventoryItems, setInventoryItems] = useState(getInventoryItems(gameManager.inventory));
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

  useEffect(() => {
    if (inventoryRef.current) {
      inventoryRef.current.focus();
    }
  }, []);

  return (
    <div
      ref={inventoryRef}
      onKeyDown={handleKeyPressed}
      className="bg-zelda-darkGreen min-h-screen pt-32 font-calamity"
      tabIndex={0}
    >
      <div className="container mx-auto flex flex-col xl:flex-row">
        {/* Left panel */}
          <div className="w-full xl:w-1/2">
              {/* expand the context to entire board */}
            <ItemsContext.Provider value={contextState}>
              <ShopGrid items={inventoryItems} />
            </ItemsContext.Provider>
          </div>

        {/*Right panel */}
        <div className="flex flex-col items-center self-end xl:items-start w-full xl:w-1/2 my-6 xl:my-0">

        
          <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">

          {/* <img
            className="absolute hidden xl:block top-0 ml-48 z-0"
            src={linkImage}
            alt="link"
          /> */}
          

            {inventoryItems[itemSelected].name && (
                  <ItemInformation item={inventoryItems[itemSelected]} />
            )}

            {/* Add text component */}
            <a href="#">    
                <img className="rounded-t-lg" src="/docs/images/blog/image-1.jpg" alt="" />
            </a>
            <div className="p-5">
                <a href="#">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-black dark:text-white">Noteworthy technology acquisitions 2021</h5>
                </a>
                <p className="mb-3 font-normal text-black dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                <div className="flex mt-4 space-x-3 md:mt-6">
            
                    <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                        Use Item
                        
                    </a>
                    <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                        Purchase
                        <svg aria-hidden="true" className="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                    </a>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default InventoryUI;