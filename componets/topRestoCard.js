const TopRestoCard = ({pro}) => {
    console.log(`my pro${pro}`)
  const { avgRating, name, cloudinaryImageId, areaName } = pro.info;

  return (
    <div className="">
        
    <img
  className="m-4 p-4 rounded-2xl w-[400px] h-[200px]"
  src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${cloudinaryImageId}`}
  alt="Description"
/>
      <div className=" m-4 p-4 ">
        
      <h3>{name}</h3>
        <h4>{avgRating}</h4>
        <h6>{areaName}</h6>
      </div>
   
    </div>
  );
};
export default TopRestoCard;
