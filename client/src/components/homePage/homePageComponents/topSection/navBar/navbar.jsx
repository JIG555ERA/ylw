import React, { useState } from 'react'
import homeIcon from '../../../../../assets/pageIcons/homeIcon.svg'
import categoryIcon from '../../../../../assets/pageIcons/categoryIcon.svg'
import heartIcon from '../../../../../assets/pageIcons/heartIcon.svg'
import cartIcon from '../../../../../assets/pageIcons/cartIcon.svg'
import bookStoreLogo from '../../../../../assets/logos/bookStoreLogo.svg'

export const Navbar = () => {
  const [activePage, setActivePage] = useState('Home')

  const navItems = [
    { name: 'Home', icon: homeIcon, selectedIcon: 'selectedHomeIcon', link: `/`},
    { name: 'Categories', icon: categoryIcon, selectedIcon: 'selectedCategoryIcon', link: `/category`},
    { name: 'Liked', icon: heartIcon, selectedIcon: 'selectedFavouriteIcon', link: `/liked`},
    { name: 'Cart', icon: cartIcon, selectedIcon: 'selectedUserProfileIcon', link: `/cart`},
  ]

  return (
    <div className="w-full h-[85px] flex flex-col items-center justify-evenly  bg-white shadow-xl fixed z-50 ">
      {/* Navigation Items */}
      <ul className="w-[1440px] px-[80px] flex justify-between  items-center max-[450px]:hidden">
        {navItems.slice(0,2).map((item, index, array) => (
          <a 
          key={item.name}
          href={item.link}>
          <li
            key={item.name}
            className={`
              flex items-center justify-between cursor-pointer transition-all duration-300 ease-in-out
              ${activePage === item.name
                ? 'text-[#8C8C8C] font-normal text-base rounded-md animate-slide-in py-2.5'
                : 'text-[#8C8C8C] py-2.5'}
            `}
            onClick={() => setActivePage(item.name)}
          >
            <img
              className="mr-2"
              // src={`../src/assets/icons/${
              //   activePage === item.name ? item.selectedIcon : item.icon
              // }.svg`}
              src={item.icon}
              alt={`${item.name} Icon`}
            />
            <p>{item.name}</p>
          </li>
          </a>
        ))}
          
        {/* Logo Section */}
        <a href="/">
          <div className="flex justify-center items-center mx-12">
            <img
              className="h-auto w-auto"
              src={bookStoreLogo}
              alt="Book Store Logo"
            />
          </div>
        </a>

        {navItems.slice(2).map((item, index, array) => (
          <a 
          key={item.name}
          href={item.link}>
          <li
            key={item.name}
            className={`
              flex items-center justify-between cursor-pointer transition-all duration-300 ease-in-out
              ${activePage === item.name
                ? 'text-[#8C8C8C] font-normal text-base rounded-md animate-slide-in py-2.5'
                : 'text-[#8C8C8C] py-2.5'}
            `}
            onClick={() => setActivePage(item.name)}
          >
            <img
              className="mr-2 h-[24px] w-[24px]"
              // src={`../src/assets/icons/${
              //   activePage === item.name ? item.selectedIcon : item.icon
              // }.svg`}
              src={item.icon}
              alt={`${item.name} Icon`}
            />
            <p>{item.name}</p>
          </li>
          </a>
        ))}
      </ul>

    </div>
  )
}
