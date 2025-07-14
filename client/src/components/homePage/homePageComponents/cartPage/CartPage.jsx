import React, { useState, useEffect, useRef } from 'react'
import { Navbar } from '../topSection/navBar/navbar'
import ImageSection from '../../../../globalComponents/ImageSection'
// image imports
import img01 from '../../../../assets/bookCoverPages/coverPage01.svg'
import img02 from '../../../../assets/bookCoverPages/coverPage02.svg'
import img03 from '../../../../assets/bookCoverPages/coverPage03.svg'
import img04 from '../../../../assets/bookCoverPages/coverPage04.svg'
import img05 from '../../../../assets/bookCoverPages/coverPage05.svg'
import img06 from '../../../../assets/bookCoverPages/coverPage06.svg'

const CartPage = () => {

    const [ couponCode, setCouponCode ] = useState('');

    const [ deliveryCharges, setDeliveryCharges ] = useState(30)

    const [ couponApplied, setCouponApplied ] = useState(false)

    const handleApplyCouponCode = () => {
        setCouponApplied(!couponApplied)
    } 

    const incQuantity = (id) => {
        setCartItems((prevItems) => 
        prevItems.map((item) => 
            item.id == id ? { ...item, quantity: item.quantity + 1} : item
        ))
    }

    const decQuantity = (id) => {
        setCartItems((prevItems) => 
        prevItems.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity - 1} : item )
        .filter((item) => item.quantity > 0)
    )
    }

    const [ cartItems, setCartItems] = useState([
        {id: 0, bookCoverPage: img01, bookTitle: 'Veronica Decides to Die', bookAuthor: 'Paulo Coelho', bookPrice: 99, discountedPrice: 80, tags: [{ language: 'English' }, { genre: 'Fiction' }, { type: 'Paperback' }], quantity: 1},
        {id: 1, bookCoverPage: img03, bookTitle: 'Brida', bookAuthor: 'Paulo Coelho', bookPrice: 149, discountedPrice: 80, tags: [{ language: 'Chinese' }, { genre: 'Fiction' }, { type: 'Paperback' }], quantity: 1},
        // {id: 2, bookCoverPage: img02, bookTitle: 'The Great Gatsby', bookAuthor: 'F. Scott FitzerALD', bookPrice: 199, discountedPrice: 80, tags: [{ language: 'Chinese' }, { genre: 'Fiction' }, { type: 'Paperback' }], quantity: 1},
        
    ])

    const totalItems = (cartItems.reduce((sum, item) => sum + item.quantity, 0));
    const totalPrice = (cartItems.reduce((sum, item) => sum + item.bookPrice * item.quantity, 0))
    const discountedPrice = (cartItems.reduce((sum, item) => sum + item.discountedPrice * item.quantity, 0))

    return (
        <div
        className='bg-[#EDEDED] h-[100vh]'>
            <Navbar active='Cart'/>

            <div
            className='w-full h-full flex justify-between pt-[140px] px-[80px]'>
                {/* cart items */}
                <div
                className='w-[50vw] h-[370px] bg-white rounded-3xl border-2 border-[#EDEDED] p-[32px] flex flex-col '>
                    <h1
                    className='text-[#000000] text-[20px] font-semibold'>
                        Cart Items
                    </h1>

                    {cartItems.map((book, index, arr) => (
                        <div
                        key={book.id}
                        className='w-[45vw] h-[100px] flex justify-between mt-[32px]'>
                            <div
                            className='h-full flex'>
                                <div className="w-[70px] sm:w-[70px] h-auto aspect-[3/4] mx-auto">
                                    <ImageSection bookCoverPage={book.bookCoverPage} />
                                </div>
                                <div
                                className='flex flex-col ml-[40px]'>
                                    <h1
                                    className='text-[#000000] text-[16px] font-semibold'>
                                        {book.bookTitle}
                                    </h1>
                                    <p
                                    className='text-[#7C7C7C] text-[14px] font-normal'>
                                        {book.bookAuthor}
                                    </p>
                                    <div
                                    className='flex mt-2'>
                                        <div className='flex gap-3 '>
                                            <div className='font-[Exo_2] h-[21px] w-fit py-2 px-3 bg-[#EFF6FF] border border-[#D9E3FC] text-[13px] text-[#1447E7] flex justify-center items-center rounded-2xl pb-2'>
                                            {cartItems[index].tags[0].language}
                                            </div>
                                            <div className='font-[Exo_2] h-[21px] w-fit py-2 px-3 bg-[#FAF5FF] border border-[#EEDCFB] text-[13px] text-[#8101DB] flex justify-center items-center rounded-2xl pb-2'>
                                            {cartItems[index].tags[1].genre}
                                            </div>
                                            <div className='font-[Exo_2] h-[21px] w-fit py-2 px-3 bg-[#FEFCE8] border border-[#F6E4BA] text-[13px] text-[#884B00] flex justify-center items-center rounded-2xl pb-2'>
                                            {cartItems[index].tags[2].type}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                
                            </div>
                            <div
                            className='w-[80px] h-[65px] mt-2 flex flex-col'>
                                <div
                                className='flex bg-[#EBF4FF] text-[#064FA4] text-[16px] rounded-[12px] font-normal w-[80px] h-[35px] justify-around'>
                                    <div
                                    onClick={() => decQuantity(book.id)}
                                    className='cursor-pointer mt-1'>
                                        -
                                    </div>
                                    <p
                                    className='mt-1'>
                                        {book.quantity}
                                    </p>
                                    <div
                                    onClick={() => incQuantity(book.id)}
                                    className='cursor-pointer mt-1'>
                                        +
                                    </div>
                                </div>
                                <div
                                className='w-[80px] h-[30px] flex justify-between text-[16px] mt-1'>
                                    <p
                                    className='text-[#000000] font-semibold '>
                                        ₹{book.discountedPrice * book.quantity} 
                                    </p>
                                    <p
                                    className='text-[#7C7C7C] font-semibold line-through'>
                                        ₹{book.bookPrice * book.quantity}
                                    </p>
                                </div>
                            </div>
                            

                        </div>
                    ))}
                </div>

                {/* billing details */}
                <div
                className='w-[410px] h-[470px] bg-white rounded-3xl border-2 flex flex-col border-[#EDEDED] p-[32px]'>
                    <h1
                    className='text-[20px] text-[#000000] font-semibold'>
                        Billing Details
                    </h1>

                    {/* coupon code section */}
                    <div
                    className='w-full flex h-[45px] mt-6'>
                        <input
                        onChange={(e) => setCouponCode(e.target.value)}
                        className='h-full w-[57%] text-[#BEBEBE] focus:text-[#000000] border-[1px] border-[#BEBEBE] bg-[#F9F9F9] focus:border-[#BEBEBE] rounded-[8px] text-[14px] font-normal px-3' 
                        type="text"
                        placeholder='Enter coupon code'
                        value={couponCode} />

                        <div
                        onClick={handleApplyCouponCode}
                        className='w-[120px] h-full border-[1px] border-[#064FA4] text-[#064FA4] text-[14px] font-medium mx-auto flex justify-center items-center rounded-[8px] cursor-pointer'>
                           <p
                           className='text-center'>
                                Apply Now
                           </p>
                        </div>
                    </div>

                    <div className='border-t-[1px] w-full border-dashed bg-[#D1D1D1] mt-6'/>

                    <div
                    className='flex flex-col w-full h-auto text-[16px] font-medium mt-6'>
                        <div
                        className='flex justify-between'>
                            <h1
                            className='text-[#7C7C7C]'>
                                Item Total ({totalItems})
                            </h1>

                            <p>
                                ₹{totalPrice}
                            </p>
                        </div>

                        <div
                        className='flex justify-between mt-6'>
                            <h1
                            className='text-[#7C7C7C]'>
                                Discount
                            </h1>

                            <p
                            className='text-[#009011]'>
                               - ₹{totalPrice - discountedPrice}
                            </p>
                        </div>

                        <div
                        className='flex justify-between mt-6'>
                            <h1
                            className='text-[#7C7C7C]'>
                                Delivery Charges
                            </h1>

                            <p>
                                ₹{deliveryCharges}
                            </p>
                        </div>

                        <div className='border-t-[1px] w-full border-dashed bg-[#D1D1D1] mt-6'/>

                        <div
                        className='flex justify-between mt-6'>
                            <h1
                            className='text-[#7C7C7C]'>
                                Amount to Pay
                            </h1>

                            <p
                            className='text-[18px] font-semibold'>
                                ₹{discountedPrice + deliveryCharges}
                            </p>
                        </div>

                        <div
                        className='w-full h-[45px] bg-[#064FA4] text-white rounded-[12px] flex justify-center items-center mt-6'>
                            <p
                            className=''>
                                Buy now
                            </p>
                        </div>
                    </div>
                </div>

            </div>
        
        </div>
    )
}

export default CartPage
