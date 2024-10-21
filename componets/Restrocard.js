const Restrocard = ({ resto }) => {

  const { name, cuisines, cloudinaryImageId, avgRating, areaName, locality } =resto;

  let cusine = cuisines.map((val) => val.name);
  return (
  <div className="card-container">
    <div className="food-card">
      <div className="profile-img-div">
        <img
      src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${cloudinaryImageId}`} 
          className="food-card-image"
          alt={name}
        />
      </div>

      <div className="food-card-content">
        <h2>{name}</h2>
        <h3 className="food-card-title">{avgRating}</h3>
        <p className="food-card-description">{locality}</p>
        <p className="food-card-description">{cusine}</p>
        <p className="food-card-description">{areaName}</p>
      </div>
    </div>
  </div>
  );
};

export default Restrocard;
