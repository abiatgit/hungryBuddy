import React from "react";
import IMG_URL from "../utils/constant"
function WhatsInyourMind(pro) {
  const imgId = pro.pro.imageId;


    return (
      <div className="flex-shrink-0 w-1/12 mr-7 ">
        <img
          className="w-full h-full object-cover rounded-lg"
          src={IMG_URL+imgId}
          alt="Logo"
        />
      </div>
    );
  
}

export default WhatsInyourMind;
