import React, { useState } from 'react';
import closeIcon from '../../../../../assets/icons/closeIcon.svg';
import openIcon from '../../../../../assets/icons/openIcon.svg';
import { FaRegCircleQuestion } from "react-icons/fa6";
import { FiPlus } from "react-icons/fi";
import { IoClose } from "react-icons/io5";

const CommonFAQs = () => {
  const card = [
    { id: 0, no: "1", question: "How long does shipping usually take?", answer: "We offer multiple shipping options to suit your needs. Standard shipping typically takes 3-5 business days, while our express delivery arrives within 2-3 hours in major cities. Free shipping is available on orders over $25." },
    { id: 1, no: "2", question: "Which payment methods do you accept?", answer: "We accept all major credit cards (Visa, MasterCard, American Express), PayPal, Apple Pay, Google Pay, and bank transfers. All transactions are secured with 256-bit SSL encryption for your safety." },
    { id: 2, no: "3", question: "Can i return or exchange books?", answer: "Yes! We offer a 30-day return policy for unopened books in original condition. Digital books can be returned within 14 days. Simply contact our support team to initiate a return and we'll provide a prepaid shipping label." },
    { id: 3, no: "4", question: "How can i track my order?", answer: "Once your order ships, you'll receive an email with tracking information. You can also log into your account to view order status and tracking details. Real-time updates are provided throughout the delivery process." },
  ];

  const [openItems, setOpenItems] = useState({}); // track open states by id

  const toggleItem = (id) => {
    setOpenItems(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  return (
    <div className='bg-gradient-to-br from bg-blue-100 via-white to-purple-100 w-full h-auto flex flex-col mt-[40px] pb-[48px]'>
      <div className='w-full h-auto xl:px-[80px] md:px-[40px] px-[16px] flex flex-col items-center py-[40px]'>
        <h1 className='xl:text-[16px] font-normal  mt-[30px] mx-auto flex xl:gap-2 md:gap-1.5 gap-1 xl:px-[20px] md:px-[15px] px-[8px] bg-white rounded-3xl shadow-200 shadow-md hover:shadow-gray-300 hover:shadow-lg hover:scale-105 justify-center items-center md:py-3 py-2 cursor-pointer'>
          <FaRegCircleQuestion className='h-5 w-5 text-blue-500 ' />
          Got Questions? We've Got Answers
        </h1>
        <div
        className='w-full flex flex-col justify-center items-center py-[24px]'>
          <h1
          className='inline-block text-center xl:text-[40px] md:text-[36px] text-[32px] font-semibold bg-gradient-to-br from-blue-300 via-blue-500 to-purple-300  bg-clip-text text-transparent'>
            Frequently Asked Questions
          </h1>

          <div
          className='md:w-[40vw] flex justify-center mt-[8px]'>
            <p
            className='text-[16px] font-normal text-[#121212]/60 text-center'>
              Find answers to common questions about our bookstore, shipping, returns, and more
            </p>
          </div>
        </div>

        <div className='flex flex-col mt-[30px] bg-gradient-to-br from-purple-100/75 via-white/75 to-blue-100/75 rounded-3xl md:w-[80vw] border-2 border-l-purple-200 border-r-blue-200 border-t-purple-200 border-b-blue-200 xl:p-[36px] md:p-[32px] p-[24px] xl:gap-[24px]'>
          {card.map((item) => (
            <div
              key={item.id}
              className='w-auto  bg-white flex flex-col p-[20px] py-[24px] rounded-3xl group hover:scale-101 shadow-md shadow-gray-200 hover:shadow-lg hover:shadow-gray-300'
            >
              <div className='w-full justify-between flex items-center cursor-pointer' onClick={() => toggleItem(item.id)}>
                <h1 className='text-[20px] text-[#000000] font-semibold group-hover:bg-gradient-to-br from-blue-300 via-blue-500 to-purple-400 bg-clip-text group-hover:text-transparent'>{item.question}</h1>
                {openItems[item.id] 
                ? <div className='w-[32px] h-[32px] rounded-full flex justify-center items-center group-hover:bg-gradient-to-br from-blue-300 via-blue-500 to-purple-300 bg-white border-2  border-blue-400 group-hover:border-white'><IoClose className='w-6 h-6 text-blue-400 group-hover:text-white'/> </div> 
                : <div className='w-[32px] h-[32px] rounded-full flex justify-center items-center group-hover:bg-gradient-to-br from-blue-300 via-blue-500 to-purple-300 bg-white border-2  border-blue-400 group-hover:border-white'><FiPlus className='w-6 h-6 text-blue-400 group-hover:text-white'/> </div> } 
              </div>

              {openItems[item.id] && (
                <p className='mt-[10px] text-[#3C3C43] text-[16px] transition-all duration-1000 delay-100 ease-in-out'>
                  {item.answer}
                </p>
              )}
            </div>
          ))}
        </div>

        <div
        className='xl:w-[45vw] xl:mt-[44px] md:mt-[36px] md:w-[50vw] h-auto flex justify-between items-center xl:p-[28px] md:p-[24px] p-[16px] bg-white rounded-3xl shadow-md shadow-gray-200 hover:scale-102 group hover:shadow-gray-300 hover:shadow-lg'>
          <div
          className='w-auto flex flex-col'>
            <h1 className='text-[16px] font-semibold'>Still have a question?</h1>
            <p className='text-[14px] font-normal text-[#7C7C7C]'>Our customer support team is here to help you 24/7</p>
          </div>
          <div
          className='bg-gradient-to-br rounded-3xl font-normal cursor-pointer text-white from-blue-300 via-blue-500 to-purple-300 xl:px-[20px] md:px-[16px] px-[16px] text-center md:py-2'>
            Contact Support
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommonFAQs;
