import React, { useState } from 'react'
import homeIcon from '../../../../../assets/pageIcons/homeIcon.svg'
import categoryIcon from '../../../../../assets/pageIcons/categoryIcon.svg'
import cartIcon from '../../../../../assets/pageIcons/cartIcon.svg'
import { CircleUserRound } from 'lucide-react'
import { UserProfile } from "../../../../../globalComponents/userProfile/UserProfile"

const PhoneNavBar = () => {
  const [isProfileOpen, setIsProfileOpen] = useState(false)

  const navList = [
    { id: 'Home', link: '/', icon: homeIcon, title: 'Home', type: 'link' },
    { id: 'Categories', link: '/categories', icon: categoryIcon, title: 'Categories', type: 'link' },
    { id: 'Cart', link: '/cart', icon: cartIcon, title: 'Cart', type: 'link' },
    { id: 'Profile', icon: CircleUserRound, title: 'Profile', type: 'profile' }, // using component
  ]

  return (
    <>
      <div className="w-full h-[85px] bg-white flex justify-between font-[Poppins] items-center fixed bottom-0 md:hidden z-50">
        {navList.map((page) => (
          <div key={page.id} className="w-full h-[50px] flex flex-col">
            {page.type === 'link' ? (
              <a
                className="w-full h-full flex flex-col justify-between"
                href={page.link}
              >
                <img
                  className="w-[24px] h-[24px] mx-auto"
                  src={page.icon}
                  alt={page.title}
                />
                <p className="text-[#8C8C8C] text-[14px] font-medium text-center">
                  {page.title}
                </p>
              </a>
            ) : (
              <button
                className="w-full h-full flex flex-col justify-between"
                onClick={() => setIsProfileOpen(true)}
              >
                <div className="w-[24px] h-[24px] mx-auto flex items-center justify-center">
                  <page.icon className="w-[24px] h-[24px] text-blue-400" />
                </div>
                <p className="text-[#8C8C8C] text-[14px] font-medium text-center">
                  {page.title}
                </p>
              </button>
            )}
          </div>
        ))}
      </div>

      {/* User Profile Drawer */}
      <UserProfile
        isOpen={isProfileOpen}
        onClose={() => setIsProfileOpen(false)}
        bookmarks={[]} // pass real bookmarks later
        onRemoveBookmark={() => {}} // pass handler later
      />
    </>
  )
}

export default PhoneNavBar
