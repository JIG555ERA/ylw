import React, { useState, useEffect } from 'react'
import authBg from '../../assets/backgroundImages/authBg.svg'
import formBg from '../../assets/backgroundImages/formBg.svg'
import { FaEye, FaEyeSlash } from 'react-icons/fa'
import tickTrue from '../../assets/icons/tickTrue.svg'

const SignUP = () => {

    const [ firstName, setFirstName ] = useState('');
    const [ email, setEmail ] = useState('');
    const [ lastName, setLastName ] = useState('');
    const [ password, setPassword ] = useState('');
    const [ phoneNumber, setPhoneNumber ] = useState('+91 ')
    const [ userAgreement, setUserAgreement ] = useState(false);
    const [ showPassword, setShowPassword ] = useState(true);
    const termsOfUseLink = '';
    const [ messagingAgreement, setMessagingAgreement ] = useState(false);
    const privacyPolicyLink = '';
    const [ signUP, setSignUP ] = useState(false)
    const [ confirm, setConfirm ] = useState(false)
    const [ addressLine1, setAddressLine1 ] = useState('');
    const [ addressLine2, setAddressLine2 ] = useState('');
    const [ addressLine3, setAddressLine3 ] = useState('');
    const [ pincode, setPincode ] = useState();
    const [ city, setCity ] = useState('');
    const [ state, setState] = useState('');
    const [ address, setAddress ] = useState(false)

    useEffect(() => {
    const isFormValid =
        firstName.trim() &&
        lastName.trim() &&
        email.trim() &&
        password.trim() &&
        phoneNumber.trim() &&
        userAgreement &&
        messagingAgreement;

        setConfirm(isFormValid);
    }, [firstName, lastName, email, password, phoneNumber, userAgreement, messagingAgreement]);

    const setPage = () => {
        
    }

    useEffect(() => {
        const isAddressValid = 
            addressLine1.trim() &&
            addressLine2.trim() &&
            addressLine3.trim() &&
            pincode.trim() &&
            city.trim() &&
            state.trim()

            setAddress(isAddressValid);
    }, [addressLine1, addressLine2, addressLine3, city, state, pincode])

    
    const handlePasswordVisibility = () => setShowPassword(prev => !prev);
    const handleUserAgreement = () => setUserAgreement(prev => !prev)
    const handleMessagingAgrement = () => setMessagingAgreement(prev => !prev);

    const getMaskedPassword = () => '●'.repeat(password.length);

    return (
        <div
                        className='w-full h-full absolute z-20 flex flex-col justify-center items-center px-[52px] py-[40px]'>
                            {!signUP && !confirm && (
                                <div
                                className='w-full h-full'>
                                    <h1
                                    className='text-[24px] font-medium text-[#333333]'>
                                        Sign up now
                                    </h1>
                                    <div
                                    className='flex mt-6 justify-between w-[410px]'>
                                        <div
                                        className='flex flex-col'>
                                            <p
                                            className='text-[12px] text-[#666666] font-normal'>
                                                First name
                                            </p>
                                            <input
                                            className='w-[195px] h-[42px] border-[#666666] border-1 rounded-[8px] mt-1 text-[14px] text-[#111111] p-3'
                                            onChange={(e) => setFirstName(e.target.value)} 
                                            value={firstName}
                                            type="text"
                                            placeholder='' />

                                        </div>
                                        <div
                                        className='flex flex-col'>
                                            <p
                                            className='text-[12px] text-[#666666] font-normal'>
                                                Last name
                                            </p>
                                            <input
                                            className='w-[195px] h-[42px] border-[#666666] border-1 rounded-[8px] mt-1 text-[14px] text-[#111111] p-3'
                                            onChange={(e) => setLastName(e.target.value)} 
                                            value={lastName}
                                            type="text"
                                            placeholder='' />

                                        </div>
                                    </div>
                                    <div
                                        className='flex flex-col w-[410px] mt-2'>
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
                                            <p
                                            className='text-[12px] text-[#666666] font-normal'>
                                                Phone number
                                            </p>
                                            <input
                                            className='w-full h-[42px] border-[#666666] border-1 rounded-[8px] mt-1 text-[14px] text-[#111111] p-3'
                                            onChange={(e) => setPhoneNumber(e.target.value)} 
                                            value={phoneNumber}
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
                                            <p className='text-[10.5px] text-[#666666] mt-1'>Use 8 or more characters with a mix of letters, numbers & symbols</p>

                                    </div>
                                    <div
                                    className='flex flex-col w-[450px] mt-6'>
                                        <div
                                        className='flex'>
                                            <div
                                            onClick={handleUserAgreement}>
                                                {userAgreement 
                                                ? <img className='w-[13px] h-[13px]' src={tickTrue}/> 
                                                : <div className='w-[13px] h-[13px] rounded-[2px] border-1 border-[#666666]'/>}
                                            </div>
                                            <p
                                            className='text-[12px] ml-2 text-[#111111]'>
                                                By creating an account, I agree to our <a href={termsOfUseLink}><u className='font-medium'>Terms of use</u></a> and <a href={privacyPolicyLink}><u className='font-medium'>Privacy Policy</u></a> 
                                            </p>
                                        </div>
                                        <div
                                        className='flex mt-6'>
                                            <div
                                            className='w-[15px] h-[13px] cursor-pointer'
                                            onClick={handleMessagingAgrement}>
                                                {messagingAgreement 
                                                ? <img className='w-[13px] h-[13px]' src={tickTrue}/> 
                                                : <div className='w-[13px] h-[13px] rounded-[2px] border-1 border-[#666666]'/>}
                                            </div>
                                            <p
                                            className='text-[12px] ml-2 text-[#111111]'>
                                            By creating an account, I am also consenting to receive SMS messages and emails, including product new feature updates, events, and marketing promotions.
                                            </p>
                                        </div>
                                    </div>

                                    <div
                                    className='w-[340px] h-[45px] flex justify-between mt-6 items-center cursor-pointer'>
                                        <div
                                        onClick={setPage}
                                        className='w-[125px] h-[45px] text-[16.5px] font-medium text-white'>
                                            {confirm 
                                            ? <div className='w-[125px] h-[45px] bg-[#064FA4] rounded-[12px] flex justify-center items-center'><p>Sign up</p></div> 
                                            : <div className='w-[125px] h-[45px] bg-[#666666] rounded-[12px] flex justify-center items-center'><p>Sign up</p></div> }
                                        </div>
                                        <div>
                                            <p className='text-[#000000] text-[12px]'>Already have an account? <a href="/auth/login"><u className='font-medium'>Log in</u></a>  </p>
                                        </div>
                                    </div>
                                </div>
                            )}

                            {!signUP && confirm && (
                                <div
                                className='w-[400px] flex flex-col'>
                                    <h1
                                    className='text-[24px] text-[#111111] font-medium'>
                                        Add address
                                    </h1>

                                    <div
                                        className='flex flex-col mt-6'>
                                            <p
                                            className='text-[12px] text-[#666666] font-normal'>
                                                Address line 1 <span className='text-red-400'>*</span>
                                            </p>
                                            <input
                                            className='w-full h-[42px] border-[#666666] border-1 rounded-[8px] mt-1 text-[14px] text-[#111111] p-3'
                                            onChange={(e) => setAddressLine1(e.target.value)} 
                                            value={addressLine1}
                                            type="text"
                                            placeholder='' />
                                    </div>

                                    <div
                                        className='flex flex-col mt-2'>
                                            <p
                                            className='text-[12px] text-[#666666] font-normal'>
                                                Address line 2 <span className='text-red-400'>*</span>
                                            </p>
                                            <input
                                            className='w-full h-[42px] border-[#666666] border-1 rounded-[8px] mt-1 text-[14px] text-[#111111] p-3'
                                            onChange={(e) => setAddressLine2(e.target.value)} 
                                            value={addressLine2}
                                            type="text"
                                            placeholder='' />
                                    </div>

                                    <div
                                        className='flex flex-col mt-2'>
                                            <p
                                            className='text-[12px] text-[#666666] font-normal'>
                                                Address line 3 
                                            </p>
                                            <input
                                            className='w-full h-[42px] border-[#666666] border-1 rounded-[8px] mt-1 text-[14px] text-[#111111] p-3'
                                            onChange={(e) => setAddressLine3(e.target.value)} 
                                            value={addressLine3}
                                            type="text"
                                            placeholder='' />
                                    </div>

                                    <div
                                        className='flex flex-col mt-2'>
                                            <p
                                            className='text-[12px] text-[#666666] font-normal'>
                                                Pincode <span className='text-red-400'>*</span>
                                            </p>
                                            <input
                                            className='w-full h-[42px] border-[#666666] border-1 rounded-[8px] mt-1 text-[14px] text-[#111111] p-3'
                                            onChange={(e) => setPincode(e.target.value)} 
                                            value={pincode}
                                            type="text"
                                            placeholder='' />
                                    </div>

                                    <div
                                    className='flex mt-2 justify-between w-[400px]'>
                                        <div
                                        className='flex flex-col'>
                                            <p
                                            className='text-[12px] text-[#666666] font-normal'>
                                                City
                                            </p>
                                            <input
                                            className='w-[190px] h-[42px] border-[#666666] border-1 rounded-[8px] mt-1 text-[14px] text-[#111111] p-3'
                                            onChange={(e) => setCity(e.target.value)} 
                                            value={city}
                                            type="text"
                                            placeholder='' />

                                        </div>
                                        <div
                                        className='flex flex-col'>
                                            <p
                                            className='text-[12px] text-[#666666] font-normal'>
                                                State
                                            </p>
                                            <input
                                            className='w-[190px] h-[42px] border-[#666666] border-1 rounded-[8px] mt-1 text-[14px] text-[#111111] p-3'
                                            onChange={(e) => setState(e.target.value)} 
                                            value={state}
                                            type="text"
                                            placeholder='' />

                                        </div>
                                    </div>

                                    <div
                                    className='mt-6'>
                                        {address 
                                        ? <div className='w-full h-[45px] rounded-[12px] flex justify-center items-center bg-[#064FA4] text-white'><p>Save</p> </div>
                                        : <div className='w-full h-[45px] rounded-[12px] flex justify-center items-center bg-[#666666] text-white'><p>Save</p> </div>
                                        }
                                    </div>



                                </div>
                            )}
        </div>
        
    )
}

export default SignUP
