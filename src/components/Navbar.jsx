import { Home, PieChart, Plus, ShoppingBag, User } from "lucide-react";
import Add from "../../public/Add.svg";
import React from "react";
import { useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();
  const isCurrentPath = (path) => location.pathname === path;
  return (
    <>
      <div className="sm:hidde min-w-[400px] w-full h-20 fixed bottom-0 left-0 border flex items-center justify-between px-4 bg-[#D9D9D9]">
        <div className="w-full h-full relative flex items-center justify-between">
          <div className="flex items-center justify-between min-w-[30%] ">
            <div
              className={`flex flex-col items-center cursor-pointer ${
                isCurrentPath("/") ? "text-[#62223C]" : "text-black"
              }`}
            >
              <Home />
              <p className="select-none">Home</p>
            </div>
            <div
              className={`flex flex-col items-center cursor-pointer ${
                isCurrentPath("/cart") ? "text-[#62223C]" : ""
              }`}
            >
              <ShoppingBag />
              <p className="select-none">Cart</p>
            </div>
          </div>
          <div className="flex items-center justify-between min-w-[35%] ">
            <div
              className={`flex flex-col items-center cursor-pointer ${
                isCurrentPath("/analytics") ? "text-[#62223C]" : ""
              }`}
            >
              <PieChart />
              <p className="select-none">Analytics</p>
            </div>
            <div
              className={`flex flex-col items-center cursor-pointer ${
                isCurrentPath("/profile") ? "text-[#62223C]" : ""
              }`}
            >
              <User />
              <p className="select-none">Profile</p>
            </div>
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer w-[40%] flex items-center justify-center">
          <img src={Add} alt="Add" className="select-none" />
        </div>
      </div>
      <div className="hidden sm:block fixed w-full h-28 border"></div>
    </>
  );
};

export default Navbar;