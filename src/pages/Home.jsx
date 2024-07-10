import { Bell, Search } from "lucide-react";
import React from "react";
import "../pages/home.css";

const Home = () => {
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

  return (
    <div className="w-full h-screen">
      <div
        id="mobile-user-details"
        className="w-full mt-12 mb-8 flex items-center justify-between px-5"
      >
        <div className="flex items-center">
          <img src="/location.svg" alt="location icon" />
          <div className="flex flex-col leading-tight">
            {/* Account Type */}
            <p className="text-[14px] text-[#646464]">Free Account</p>
            <p className="text-[12px] font-medium">Merriman Avenue, 28</p>
          </div>
        </div>
        <Bell className="w-[29px] aspect-square" />
      </div>
      <div id="mobile-search" className="w-full px-5 mb-8">
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
        className="w-full px-5 flex gap-x-4 overflow-x-scroll scrollbar-hide"
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
    </div>
  );
};

export default Home;
