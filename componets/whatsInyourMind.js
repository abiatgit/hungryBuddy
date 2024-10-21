import React from "react";

function WhatsInyourMind(pro) {
  const imgId = pro.pro.imageId;

  console.log(imgId);

  return (
    
    <div className="whatsInyourMind-container">
    
        <img
          src={
            `https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/` +
            imgId
          }
        ></img>

  
    </div>
  );
}

export default WhatsInyourMind;
