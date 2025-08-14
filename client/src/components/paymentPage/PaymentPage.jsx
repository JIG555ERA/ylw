import React, { useState, useRef} from 'react'
import { Navbar } from '../homePage/homePageComponents/topSection/navBar/navbar'
import img01 from '../../assets/bookCoverPages/coverPage01.svg'
import img03 from '../../assets/bookCoverPages/coverPage03.svg'
import img02 from '../../assets/bookCoverPages/coverPage02.svg'
import ImageSection from '../../globalComponents/ImageSection'
import './paymentPage.css'
import upiImg from '../../assets/paymentLogos/upiImg.svg'

const PaymentPage = () => {

    const [ cartItems, setCartItems] = useState([
        {id: 0, bookCoverPage: img01, bookTitle: 'Veronica Decides to Die', bookAuthor: 'Paulo Coelho', bookPrice: 99, discountedPrice: 80, tags: [{ language: 'English' }, { genre: 'Fiction' }, { type: 'Paperback' }], quantity: 3},
        {id: 1, bookCoverPage: img03, bookTitle: 'Brida', bookAuthor: 'Paulo Coelho', bookPrice: 149, discountedPrice: 80, tags: [{ language: 'Chinese' }, { genre: 'Fiction' }, { type: 'Paperback' }], quantity: 2},
        {id: 2, bookCoverPage: img02, bookTitle: 'The Great Gatsby', bookAuthor: 'F. Scott FitzerALD', bookPrice: 199, discountedPrice: 80, tags: [{ language: 'Chinese' }, { genre: 'Fiction' }, { type: 'Paperback' }], quantity: 1},
        
    ])

    const [ paymentMethod, setPaymentMethod ] = useState([
        {id: 0, method: 'UPI', img: upiImg},
        {id: 1, method: 'Credit Card'},
        {id: 2, method: 'Debit Card'},
        {id: 3, method: 'Net Banking'},
    ])

    const [ upiID, setUpiID ] = useState('');
    const [ creditCardNumber, setCreditCardNumber ] = useState('');
    const [ month, setMonth ] = useState();
    const [ year, setYear ] = useState();
    const [ nameOnCard, setNameOnCard ] = useState('');
    const [ cardSecurityCode, setCardSecurityCode ] = useState('');
    const [ cvv, setCvv ] = useState('');

    const [ selected, setSelected ] = useState(0)

    const [ deliveryCharges, setDeliveryCharges ] = useState(30)
    const totalItems = (cartItems.reduce((sum, item) => sum + item.quantity, 0));
    const totalPrice = (cartItems.reduce((sum, item) => sum + item.bookPrice * item.quantity, 0))
    const discountedPrice = (cartItems.reduce((sum, item) => sum + item.discountedPrice * item.quantity, 0))
    
    return (
        <div
        className='w-full h-screen bg-[#fafafa] font-[Poppins]'>
            <Navbar />
            <div
            className='w-full h-full flex justify-between'>
                <div
                className='lg:w-[68vw] lg:h-full flex justify-center items-start overflow-y-scroll [&::-webkit-scrollbar]:hidden scrollbar-hide'>
                    <div
                    className='lg:w-[660px] lg:h-auto flex flex-col pt-[100px]'>
                        <h1
                        className='text-[#111729] text-[24px] font-semibold mt-[24px]'>
                            Payment Details
                        </h1>
                        <div
                        className='w-full h-auto bg-white rounded-3xl p-[24px] mt-[24px] flex flex-col'>
                            <h1
                            className='text-[#111729] text-[18px] font-semibold'>
                                Payment Method
                            </h1>
                            <div
                            className='w-full h-[50px] flex mt-[24px] gap-4'>
                                {paymentMethod.map((method) => (
                                    <div
                                    key={method.id}
                                    onClick={() => setSelected(method.id)}
                                    className={`w-auto flex justify-between px-[12px] items-center border-2 rounded-2xl cursor-pointer 
                                    ${method.id == selected 
                                    ? `border-[#4B7DF3]` 
                                    : `border-[#E3E8EF]`}`}>
                                        <div
                                        className={`w-[18px] h-[18px] flex justify-center items-center rounded-full
                                        ${method.id == selected
                                            ? `bg-[#4B7DF3]`
                                            : `bg-[#E3E8EF]`
                                        }`}>
                                            <div
                                            className={` rounded-full 
                                            ${method.id == selected
                                                ? `bg-white w-[8px] h-[8px]`
                                                : `bg-white w-[14px] h-[14px]`
                                            }`}>
                                                
                                            </div>
                                        </div>
                                        <div
                                        className='ml-2'>
                                            {method.id == 0 && (
                                                <img src={upiImg} alt={upiImg} className=''/>
                                            )}
                                            {method.id != 0 && (
                                                <p
                                                className='text-[14px] font-medium text-[#111729]'>
                                                    {method.method}
                                                </p>
                                            )}
                                            
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <div>
                                {/* upi payment */}
                                {selected == 0 && (
                                    <div
                                    className='w-full flex flex-col mt-[24px]'>
                                        <p className='text-[#666666] text-[12px] font-normal'>Enter UPI ID</p>
                                        <input 
                                        onChange={(e) => setUpiID(e.target.value)}
                                        className='w-full h-[50px] px-[8px] flex justify-center items-center text-[14px] text-[#111729] rounded-2xl border-1 border-[#666666] mt-2'
                                        type="text" 
                                        name=""
                                        value={upiID}
                                        id="" />
                                    </div>
                                )}
                                {/* credit card */}
                                {(selected === 1 || selected === 2) && (
                                    <div
                                    className='w-full flex flex-col mt-[24px]'>
                                        <p className='text-[#666666] text-[12px] font-normal'>Enter Card Number</p>
                                        <input 
                                        onChange={(e) => setCreditCardNumber(e.target.value)}
                                        className='w-full h-[50px] px-[8px] flex justify-center items-center text-[14px] text-[#111729] rounded-2xl border-1 border-[#666666] mt-2'
                                        type="text" 
                                        name=""
                                        value={creditCardNumber}
                                        id="" />
                                        <div
                                        className='w-full flex mt-[24px] text-[#666666] flex-col'>
                                            <p className='text-[14px] font-medium'>Expiry Date</p>
                                            <div
                                            className='flex '>
                                                <div
                                                className='flex flex-col'>
                                                    <p className='text-[14px] '>Month</p>
                                                    <input 
                                                    onChange={(e) => setMonth(e.target.value)}
                                                    className='w-9 h-[50px] px-[8px] flex justify-center items-center text-[14px] text-[#111729] rounded-xl border-1 border-[#666666] mt-2'
                                                    value={month}
                                                    type="text" />
                                                </div>
                                                <div
                                                className='text-[16px] mt-10 mr-2 text-[#666666]'>
                                                    /
                                                </div>
                                                <div
                                                className='flex flex-col'>
                                                    <p className='text-[14px] '>Year</p>
                                                    <input 
                                                    onChange={(e) => setYear(e.target.value)}
                                                    className='w-9 h-[50px] px-[8px] flex justify-center items-center text-[14px] text-[#111729] rounded-xl border-1 border-[#666666] mt-2'
                                                    value={year}
                                                    type="text" />
                                                </div>
                                                <div
                                                className='ml-8'>
                                                    <div
                                                    className='flex flex-col'>
                                                        <p className='text-[14px] '>CVV</p>
                                                        <input 
                                                        onChange={(e) => setMonth(e.target.value)}
                                                        className='w-full h-[50px] px-[8px] flex justify-center items-center text-[14px] text-[#111729] rounded-xl border-1 border-[#666666] mt-2'
                                                        value={month}
                                                        type="text" />
                                                    </div>
                                                </div>
                                            </div>
                                            
                                        </div>
                                        <div
                                        className='flex flex-col text-[#666666] mt-[24px]'>
                                            <p className='text-[14px] '>Name on card</p>
                                            <input 
                                            onChange={(e) => setNameOnCard(e.target.value)}
                                            className='w-full h-[50px] px-[8px] flex justify-center items-center text-[14px] text-[#111729] rounded-2xl border-1 border-[#666666] mt-2'
                                            value={nameOnCard}
                                            type="text" />
                                        </div>
                                        <div
                                        className='flex flex-col text-[#666666] mt-[24px]'>
                                            <p className='text-[14px] '>Card Security Code</p>
                                            <input 
                                            onChange={(e) => setCvv(e.target.value)}
                                            className='w-1/2 h-[50px] px-[8px] flex justify-center items-center text-[14px] text-[#111729] rounded-2xl border-1 border-[#666666] mt-2'
                                            value={cvv}
                                            type="text" />
                                        </div>
                                    </div>
                                )}
                            </div>
                            
                        </div>
                        <a href="/order">
                            <div
                            className='w-full h-[50px] rounded-2xl bg-[#4B7DF3] text-[16px] mt-[24px] text-white font-semibold flex justify-center items-center mb-[100px]'>
                                <p>
                                    Pay <span className='font-[Roboto]'>₹</span>{discountedPrice + deliveryCharges}
                                </p>
                            </div>
                        </a>
                    </div>
                </div>
                {/* cart items */}
                <div
                className='lg:w-[30vw] lg:h-full bg-white p-[24px] flex flex-col'>
                    <h1
                    className='text-[#000000] text-[20px] font-semibold pt-[100px]'>
                        Your Orders
                    </h1>

                    <div
                    className='w-full h-[320px] overflow-y-scroll scrollbar-2px overflow-x-hidden'>
                        {cartItems.map((book, index, arr) => (
                        <div
                        key={book.id}
                        className='w-[25vw] h-[130px] flex justify-between mt-[24px]'>
                            <div
                            className='h-full flex'>
                                <div className="w-[80px] sm:w-[100px] h-auto aspect-[3/4] mx-auto ">
                                    <ImageSection bookCoverPage={book.bookCoverPage} />
                                </div>
                                <div
                                className='flex flex-col ml-[20px]'>
                                    <h1
                                    className='text-[#000000] text-[16px] font-semibold mt-1'>
                                        {book.bookTitle}
                                    </h1>
                                    <p
                                    className='text-[#7C7C7C] text-[14px] font-normal'>
                                        {book.bookAuthor}
                                    </p>
                                    <div>
                                        <div
                                        className='flex text-[#064FA4] text-[14px] rounded-[12px] font-medium w-full h-[35px]'>
                                            <div
                                            className='mt-1.5 flex'>
                                                <p
                                                className='text-[#000000] flex'>
                                                    <span className='text-[#7C7C7C] mr-1'>Qty: </span> {book.quantity} 
                                                </p>
                                                <span className='w-2'/>
                                                <p
                                                className='text-[#000000]'>
                                                    <span className='text-[#7C7C7C]'>Price: </span> <span className='font-[Roboto]'>₹</span>{book.discountedPrice * book.quantity} 
                                                </p>
                                                <span className='w-2'/>
                                                <p
                                                className='text-[#7C7C7C] text-[12px] mt-0.5 line-through'>
                                                    <span className='font-[Roboto]'>₹</span>{book.bookPrice * book.quantity}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div
                                    className='flex mt-1.5'>
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
                            {/* <div
                            className='w-[80px] h-[65px] mt-2 flex flex-col ml-4'>
                                <div
                                className='flex bg-[#EBF4FF] text-[#064FA4] text-[16px] rounded-[12px] font-normal w-[80px] h-[35px] justify-around'>
                                    <div
                                    onClick={() => decQuantity(book.id)}
                                    className='cursor-pointer mt-1'>
                                        -
                                    </div>
                                    <p
                                    className='mt-1'>
                                        {book.quantity} Qty
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
                            </div> */}
                            

                        </div>
                    ))}
                    </div>
                    <div
                    className='mt-2'>
                        {/* <div className='border-t-[1px] w-full border-dashed bg-[#D1D1D1] mt-[16px]'/> */}
                        <div class="custom-dashed-border"/>
                        <div
                        className='flex flex-col w-full h-auto text-[16px] font-medium mt-[16px]'>
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
                            className='flex justify-between mt-[16px]'>
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
                            className='flex justify-between mt-[16px] mb-4'>
                                <h1
                                className='text-[#7C7C7C]'>
                                    Delivery Charges
                                </h1>

                                <p>
                                    ₹{deliveryCharges}
                                </p>
                            </div>

                            <div class="custom-dashed-border"/>

                            <div
                            className='flex justify-between mt-[16px]'>
                                <h1
                                className='text-[#7C7C7C]'>
                                    Total Amount
                                </h1>

                                <p
                                className='text-[18px] font-semibold'>
                                    ₹{discountedPrice + deliveryCharges}
                                </p>
                            </div>
                        </div>

                    </div>
                </div>

        </div>
    </div>
    )
}

export default PaymentPage
