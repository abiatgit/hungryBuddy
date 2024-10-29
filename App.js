import React, { Suspense, lazy } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Header from "./componets/Header";
import Body from "./componets/Body";
import Contact from "./componets/Contact";
import Services from "./componets/Services";
import Error from "./componets/Error";
import ResturantProfile from "./componets/RestaurantProfile";


const Grocery =lazy(()=>import("./componets/Grocery"))
const About=lazy(()=>import("./componets/About"))

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
    ],
    errorElement: <Error />,
  },
]);

const root = createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);
