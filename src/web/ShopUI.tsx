import React, { useState, useEffect, useRef } from "react";
import ItemsGrid from "./ItemsGrid";
import { getItems, getInventoryItems, emptyItem } from "../utils/getItems";
import ItemsContext from "./ItemsContext";
import { ItemType } from "../data/items.type";
import ItemInformation from "./ItemInformation";
import {
  goUp,
  goLeft,
  goRight,
  getMatrixPositionFromIndex,
  goDown,
  getIndexFromMaxtrixPosition,
} from "../utils/keyboardNavigation";

// import linkImage from "./assets/bg.png";

function ShopUI() {
  const [items, setItems] = useState(getItems());
  const [itemSelected, setItemSelected] = useState(0);
  const [isModalOpened, setIsModalOpened] = useState(false);

  const [isModalOpened1, setIsModalOpened1] = useState(false);
  const [itemsEquipped, setItemsEquipped] = useState<{
    [key: string]: ItemType;
  }>({});
  const isSelectedItemNotEmpty = items[itemSelected].name !== "";
  const inventoryRef = useRef<HTMLDivElement>(null);

  const closeModal = () => {
    setIsModalOpened(false);
    if (inventoryRef.current) {
      inventoryRef.current.focus();
    }
  };

  const equipItem = () => {
    const itemSelectedData = items[itemSelected];
    setItemsEquipped({
      ...itemsEquipped,
      [itemSelectedData.category]: itemSelectedData,
    });
    // playAction();
  };

  const dropItem = () => {
    const newItems = [...items];
    newItems.splice(itemSelected, 1);
    newItems.push(emptyItem);
    setItems(newItems);
    // setItemsPaginated(newItemsPaginated);
    // playAction();
  };
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
    itemsEquipped,
  };

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
    } else if (event.key === "Enter") {
      setIsModalOpened(!isModalOpened);
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
      className="bg-pepa-blue min-h-screen flex-1 font-calamity p-10"
      tabIndex={0}
    >
      <div className="container mx-auto flex mt-32 flex-col xl:flex-row">
        <div className="flex flex-col justify-center w-full mx-auto xl:w-1/2 relative ">
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

        <div className="flex flex-col items-center self-end xl:items-start w-full xl:w-1/2 my-6 xl:my-0">
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
            <div className="flex mt-4 space-x-3 md:mt-6">
              <a
                href="#"
                className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Use Item
              </a>
              <a
                href="#"
                className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Purchase
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
          </div>
        </div>
      </div>
    </div>
  );
}

export default ShopUI;
