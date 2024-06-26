import React, { useState } from "react";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
  Outlet,
} from "react-router-dom";
import Home from "./routes/Home";
import Menu from "./routes/Menu";
import Basket from "./routes/Basket";
import Payment from "./routes/Payment";
import About from "./routes/About";
import Contact from "./routes/Contact";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import "./App.css";

const AppLayout = () => {
  const [basket, setBasket] = useState([]);
  const handleClick = (item) => {
    if (basket.indexOf(item) !== -1) return;
    setBasket([...basket, item]);
  };
  const handleChange = (item, unit) => {
    const ind = basket.indexOf(item);
    const arr = basket;
    arr[ind].amount += unit;

    if (arr[ind].amount === 0) arr[ind].amount = 1;
    setBasket([...arr]);
  };

  return (
    <>
      <Navbar />
      <Outlet context={handleClick} />
      <Footer />
    </>
  );
};
const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "menu",
        element: <Menu />,
      },
      {
        path: "basket",
        element: <Basket />,
      },
      {
        path: "payment",
        element: <Payment />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
