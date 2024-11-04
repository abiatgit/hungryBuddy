import { useState, useEffect } from "react";
import Restrocard from "./Restrocard";
import WhatsInyourMind from "./whatsInyourMind";
import {Link} from "react-router-dom"
import useStatus from "../utils/useStatus"

import TopRestoCard from "../componets/topRestoCard"


const Body = () => {
  const apiURL =
    "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9352403&lng=77.624532&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING";

  const [restoList, setrestoList] = useState([]);
  const [filterdrestoList, setfilterdrestoList] = useState([]);
  const [searchdata, setsearchdata] = useState("");
  const [topResto,settopResto]=useState("")
  const [whatmind, setwhatmind] = useState([]);
  const onlineStaus=useStatus()


  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(apiURL);
        const jsonData = await response.json();
    
        setwhatmind(jsonData?.data?.cards[0]?.card?.card?.imageGridCards?.info);
        settopResto(jsonData?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    

        setrestoList(
          jsonData?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
            ?.restaurants
        );
        setfilterdrestoList(
          jsonData?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
            ?.restaurants
        );
      } catch (err) {
        console.error("Error fetching data:", err);
      }
    };
    fetchData();
  }, []);


if(onlineStaus===false){
 return ( <div>
    <h1>you dont have internet</h1>
  </div>)
}
  return restoList.length === 0 ? (
    <h1>loading....</h1>
  ) : (
    
    <div className="overflow-x-auto p-4">
 <h1 className="font-bold text-2xl text-gray-800">What's on your mind?</h1>
 <div className="flex flex-nowrap overflow-x-auto m-5 p-5 w-full">
  {whatmind.map((card) => (
    <WhatsInyourMind key={card.id} pro={card} />
  ))}
</div>
      <h1 className="font-bold text-2xl text-gray-800">Top restaurant chains in Bangalore</h1>
      <div className="flex overflow-x-auto p-4">
   {   topResto.map((item)=>{
  return   <TopRestoCard pro={item}/>
      })}
      
      </div>

      <div className="m-5 flex items-center justify-start ">
        <form className="">
          <input
            type="type"
            f
            placeholder="Search..."
            value={searchdata}
            onChange={(e) => {
              setsearchdata(e.target.value);
            }}
            className="w-100 px-4 py-2 text-gray-700 bg-white border rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
          <button
            type="button"
            className="m-5 px-6 py-3 bg-yellow-400 hover:bg-yellow-500 text-white font-bold rounded-lg shadow-md hover:shadow-lg transition duration-300 ease-in-out transform hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-yellow-600 focus:ring-opacity-50"
            onClick={() => {
              let fileterddata = restoList.filter((val) => {
                return val.info.name
                  .toLowerCase()
                  .includes(searchdata.toLowerCase());
              });

              setfilterdrestoList(fileterddata);
            }}
          >
            Search
          </button>
        </form>

        <div className="">
          <button
            type="button"
            className="m-5 px-6 py-3 bg-yellow-400 hover:bg-yellow-500 text-white font-bold rounded-lg shadow-md hover:shadow-lg transition duration-300 ease-in-out transform hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-yellow-600 focus:ring-opacity-50"
            onClick={() => {
              let Newfileterddata = restoList.filter((val) => {
                return val.info.avgRating > 4.3;
              });
              setfilterdrestoList(Newfileterddata);
            }}
          >
            Toprated
          </button>
        </div>
      </div>

      <div className="flex m-5 p-5 flex-wrap ">
        {filterdrestoList.map((restaurant, index) => (
          
          <Link key={restaurant.info.id} to ={"/restaurants/"+restaurant.info.id}><Restrocard  resto={restaurant.info} /></Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
