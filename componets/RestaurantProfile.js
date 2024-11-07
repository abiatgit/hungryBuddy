import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import useRestuarant from "../utils/useRestuarant";
import Shimeer from "./Shimmer";
import RestaurantCategory from "./RestaurantCategory.js";

import { Menu_Api } from "../utils/constant";

const ResturantProfile = () => {
  const { resId } = useParams();
  const restProfileList = useRestuarant(resId);
  const [isOpen, setIsOpen] = useState(false);

  if (restProfileList === null) return <Shimeer />;

  const { itemCards } =
    restProfileList?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR
      ?.cards[2]?.card?.card;

  const itemCategory =
    restProfileList?.data?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c?.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );
   

  const {
    avgRating,
    city,
    costForTwoMessage,
    id,
    name,
    cuisines,
    cloudinaryImageId,
  } = restProfileList?.data?.cards[2]?.card?.card?.info;

  return (
    <div className="  text-center">
      <h1 className="font-bold text-4x1 text-2xl ">{name}</h1>
   <div>
       <h5 className="border-blue-50">
        {avgRating} , {costForTwoMessage}
      </h5>

   </div>
    <div >
    {itemCategory.map((c, v) => {
        return <RestaurantCategory item ={c.card.card} />;
      })}
    </div>
    </div>
  );
};
export default ResturantProfile;
