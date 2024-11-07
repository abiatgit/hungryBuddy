import React from "react";

function WhatsInyourMind(pro) {
  const imgId = pro.pro.imageId;


    return (
      <div className="flex-shrink-0 w-1/12 mr-7 ">
        <img
          className="w-full h-full object-cover rounded-lg"
          src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/${imgId}`}
          alt="Logo"
        />
      </div>
    );
  
}

export default WhatsInyourMind;
