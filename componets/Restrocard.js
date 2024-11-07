const Restrocard = ({ resto }) => {
  const { name, cuisines, cloudinaryImageId, avgRating, areaName, locality } =
    resto;

  let cusine = cuisines.map((val) => val.name);
  return (
    <div className=" flex flex-wrap m-4 p-4 rounded-lg shadow-md hover:shadow-lg transition duration-300 w-64 h-100 transform  ease-in-out hover:scale-110">
      <div className="w-30 rounded-md">
        <img
          className="rounded-md w-64 h-50"
          src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${cloudinaryImageId}`}
          alt={name}
        />
      </div>

      <div className="w-1/4 p-4">
        <h2 className="text-xl font-bold text-gray-800 mb-2">{name}</h2>
        <h3 className="boled">{avgRating}</h3>
        <p className="text-sm text-gray-600 mb-1">{locality}</p>
        <p className="food-card-description">{cusine}</p>
        <p className="food-card-description">{areaName}</p>
      </div>
    </div>
  );
};
export const promotedCard = (Restrocard) => {
  return (pro) => {
    return (
      <div className="relative   hover:shadow-lg transition duration-300 w-64 h-100 transform  ease-in-out hover:scale-110" >
        <label className="absolute   bg-black text-lg text-white rounded-lg z-10" >top kada</label>
        <Restrocard {...pro} />
      </div>
    );
  };
};

export default Restrocard;
