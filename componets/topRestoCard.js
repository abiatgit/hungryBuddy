import { useContext } from "react";
import IMG_URL from "../utils/constant"
import userData from "../utils/UserContext";
const TopRestoCard = ({ pro }) => {

  const {userName}=useContext(userData)

  const { avgRating, name, cloudinaryImageId, areaName } = pro.info;
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden transform transition duration-300 ease-in-out hover:scale-105 hover:shadow-xl mx-5  ">
     <div className="">
     <img
        className="object-cover"
        src={IMG_URL+cloudinaryImageId}
        alt={name}
      />
     </div>
      
      <div className="p-4">
        <h3 className="font-bold text-xl mb-2 text-gray-800">{name}</h3>
        <div className="flex items-center mb-2">
          <svg className="w-5 h-5 text-yellow-500 mr-1" fill="currentColor" viewBox="0 0 20 20">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
          <span className="text-gray-600 font-semibold">{avgRating}</span>
        </div>
        <p className="text-gray-600">{areaName}</p>
        <p>{userName}</p>
      </div>
    </div>
  )
  // return (
  //   <div className="transform transition duration-300 ease-in-out hover:scale-110">
  //     <img
  //       className="m-4 p-4 rounded-2xl w-[400px] h-[200px]"
  //       src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${cloudinaryImageId}`}
  //       alt="Description"
  //     />
  //     <div className=" m-4 p-4 ">
  //       <h3>{name}</h3>
  //       <h4>{avgRating}</h4>
  //       <h6>{areaName}</h6>
  //     </div>
  //   </div>
  // );
};
export default TopRestoCard;
