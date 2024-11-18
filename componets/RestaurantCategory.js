import React, { useState } from "react";
import Itemlist from "./Itemlist";

const RestaurantCategory = ({ item,itemShow,setActiveIndex}) => {
 const clkkk=()=>setActiveIndex()

  return (
    <div className=" w-6/12 mx-auto shadow-lg ">
      <div className="h-[50px] my-4 shadow-lg border-b-4  cursor-pointer">
        <div className="flex justify-between text-center"
        onClick={clkkk} >
          <span className="mx-3 font-bold text-lg">
            {item.title} ({item.itemCards.length})
          </span>
          <span className="mx-3">⇩</span>
        </div>
      </div>

   {itemShow&& <Itemlist item={item.itemCards} />}
    </div>
  );
};

export default RestaurantCategory;
