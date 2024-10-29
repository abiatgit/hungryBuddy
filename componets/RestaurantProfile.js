import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import  useRestuarant from "../utils/useRestuarant"
import Shimeer from "./Shimmer";

import { Menu_Api } from "../utils/constant";

const ResturantProfile = () => {
  const { resId } = useParams();
  const restProfileList=useRestuarant(resId)

if(restProfileList===null) return <Shimeer/>

  const { itemCards } =
    restProfileList?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR
      ?.cards[2]?.card?.card;

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
    <div className="menu">
      <div className="heroImg"></div>
      <div>
        <h1>{name}</h1>
        <h5>{avgRating}</h5>
        <h5>{city}</h5>
      </div>
      <div>
        <ul>
          {itemCards.map((item) => {
            return (
              <li key={item?.card?.info?.id}>
                {item.card.info.name} ..... Rs-{" "}
                {item.card.info.defaultPrice / 100 ||
                  item.card.info.price / 100}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};
export default ResturantProfile;
