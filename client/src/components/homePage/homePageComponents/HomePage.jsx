import React, { useState, useRef } from 'react'
import { TopSection } from './topSection/topSection'
import { MidSection } from './midSection/midSection'
import { BiChevronLeftCircle } from "react-icons/bi";
import { BiChevronRightCircle } from "react-icons/bi";

const HomePage = () => {

  const [ bar, setBar ] = useState(false);

  const handleBar = () => {
    setBar(!bar)
  }

  const [activePage, setActivePage] = useState('Home')

  const navItems = [
    { name: 'Home', icon: 'homeIcon', selectedIcon: 'selectedHomeIcon', link: ` http://192.168.29.11:5174//home`},
    { name: 'Categories', icon: 'categoryIcon', selectedIcon: 'selectedCategoryIcon', link: ` http://192.168.29.11:5174/category`},
    { name: 'Product', icon: 'categoryIcon', selectedIcon: 'selectedCategoryIcon', link: ` http://192.168.29.11:5174/product`},
    { name: 'Liked', icon: 'favouriteIcon', selectedIcon: 'selectedFavouriteIcon', link: ` http://192.168.29.11:5174/liked`},
    { name: 'Profile', icon: 'userProfileIcon', selectedIcon: 'selectedUserProfileIcon', link: ` http://192.168.29.11:5174/profile`},
  ]

  return (
    <div className='mx-[80px]'>
        <TopSection />
        <MidSection />


        
    </div>
  )
}

export default HomePage
