import React, { useState } from 'react'

export const Navbar = () => {
  const [activePage, setActivePage] = useState('Home')

  const navItems = [
    { name: 'Home', icon: 'homeIcon', selectedIcon: 'selectedHomeIcon', link: `/`},
    { name: 'Categories', icon: 'categoryIcon', selectedIcon: 'selectedCategoryIcon', link: `/category`},
    { name: 'Product', icon: 'categoryIcon', selectedIcon: 'selectedCategoryIcon', link: `/product`},
    { name: 'Liked', icon: 'favouriteIcon', selectedIcon: 'selectedFavouriteIcon', link: `/liked`},
    { name: 'Profile', icon: 'userProfileIcon', selectedIcon: 'selectedUserProfileIcon', link: `/profile`},
  ]

  return (
    <div className="w-full flex flex-col items-center justify-evenly mt-4">
      {/* Logo Section */}
      <div className="flex justify-center items-center mb-[30px]">
        <img
          className="h-auto w-auto"
          src="../src/assets/logos/yourLiteraryWorldIcon.svg"
          alt="Your Literary World Logo"
        />
      </div>

      {/* Navigation Items */}
      <ul className="w-full flex justify-between  items-center mb-5 pt-0 mt-0 box-border max-[450px]:hidden">
        {navItems.map((item) => (
          <a 
          key={item.name}
          href={item.link}>
          <li
            key={item.name}
            className={`
              flex items-center justify-between px-5 cursor-pointer transition-all duration-300 ease-in-out
              ${activePage === item.name
                ? 'bg-[#064FA4] text-[#f0f0f0] font-normal text-base rounded-md animate-slide-in py-2.5'
                : 'text-[#8C8C8C] py-2.5'}
            `}
            onClick={() => setActivePage(item.name)}
          >
            <img
              className="mr-2"
              src={`../src/assets/icons/${
                activePage === item.name ? item.selectedIcon : item.icon
              }.svg`}
              alt={`${item.name} Icon`}
            />
            <p>{item.name}</p>
          </li>
          </a>
        ))}
      </ul>

      {/* Header Text
      <div className="flex justify-center">
        <h1 className="text-[54px] text-[#064FA4] font-medium font-['Exo_2']">
          Your Literary World
        </h1>
      </div> */}
    </div>
  )
}
