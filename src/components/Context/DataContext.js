
import axios from "axios";
import { createContext, useState, useEffect } from "react";

export const dataContext = createContext();


const DataProvider = ({children}) => {
      const [data, setdata] =useState([]);
      const [cart, setCart] =useState([]);

      useEffect(()=>{
        axios("data.json").then((res)=> setdata(res.data))

      },[])
return <dataContext.Provider value={{ data, cart, setCart }}>{children}</dataContext.Provider>;
    

}
export default DataProvider;