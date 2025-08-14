import React, { useState, useRef, useEffect} from 'react'
import closeIcon from '../../assets/icons/closeIcon.svg'

const Advertisements = () => {

    const [ addVisibility, setAddVisibility ] = useState(false);
    const [ progress, setProgress ] = useState(100);

    const handleAddVisibility = () => {
        setAddVisibility(true)
    }

    useEffect(() => {

        const totalTime = 0;
        const intervalTime = 100;

        const interval = setInterval(() => {
            setProgress(prev => {
                const next = prev - (100 * intervalTime) / totalTime;
                return next <= 0 ? 0 : next;
            })
        }, intervalTime)

        const timeout = setTimeout(() => {
            setAddVisibility(true)
        },totalTime)

        return () => {
            clearTimeout(timeout);
            clearInterval(interval);
        }
    },[])

    return (
        <div
        className={` 
        ${addVisibility 
        ? `hidden`
        : `w-[100vw] lg:px-[80px] lg:h-[100px] h-[80px] bg-red-200 flex flex-col justify-center items-center fixed bottom-21 left-0 z-50`}`}>
            <div
            className='w-full h-[90px] flex flex-col justify-center items-center'>
                <img 
                onClick={handleAddVisibility}
                className='w-[18px] h-[18px] top-2 right-2 absolute'
                src={closeIcon} 
                alt={closeIcon} />
                <p
                className='text-[24px] text-[#121212] font-semibold'>
                    Your Advertisement here
                </p>
                 <div className="w-full h-1 mt-3 rounded-b-full absolute bottom-0 ">
                    <div
                    className="h-full bg-red-400 rounded transition-all duration-100 linear"
                    style={{ width: `${progress}%` }}
                    />
                </div>
            </div>
        </div>
    )
}

export default Advertisements
