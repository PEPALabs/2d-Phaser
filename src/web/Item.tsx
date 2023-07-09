import React, { useContext } from "react";
import ItemsContext from "./ItemsContext";
import Modal from "./Modal";
import cx from "classnames";
// import BonusIcon from "./BonusIcon";
import { ItemCategoriesType, ItemsBonusType } from "../data/items.type";

type Props = {
  name: string;
  icon: string;
  value: string;
  category: ItemCategoriesType;
  bonus?: ItemsBonusType;
  itemIndex: number;
};

const Item: React.FC<Props> = ({
  name,
  icon,
  value,
  category,
  bonus,
  itemIndex,
}) => {
  const {
    itemSelected,
    setItemSelected,
    isModalOpened1,
    setIsModalOpened1,
    itemsEquipped,
  } = useContext(ItemsContext);

  //   setIsModalOpened(true);
  //   console.log("itemIndex", isModalOpened, itemSelected);
  const isSelected = itemSelected === itemIndex;
  const isEquipped = itemsEquipped && itemsEquipped[category]?.name === name;

  const handleClick = () => {
    if (!isModalOpened1) {
      // playAction();
    }
    // setIsModalOpened1(!isModalOpened1);
    console.log("itemIndex", isModalOpened1, isSelected, itemSelected);
    setItemSelected && setItemSelected(itemIndex);
    //   setIsModalOpened(true);
    // setIsModalOpened1(!isModalOpened1);
    console.log("itemIndex1", isModalOpened1, isSelected);
    setIsModalOpened1 && setIsModalOpened1(!isModalOpened1);
  };
  return (
    <div
      onClick={() => {
        handleClick();
      }}
      onMouseDown={(e) => {
        e.stopPropagation();
      }}
      className={cx(
        {
          "shadow-pepa-gold !border-pepa-gold border-2 rounded-md": isSelected,
          "zelda-background-item ": isEquipped,
        },
        "relative w-20 h-20 bg-pepa-lightPink border-2 border-pepa-textBlue/30 rounded-md cursor-pointer"
      )}
    >
      {isSelected && !isModalOpened1}
      {/* {bonus && (
                <BonusIcon bonusType={bonus} className="absolute top-0 left-0" />
            )} */}
      <img alt={name} src={icon} />
      {value && (
        <div className="z-0 bg-black -mx-1 -my-1 text-sm text-white absolute bottom-0 right-0 border border-zelda-darkGray px-2">
          {value}
        </div>
      )}
      {/* TODO:fix modal open variable or shortcut */}
      {isModalOpened1 && isSelected && <Modal />}
    </div>
  );
};

export default Item;
