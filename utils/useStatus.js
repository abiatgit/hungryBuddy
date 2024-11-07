// import React, { useEffect, useState } from "react";

// const useStatus = () => {
//   try {
//     const [onlineStaus, setonlineStaus] = useState(true);

//     useEffect(() => {
   
//         window.addEventListener("online", () => setonlineStaus(true));
//         window.addEventListener("offline", () => setonlineStaus(false));
    

//     }, []);
    
//     return onlineStaus;
//   } catch (err) {
//     console.log(err.message);
//   }
// };

// export default useStatus;
