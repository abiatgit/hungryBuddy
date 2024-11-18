import React, { Suspense, lazy, useEffect, useState } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Header from "./componets/Header";
import Body from "./componets/Body";
import Contact from "./componets/Contact";
import Services from "./componets/Services";
import Error from "./componets/Error";
import ResturantProfile from "./componets/RestaurantProfile";
import userData from "./utils/UserContext";
import { Provider } from "react-redux";
import store from "./utils/AppStore";
const Grocery =lazy(()=>import("./componets/Grocery"))
const About=lazy(()=>import("./componets/About"))
import Store from "./componets/Store"

const Applaout = () => {
  [newUserName,setNewUserName]=useState()
  useEffect(()=>{
 const data={name:"amma"}
 setNewUserName(data.name)
  },[])
 
  return (


    <div className="appLayout">
      <Provider store={store}>
      <userData.Provider value={{userName:newUserName,setNewUserName}}>
      <div className="header-container">
        <Header />
      </div>
      </userData.Provider>
      <userData.Provider value={{userName:"ancy"}}>
      <div>
        <Outlet />
      </div>
      </userData.Provider>
      </Provider>
    </div>
   
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Applaout />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element:<Suspense fallback={<h3>wait baby wait</h3>}> <About/></Suspense>,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/service",
        element: <Services />,
      },
      {
        path: "/restaurants/:resId",
        element: <ResturantProfile />,
      },
      {
        path: "/grocery",
        element: <Suspense fallback={<h2>it will come</h2>}><Grocery/></Suspense>,
      },
      {
        path: "/cart",
        element: <Store/>
      }
    ],
    errorElement: <Error />,
  },
]);

const root = createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);
