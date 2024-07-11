import { Home, PieChart, Plus, ShoppingBag, User } from "lucide-react";
import Add from "../../public/Add.svg";
import React from "react";
import { useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import "./navbar.css";

const Navbar = () => {
  const location = useLocation();
  const isCurrentPath = (path) => location.pathname === path;

  const navItems = [
    {
      title: "Home",
      url: "/",
    },
    {
      title: "Cart",
      url: "/cart",
    },
    {
      title: "Add",
      url: "/add",
      imgUrl: "/Add.svg",
    },
    {
      title: "Analytics",
      url: "/analytics",
    },
    {
      title: "Profile",
      url: "/profile",
    },
  ];

  return (
    <>
      <div className="sm:hidden min-w-[400px] w-full h-28 fixed bottom-0 left-0  pt-8 bg-white flex items-center justify-between ">
        <div className="w-full h-full relative flex items-center justify-between bg-[#D9D9D9] pl-4 pr-6">
          <div className="flex items-center justify-between min-w-[30%]">
            <div
              className={`flex flex-col items-center cursor-pointer ${
                isCurrentPath("/") ? "text-[#62223C]" : "text-black"
              }`}
            >
              <Home />
              <p className="select-none text-[12px]">{navItems[0].title}</p>
            </div>
            <div
              className={`flex flex-col items-center cursor-pointer ${
                isCurrentPath("/cart") ? "text-[#62223C]" : ""
              }`}
            >
              <ShoppingBag />
              <p className="select-none text-[12px]">{navItems[1].title}</p>
            </div>
          </div>
          <div className="flex items-center justify-between min-w-[35%]">
            <div
              className={`flex flex-col items-center cursor-pointer ${
                isCurrentPath("/analytics") ? "text-[#62223C]" : ""
              }`}
            >
              <PieChart />
              <p className="select-none text-[12px]">{navItems[3].title}</p>
            </div>
            <div
              className={`flex flex-col items-center cursor-pointer ${
                isCurrentPath("/profile") ? "text-[#62223C]" : ""
              }`}
            >
              <User />
              <p className="select-none text-[12px]">{navItems[4].title}</p>
            </div>
          </div>
        </div>
        <div
          id="add"
          className="absolute bottom-8 left-1/2 transform -translate-x-[62%] cursor-pointer flex items-center justify-center"
        >
          <img
            src={navItems[2].imgUrl}
            alt={navItems[2].title}
            className="select-none"
          />
        </div>
      </div>

      <div className="hidden sm:block fixed w-full h-28 border"></div>
    </>
  );
};

export default Navbar;
