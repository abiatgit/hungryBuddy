import React, { useEffect, useState } from "react";
import {Menu_Api }from "./constant";

const useRestuarant = (resId) => {
    const [restProfileList, setrestProfileList] = useState(null);
  useEffect(() => {
    try {
      fetchData = async () => {
        const data = await fetch(Menu_Api + resId);
        const json = await data.json();
        setrestProfileList(json);
      };
    } catch (err) {
      console.log(err);
    } finally {
    }

    fetchData();
  }, []);

  return restProfileList
};
export default useRestuarant;
