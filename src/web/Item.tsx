import React, { useContext } from "react";

type Props = {
  name: string;
  icon: string;
  value: string;
};

const Item: React.FC<Props> = ({ name, icon, value }) => {
  return (
    <div className="relative w-20 h-20 bg-black border border-zelda-darkGray cursor-pointer">
      <img alt={name} src={icon} />
      <div className="z-0 bg-black -mx-1 -my-1 text-sm text-white absolute bottom-0 right-0 border border-zelda-darkGray px-2">
        {value}
      </div>
    </div>
  );
};

export default Item;