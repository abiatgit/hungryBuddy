import { useState, useEffect } from "react";
import Restrocard from "./Restrocard";
import WhatsInyourMind from "./whatsInyourMind";
import { Link } from "react-router-dom";
import useStatus from "../utils/useStatus";
import useAllRestoList from "../utils/useAllrestolist.js";
import { index } from "cheerio/dist/commonjs/api/traversing";

const Body = () => {
  const onlineStaus = useStatus();
  const [searchdata, setsearchdata] = useState("");
  const {
    restoList,
    filterdrestoList,
    error,
    isLoading,
    whatmind,
    setrestoList,
    setfilterdrestoList,
  } = useAllRestoList();


  if (onlineStaus === false) {
    return (
      <div>
        <h1>you dont have internet</h1>
      </div>
    );
  }

if(isLoading){
  return <h1>Loading</h1>
}
  if(error){
    return <h1>Error:{error.message}</h1>
  }
  
 return (
    <div className="body-div">
      <div className="first-card-container">
        {whatmind.map((card) => {
          return <WhatsInyourMind key={card.id || index} pro={card} />;
        })}
      </div>

      <div className="search">
        <form>
          <input
            type="type"
            
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
          <Link
            key={restaurant.info.id}
            to={"/restaurants/" + restaurant.info.id}
          >
            <Restrocard resto={restaurant.info} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
