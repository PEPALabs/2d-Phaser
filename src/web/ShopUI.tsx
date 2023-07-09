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
  const [itemAmount, setItemAmount] = useState(0);
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

        <div className="text-2xl text-gray-700">PEPA Shop</div>
      </div>
      <div className="container mx-auto flex mt-16 flex-col space-y-20">
        <div className="flex flex-col items-center w-3/4 mx-auto relative">
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

        <div className="flex flex-col items-center self-center w-3/4">
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
