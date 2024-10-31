import { useState,useEffect } from "react";

const apiURL =
    "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9352403&lng=77.624532&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING";


    function useAllRestoList(){
        const [restoList, setrestoList] = useState([]);
        const [filterdrestoList, setfilterdrestoList] = useState([]);
        const [error,seterror]=useState(null)
        const [isLoading,setisLoading]=useState(true)
        const[whatmind,setwhatmind]=useState([])
       

        useEffect(() => {
            const fetchData = async () => {
              try {
                const response = await fetch(apiURL);
                const jsonData = await response.json();
                setwhatmind(jsonData?.data?.cards[0]?.card?.card?.imageGridCards?.info);
        
                setrestoList(
                  jsonData?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
                    ?.restaurants
                );
                setfilterdrestoList(
                  jsonData?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
                    ?.restaurants
                );
              } catch (err) {
                console.error("Error fetching data:", err);
                seterror(err.message)
              }
              finally{
                setisLoading(false)
              }
            };
            fetchData();
          }, []);

          return {restoList,filterdrestoList,error,isLoading,whatmind,setrestoList,setfilterdrestoList}

    }
export default useAllRestoList