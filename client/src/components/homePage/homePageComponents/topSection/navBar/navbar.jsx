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

export const Navbar = ({ active = "" }) => {
  const [activePage, setActivePage] = useState(active);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const { cartItems } = useCart();

  const navItems = [
    { name: "Home", icon: homeIcon, selectedIcon: "selectedHomeIcon", link: `/` },
    { name: "Categories", icon: categoryIcon, selectedIcon: "selectedCategoryIcon", link: `/categories` },
    // { name: "Liked", icon: heartIcon, selectedIcon: "selectedFavouriteIcon", link: `/liked` },
    { name: "Cart", icon: cartIcon, selectedIcon: "selectedUserProfileIcon", link: `/cart` },
  ];

  return (
    <>
      <div className="w-full h-[85px] md:flex flex-col items-center justify-center bg-white shadow-xl fixed top-0 right-0 left-0 z-50 hidden">
        {/* Navigation Items */}
        <ul className="xl:w-[1440px] md:w-[100vw] lg:px-[80px] px-[60px] flex justify-between items-center max-[450px]:hidden">
          {/* Left nav items */}
          {navItems.slice(0, 2).map((item) => (
            <a key={item.name} href={item.link}>
              <li
                className={`flex items-center justify-between cursor-pointer transition-all duration-300 ease-in-out ${
                  activePage === item.name
                    ? "text-[#121212] font-semibold text-base rounded-md animate-slide-in py-2.5"
                    : "text-[#8C8C8C] py-2.5 font-normal"
                }`}
                onClick={() => setActivePage(item.name)}
              >
                <img
                  className="mr-2"
                  src={item.icon}
                  alt={`${item.name} Icon`}
                />
                <p>{item.name}</p>
              </li>
            </a>
          ))}

          {/* Logo Section */}
          <a href="/">
            <div className="flex justify-center items-center xl:mx-12 md:mx-6">
              <img
                className="h-auto w-auto"
                src={bookStoreLogo}
                alt="Book Store Logo"
              />
            </div>
          </a>

          {/* Right nav items */}
        {navItems.slice(2).map((item) => (
          <a key={item.name} href={item.link} className="relative">
            <li
              className={`flex items-center cursor-pointer transition-all duration-300 ${
                activePage === item.name ? "text-[#121212] font-semibold" : "text-[#8C8C8C]"
              }`}
              onClick={() => setActivePage(item.name)}
            >
              <img className="mr-2 h-[24px] w-[24px]" src={item.icon} alt={item.name} />
              <p>{item.name}</p>
            </li>

            {/* ✅ Cart Count Badge */}
            {item.name === "Cart" && cartItems.length > 0 && (
              <span className="absolute -top-2 -right-2 bg-blue-500 text-white text-xs font-semibold rounded-full px-1.5 py-0.5">
                {cartItems.length}
              </span>
            )}
          </a>
        ))}

          {/* Profile Icon (Triggers L2 Drawer) */}
          <li
            onClick={() => setIsProfileOpen(true)}
            className="flex  items-center cursor-pointer transition-all duration-300 ease-in-out text-[#8C8C8C] py-2.5 font-normal hover:text-[#121212]"
          >
            <CircleUserRound className="h-6 w-6 text-blue-400"/>
            <p className="ml-1.5">Profile</p>
          </li>
        </ul>
      </div>

      {/* User Profile Drawer */}
      <UserProfile
        isOpen={isProfileOpen}
        onClose={() => setIsProfileOpen(false)}
        bookmarks={[sampleBook]} // replace with real bookmarks
        onRemoveBookmark={() => {}} // implement real remove later
      />
    </>
  );
};
