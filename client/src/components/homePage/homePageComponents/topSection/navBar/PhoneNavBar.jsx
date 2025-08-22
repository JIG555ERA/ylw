import React, { useState, useEffect } from 'react'
import homeIcon from '../../../../../assets/pageIcons/homeIcon.svg'
import categoryIcon from '../../../../../assets/pageIcons/categoryIcon.svg'
import heartIcon from '../../../../../assets/pageIcons/heartIcon.svg'
import cartIcon from '../../../../../assets/pageIcons/cartIcon.svg'

const PhoneNavBar = () => {

    const navList = [
        {id:'Home', link: '/', icon: homeIcon, title: 'Home'},
        {id:'Categories', link: '/categories', icon: categoryIcon, title: 'Categories'},
        {id:'Cart', link: '/cart', icon: cartIcon, title: 'Cart'},
        {id:'Liked', link: '/liked', icon: heartIcon, title: 'Liked'},
    ]

    return (
        <div
        className='w-full h-[85px] bg-white flex justify-between font-[Poppins] items-center fixed bottom-0 md:hidden z-50'>
            {navList.map((page, index, array) => (
                <div
                key={page.id}
                className='w-full h-[50px] flex flex-col'>
                    <a 
                    className='w-full h-full flex flex-col justify-between'
                    href={page.link}>
                        <img 
                        className='w-[24px] h-[24px] mx-auto'
                        src={page.icon} alt="" />
                        <p
                        className='text-[#8C8C8C] text-[14px] font-medium text-center'>
                            {page.title}
                        </p>
                    </a>
                </div>
            ))}
        </div>
    )
}

export default PhoneNavBar
