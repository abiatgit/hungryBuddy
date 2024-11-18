import React from "react";
import IMG_URL from "../utils/constant";
import { useDispatch, useDispatch, useSelector } from "react-redux";
import{addItems} from "../utils/cartSlice"


const Itemlist = ({ item }) => {
  
  const dispatch= useDispatch()

  const addItem=(i)=>{
    dispatch(addItems(i))
  
  }
  return (
    <div className="divide-y divide-gray-200">
      {item.map((i) => (
        <div
          key={i.card.info.id}
          className="py-4 flex justify-between items-start"
        >
          <div className="w-9/12 pr-4 text-start mx-4">
            <h3 className="text-lg font-bold text-gray-900">
              {i.card.info.name}
            </h3>
            <p className="mt-1 text-sm text-gray-600">
              ₹ {i.card.info.price / 100 || i.card.info.defaultPrice / 100}
            </p>
            <p className="mt-2 text-sm text-gray-500 line-clamp-2">
              {i.card.info.description}
            </p>
          </div>
          {i.card.info.imageId && (
            <div className="w-3/12 pl-4 ">
              <img
                className="w-full h-24 object-cover rounded-md"
                src={IMG_URL + i.card.info.imageId}
                alt={i.card.info.name}
              />
              <div className="">
              <button className="shadow-lg p-2 m-auto"
               onClick={()=>addItem(i)

               }>add + </button>
                </div>
            </div>
           
          )}
       
        </div>
      ))}
    </div>
  );
};

export default Itemlist;