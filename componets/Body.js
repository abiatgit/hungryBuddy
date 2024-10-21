import { useState, useEffect } from "react";
import Restrocard from "./Restrocard";
import WhatsInyourMind from "./whatsInyourMind";
import {Link} from "react-router-dom"
const Body = () => {
  const apiURL =
    "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9352403&lng=77.624532&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING";

  const [restoList, setrestoList] = useState([]);
  const [filterdrestoList, setfilterdrestoList] = useState([]);
  const [searchdata, setsearchdata] = useState("");
  const [whatmind, setwhatmind] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(apiURL);
        const jsonData = await response.json();
        setwhatmind(jsonData?.data?.cards[0]?.card?.card?.imageGridCards?.info);

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

  return restoList.length === 0 ? (
    <h1>loading....</h1>
  ) : (
    <div className="body-div">
      <div>hello</div>
      <div className="first-card-container">
        {whatmind.map((card) => {
          return <WhatsInyourMind pro={card} />;
        })}
      </div>

      <div className="search">
        <form>
          <input
            type="type"
            f
            placeholder="Search..."
            value={searchdata}
            onChange={(e) => {
              setsearchdata(e.target.value);
            }}
            className="search-input"
          />
          <button
            type="button"
            className="search-button"
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

        <div>
          <button
            type="button"
            className="search-button"
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

      <div className="reto-card-container">
        {filterdrestoList.map((restaurant, index) => (
          
          <Link key={restaurant.info.id} to ={"/restaurants/"+restaurant.info.id}><Restrocard  resto={restaurant.info} /></Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
