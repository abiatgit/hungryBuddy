


const Restrocard = ({foodobj}) => {
const {name, price, imageUrl, description }=foodobj

  return (
    <div className="food-card">
      <img src={imageUrl} alt={name} className="food-card-image" />
      <div className="food-card-content">
        <h2 className="food-card-title">{name}</h2>
        <p className="food-card-description">{description}</p>
        <div className="food-card-footer">
          <span className="food-card-price">${price}</span>
          <button className="food-card-order-button">Order Now</button>
        </div>
      </div>
    </div>
  );    
};
export default Restrocard;
