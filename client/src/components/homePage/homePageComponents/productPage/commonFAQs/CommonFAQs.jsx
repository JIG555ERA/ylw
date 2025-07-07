import React, { useState } from 'react';
import closeIcon from '../../../../../assets/icons/closeIcon.svg';
import openIcon from '../../../../../assets/icons/openIcon.svg';

const CommonFAQs = () => {
  const card = [
    { id: 0, no: "1", question: "Where can I watch?", answer: "Nibh quisque suscipit fermentum netus nulla cras porttitor euismod nulla..." },
    { id: 1, no: "2", question: "How do I subscribe?", answer: "Orci, dictumst nec aliquet id ullamcorper venenatis. Fermentum sulla cras..." },
    { id: 2, no: "3", question: "Is there a free trial?", answer: "Cras porttitor euismod nulla. Orci, dictumst nec aliquet id ullamcorper..." },
    { id: 3, no: "4", question: "Can I cancel anytime?", answer: "Dictumst nec aliquet id ullamcorper venenatis. Fermentum sulla cras..." },
  ];

  const [openItems, setOpenItems] = useState({}); // track open states by id

  const toggleItem = (id) => {
    setOpenItems(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  return (
    <div className='px-[80px] w-full h-auto flex flex-col mt-[40px] pb-[200px]'>
      <div className="w-full  border-t-[2px] border-dashed border-[#D1D1D1] "/>
      <h1 className='text-[24px] font-semibold text-[#121212] mt-[30px]'>Common FAQ’s</h1>

      <div className='flex flex-col mt-[30px]'>
        {card.map((item) => (
          <div
            key={item.id}
            className='w-full h-auto mt-[10px] bg-white flex flex-col px-[20px] py-[20px]'
          >
            <h1 className='text-[32px] font-bold text-[#3C3C43]/50'>{item.no}</h1>

            <div className='w-full justify-between flex items-center cursor-pointer' onClick={() => toggleItem(item.id)}>
              <h1 className='text-[20px] text-[#000000] font-bold'>{item.question}</h1>
              <img src={openItems[item.id] ? closeIcon : openIcon} alt="toggle icon" />
            </div>

            {openItems[item.id] && (
              <p className='mt-[10px] text-[#3C3C43] text-[16px] transition-all duration-500 ease-in-out'>
                {item.answer}
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CommonFAQs;
