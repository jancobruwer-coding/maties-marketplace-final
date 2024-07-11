import { Bell, ChevronsRight, Link, Search, Sparkles } from "lucide-react";
import React, { useState } from "react";
import "../pages/home.css";

const Home = () => {
  const [activeTab, setActiveTab] = useState("foryou");
  const handleActiveTabChange = (tabIndex) => {
    setActiveTab(tabIndex);
  };
  const categories = [
    {
      title: "Furniture",
      image: "/FurnitureIcon.svg",
    },
    {
      title: "Textbooks",
      image: "/TextbookIcon.svg",
    },
    {
      title: "Exam Papers",
      image: "/ExamIcon.svg",
    },
    {
      title: "Books",
      image: "/BookIcon.svg",
    },
  ];

  const foryouItems = [
    {
      title: "Wooden Chair",
      price: "150.00",
      img: "/chair.jpg",
    },
    {
      title: "Wooden Desk",
      price: "650.00",
      img: "/desk.jpeg",
    },
    {
      title: "Bed Frame (Metal)",
      price: "210.00",
      img: "/bedframe.jpg",
    },
  ];

  const limitTitleLength = (text) => {
    const limitedText = text.length > 13 ? text.substring(0, 13) + "..." : text;
    return limitedText;
  };

  return (
    <div className="w-full h-screen px-5 mb-[112px]">
      <div
        id="mobile-user-details"
        className="w-full mt-4 mb-8 flex items-center justify-between "
      >
        <div className="flex items-center">
          <img src="/location.svg" alt="location icon" />
          <div className="flex flex-col leading-tight select-none">
            {/* Account Type */}
            <p className="text-[14px] text-[#646464]">Free Account</p>
            <p className="text-[12px] font-medium">Merriman Avenue, 28</p>
          </div>
        </div>
        <Bell className="w-[29px] aspect-square" />
      </div>
      <div id="mobile-search" className="w-full  mb-8">
        <div className="relative w-full px-4 py-4 border flex items-center rounded-xl bg-[#E9E9E9]">
          <Search className="absolute" stroke="#424242" />
          <input
            type="text"
            placeholder="Search"
            className="w-full ml-8 text-xl bg-transparent focus:outline-none placeholder:text-[#424242]"
          />
        </div>
      </div>
      <div
        id="mobile-categories"
        className="w-full  flex gap-x-4 overflow-x-scroll scrollbar-hide mb-8"
        style={{ maxWidth: "100%" }}
      >
        {categories.map((category, index) => (
          <div
            key={index}
            className="w-[120px] flex-shrink-0 aspect-square flex flex-col items-center"
          >
            <img
              src={category.image}
              alt={category.title}
              className="w-[120px] aspect-square object-cover"
            />
            <p className="text-[12px]">{category.title}</p>
          </div>
        ))}
      </div>
      <div id="mobile-banner" className="w-full h-[83px]  mb-8">
        <div className="w-full h-full bg-[#62223C] px-4 py-2 rounded-xl flex items-center justify-between">
          <div className="flex flex-col items-start leading-snug">
            <h1 className="font-medium text-[28px] text-white">
              Free Shipping
            </h1>
            <h2 className="text-[14px] text-[#BCBCBC]">
              Available: 12 - 14 July
            </h2>
          </div>
          <div className="w-[35%] border h-[57.75px] rounded-xl flex items-center justify-center text-[#62223C] text-[20px] bg-white font-bold">
            SHIPFREE
          </div>
        </div>
      </div>
      <div id="product-demo-display" className="w-full ">
        <div className="w-full flex items-center justify-between">
          <div
            className={`w-[86px] h-[32px]  flex items-center justify-center  rounded-full font-medium ${
              activeTab === "foryou"
                ? "bg-[#62223C] text-white"
                : "bg-[#E9E9E9] text-black "
            }`}
            onClick={() => handleActiveTabChange("foryou")}
          >
            For You
          </div>
          <div
            className={`w-[168.27px] h-[32px] flex  items-center justify-center gap-x-2  rounded-full font-medium ${
              activeTab === "popular"
                ? "bg-[#62223C] text-white"
                : "bg-[#E9E9E9] text-black"
            }`}
            onClick={() => handleActiveTabChange("popular")}
          >
            <Sparkles
              className={
                activeTab === "popular" ? "stroke-white" : " stroke-[#62223C]"
              }
            />
            <p>Popular Today</p>
          </div>
          <Link
            to={"/viewall"}
            className="flex items-center justify-center text-[14px]"
          >
            <p className="select-none">View All</p>
            <ChevronsRight size={14} className="select-none" />
          </Link>
        </div>
        <div className="max-w-full flex items-center overflow-x-scroll scrollbar-hide mt-8 gap-x-4">
          {foryouItems.map((item, index) => (
            <div>
              <img
                id={index}
                src={item.img}
                className="min-w-[230px] aspect-square border rounded-xl"
              />
              <div className="flex items-center justify-between px-2 font-medium">
                <label htmlFor="product1">{limitTitleLength(item.title)}</label>
                <p>R {item.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
