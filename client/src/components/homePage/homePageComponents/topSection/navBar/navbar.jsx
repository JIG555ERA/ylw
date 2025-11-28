import React, { useState } from "react";
import homeIcon from "../../../../../assets/pageIcons/homeIcon.svg";
import categoryIcon from "../../../../../assets/pageIcons/categoryIcon.svg";
import heartIcon from "../../../../../assets/pageIcons/heartIcon.svg";
import cartIcon from "../../../../../assets/pageIcons/cartIcon.svg";
import bookStoreLogo from "../../../../../assets/logos/bookStoreLogo.svg";
import { CircleUserRound } from 'lucide-react';

import { UserProfile } from "../../../../../globalComponents/userProfile/UserProfile"
import { sampleBook } from "../../../../../globalComponents/userProfile/Book.js";
import { useCart } from "../../../../../globalComponents/CartContext";
import home_icon_01 from '../../../../../assets/icons/home_icon_01.svg';
import home_icon_02 from '../../../../../assets/icons/home_icon_02.svg';
import categories_icon_01 from '../../../../../assets/icons/categories_icon_01.svg';
import categories_icon_02 from '../../../../../assets/icons/categories_icon_02.svg';
import liked_icon_01 from '../../../../../assets/icons/liked_icon_01.svg';
import liked_icon_02 from '../../../../../assets/icons/liked_icon_02.svg';
import cart_icon_01 from '../../../../../assets/icons/cart_icon_01.png';
import cart_icon_02 from '../../../../../assets/icons/cart_icon_02.svg';

export default function Navbar({ active = "", onCartClick }) {
  const [activePage, setActivePage] = useState(active);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const { cartItems } = useCart();

  const navItems = [
    { name: "Home", icon1: home_icon_01, icon2: home_icon_02, link: `/` },
    { name: "Categories", icon1: categories_icon_01, icon2: categories_icon_02, link: `/categories` },
    { name: "Liked", icon1: liked_icon_01, icon2: liked_icon_02, link: `/liked` },
    { name: "Cart", icon1: cart_icon_01, icon2: cart_icon_02, link: `/cart` }, // 🚨 removed link here
  ];

  return (
    <>
      <div className="w-full h-[85px] md:flex flex-col items-center justify-center bg-white shadow-xl fixed top-0 right-0 left-0 z-50 hidden">
        <ul className="xl:w-[1440px] md:w-[100vw] lg:px-[120px] px-[60px] flex justify-between items-center max-[450px]:hidden">
          {/* Logo
          <a href="/">
            <div className="flex justify-evenly items-center xl:mx-12 md:mx-6">
              <img src={bookStoreLogo} alt="Book Store Logo" />
            </div>
          </a> */}
          {/* Left nav items (with href) */}
          {navItems.slice(0, 1).map((item) => (
            <a key={item.name} href={item.link}>
              <li
                className={`flex items-center cursor-pointer transition-all duration-300 ease-in-out translate-x-[186px] ${
                  activePage === item.name
                    ? "text-blue-400 font-semibold px-4 py-2 bg-blue-100 text-[16px] rounded-2xl border border-blue-400 transition-all ease-in-out"
                    : "text-[#8C8C8C] text-[14px]"
                }`}
                onClick={() => setActivePage(item.name)}
              >
                {/* 🔥 Switch between icon1 and icon2 here */}
                <img
                  className={`mr-2 ${item.name === "Home" ? "h-[20px] w-[20px]" : "h-[16px] w-[16px]"}`}
                  src={activePage === item.name ? item.icon2 : item.icon1}
                  alt={item.name}
                />
                <p>{item.name}</p>
              </li>
            </a>
          ))}
          {navItems.slice(1, 2).map((item) => (
            <a key={item.name} href={item.link}>
              <li
                className={`flex items-center cursor-pointer transition-all duration-300 ease-in-out translate-x-[86px] ${
                  activePage === item.name
                    ? "text-blue-400 font-semibold px-4 py-2 bg-blue-100 text-[16px] rounded-2xl border border-blue-400 transition-all ease-in-out"
                    : "text-[#8C8C8C] text-[14px]"
                }`}
                onClick={() => setActivePage(item.name)}
              >
                {/* 🔥 Switch between icon1 and icon2 here */}
                <img
                  className={`mr-2 ${item.name === "Categories" ? "h-[18px] w-[18px]" : "h-[16px] w-[16px]"}`}
                  src={activePage === item.name ? item.icon2 : item.icon1}
                  alt={item.name}
                />
                <p>{item.name}</p>
              </li>
            </a>
          ))}

          {/* Logo */}
          <a href="/">
            <div className="flex justify-evenly items-center translate-x-[36px] w-[70px]">
              <img src={bookStoreLogo} alt="Book Store Logo" className="w-full h-full" />
            </div>
          </a>
          {navItems.slice(2, 3).map((item) => (
            <a key={item.name} href={item.link}>
              <li
                className={`flex items-center cursor-pointer transition-all duration-300 ease-in-out translate-x-[-6px] ${
                  activePage === item.name
                    ? "text-blue-400 font-semibold px-4 py-2 bg-blue-100 text-[16px] rounded-2xl border border-blue-400 transition-all ease-in-out"
                    : "text-[#8C8C8C] text-[14px]"
                }`}
                onClick={() => setActivePage(item.name)}
              >
                {/* 🔥 Switch between icon1 and icon2 here */}
                <img
                  className={`mr-2 ${item.name === "Liked" ? "h-[18px] w-[18px]" : "h-[16px] w-[16px]"}`}
                  src={activePage === item.name ? item.icon2 : item.icon1}
                  alt={item.name}
                />
                <p>{item.name}</p>
              </li>
            </a>
          ))}
          {/* Right nav items (Cart opens drawer) */}
          <li
            className={`relative flex items-center cursor-pointer transition-all duration-300 translate-x-[-66px] ${
              activePage === "Cart" ? "text-[#121212] font-semibold" : "text-[#8C8C8C]"
            }`}
            onClick={onCartClick} // ✅ opens drawer
          >
            <img className="mr-2 h-[20px] w-[20px]" src={cart_icon_02} alt="Cart" />
            <p>Cart</p>
            {cartItems.length > 0 && (
              <span className="absolute -top-2 -right-2 bg-blue-500 text-white text-xs font-semibold rounded-full px-1.5 py-0.5">
                {cartItems.length}
              </span>
            )}
          </li>

          {/* Profile */}
          <li
            onClick={() => setIsProfileOpen(true)}
            className="flex items-center cursor-pointer text-white hover:scale-105 fony-semibold px-4 py-2.5 bg-gradient-to-br from-blue-300 via-blue-500 to-purple-300 rounded-2xl"
          >
            {/* <CircleUserRound className="h-6 w-6 text-blue-400" /> */}
            <p className="ml-1.5">Login</p>
          </li>
        </ul>
      </div>

      {/* User Profile Drawer */}
      <UserProfile
        isOpen={isProfileOpen}
        onClose={() => setIsProfileOpen(false)}
        bookmarks={[sampleBook]}
        onRemoveBookmark={() => {}}
      />
    </>
  );
};
