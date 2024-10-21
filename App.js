import React from "react";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,Outlet
} from "react-router-dom";
import Header from "./componets/Header";
import Body from "./componets/Body";
import About from "./componets/About";
import Contact from "./componets/Contact";
import Services from "./componets/Services"
import Error from "./componets/Error"
import ResturantProfile from "./componets/RestaurantProfile"

const Applaout = () => {
  return (
    <div className="appLayout">
      <div className="header-container">
        <Header />
      </div>
      <div>
        <Outlet />
      </div>
    </div>
  );
};

const appRouter = createBrowserRouter([
  { path: "/",
     element: <Applaout />,
     children:[
      {
        path:"/",
        element:<Body/>

      },
      {
        path:"/about",
        element:<About/>
      },
      {
        path:"/contact",
        element:<Contact/>
      },
      {
        path:"/service",
        element:<Services/>
      },
      {
        path:"/restaurants/:resId",
        element:<ResturantProfile/>
      }
     ],
     errorElement:<Error/>,
     },
    ]);

const root = createRoot(document.getElementById("root"));


root.render(<RouterProvider router={appRouter}/>);
