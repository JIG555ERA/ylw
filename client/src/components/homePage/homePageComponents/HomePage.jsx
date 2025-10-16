import React, { useState, useRef } from 'react'
import { TopSection } from './topSection/topSection'
import { MidSection } from './midSection/midSection'
import { BiChevronLeftCircle } from "react-icons/bi";
import { BiChevronRightCircle } from "react-icons/bi";
import PhoneNavBar from './topSection/navBar/PhoneNavBar';
import Advertisements from '../../../globalComponents/advertisements/Advertisements';
import BooksByPublications from './midSection/booksByPublications/BooksByPublications';

const HomePage = () => {

  const [ bar, setBar ] = useState(false);

  const handleBar = () => {
    setBar(!bar)
  }

  const [activePage, setActivePage] = useState('Home')

  const navItems = [
    { name: 'Home', icon: 'homeIcon', selectedIcon: 'selectedHomeIcon', link: `/home`},
    { name: 'Categories', icon: 'categoryIcon', selectedIcon: 'selectedCategoryIcon', link: `/category`},
    { name: 'Product', icon: 'categoryIcon', selectedIcon: 'selectedCategoryIcon', link: `/product`},
    { name: 'Liked', icon: 'favouriteIcon', selectedIcon: 'selectedFavouriteIcon', link: `/liked`},
    { name: 'Profile', icon: 'userProfileIcon', selectedIcon: 'selectedUserProfileIcon', link: `/profile`},
  ]

  return (
    <div className=''>
        <TopSection />
        <MidSection />
        {/* <Advertisements /> */}
        <PhoneNavBar />
    </div>
  )
}

export default HomePage
