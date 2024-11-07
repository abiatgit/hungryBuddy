import React, { useState } from "react";
import Itemlist from "./Itemlist";
const RestaurantCategory = (items) => {
  const total = items.item.itemCards.length;
  const { title } = items.item;

  const itemsss = items.item.itemCards


  return (
    <div>
      <div className="bg-slate-300 mx-auto my-4 shadow-lg border-b-4 h-18 w-6/12 ">
        <div className="flex justify-between">
          <span className="mx-3 font-bold text-lg">
            {title} ({total})
          </span>
          <span className="mx-3">⇩</span>
        </div>
        <Itemlist item={itemsss} />
      </div>
    </div>
  );
};

export default RestaurantCategory;
