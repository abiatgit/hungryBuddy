import Restrocard from "./Restrocard"


const foodItem = {
    name: 'Pizza',
    price: 9.99,
    imageUrl: "https://just-eat-prod-eu-res.cloudinary.com/image/upload/c_thumb,w_1097,h_480/f_auto/q_auto/dpr_2.0/d_uk:cuisines:pizza-4.jpg/v1/uk/restaurants/190244.jpg",
    description: 'Delicious cheesy pizza with fresh toppings.'
  };



const Body=()=>{
    return(
        <div className="reto-card-container">
            <Restrocard foodobj={foodItem}/>
        </div>
    )
}

export default Body;