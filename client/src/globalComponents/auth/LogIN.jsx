import React, { useState, useEffect} from 'react'
import { FaEye, FaEyeSlash } from 'react-icons/fa'

const LogIN = () => {

    const [ email, setEmail ] = useState('');
    const [ password, setPassword ] = useState('');
    const [ showPassword, setShowPassword ] = useState(true);
    const [ confirm, setConfirm ] = useState(false);

    const handlePasswordVisibility = () => setShowPassword(prev => !prev);
    const getMaskedPassword = () => '●'.repeat(password.length);

    useEffect(() => {
        const isFormValid =
            email.trim() &&
            password.trim() &&
    
            setConfirm(isFormValid);
        }, [email, password]);

    return (
        <div
                                className='w-full h-full absolute z-20 flex flex-col justify-center items-center px-[52px] py-[40px]'>
                                    <div
                                    className='w-full h-full'>
                                        <h1
                                        className='text-[24px] font-medium text-[#333333]'>
                                            Log in
                                        </h1>
                                        <div
                                            className='flex flex-col w-[410px] mt-32'>
                                                <p
                                                className='text-[12px] text-[#666666] font-normal'>
                                                    Email address
                                                </p>
                                                <input
                                                className='w-full h-[42px] border-[#666666] border-1 rounded-[8px] mt-1 text-[14px] text-[#111111] p-3'
                                                onChange={(e) => setEmail(e.target.value)} 
                                                value={email}
                                                type="text"
                                                placeholder='' />
        
                                        </div>
                                        
                                        <div
                                            className='flex flex-col w-[410px] mt-2'>
                                                <div
                                                className='flex justify-between'>
                                                    <p
                                                    className='text-[12px] text-[#666666] font-normal mt-1'>
                                                        Password
                                                    </p>
                                                    <div
                                                    onClick={handlePasswordVisibility}
                                                    className='flex cursor-pointer'>
                                                        {showPassword   
                                                        ? <p className='flex justify-center items-center  text-[#666666]/80'><FaEye className='w-[18px] h-[18px] mr-2' />hide</p> 
                                                        : <p className='flex justify-center items-center  text-[#666666]/80'><FaEyeSlash className='w-[18px] h-[18px] mr-2' />show</p> }
                                                        
                                                    </div>
                                                </div>
                                                <input
                                                className='w-full h-[42px] border-[#666666] border-1 rounded-[8px] mt-1 text-[14px] text-[#111111] p-3 tracking-widest'
                                                onChange={(e) => setPassword(e.target.value)} 
                                                value={showPassword ? password : getMaskedPassword(password)}
                                                type={'text'}
                                                placeholder='' />
        
                                        </div>
                                        <div
                                        className='w-[340px] h-[45px] flex justify-between mt-6 items-center'>
                                            <div
                                            className='w-[125px] h-[45px] text-[16.5px] font-medium text-white cursor-pointer'>
                                                {confirm 
                                                ? <div className='w-[125px] h-[45px] bg-[#064FA4] rounded-[12px] flex justify-center items-center'><p>Log in</p></div> 
                                                : <div className='w-[125px] h-[45px] bg-[#666666] rounded-[12px] flex justify-center items-center'><p>Log in</p></div> }
                                            </div>
                                            <div>
                                                <p className='text-[#000000] text-[12px]'>Don't have an account? <a href="/auth/signup"><u className='font-medium'>Sign up</u></a>  </p>
                                            </div>
                                        </div>
                                        
                                    </div>
                                </div>
    )
}

export default LogIN
