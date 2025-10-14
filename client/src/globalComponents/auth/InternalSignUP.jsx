import React, { useState } from 'react';
import OtpInput from 'react-otp-input';

const InternalSignUP = () => {
  const [section, setSection] = useState(1); // section tracker

  // Section 1
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [mail, setMail] = useState('');
  const [contact, setContact] = useState('');

  // Section 2
  const [otpEmail, setOtpEmail] = useState('');
  const [otpMobile, setOtpMobile] = useState('');

  // Section 3
  const [addressType, setAddressType] = useState('Home');
  const [customAddressType, setCustomAddressType] = useState('');
  const [address1, setAddress1] = useState('');
  const [address2, setAddress2] = useState('');
  const [state, setState] = useState('');
  const [city, setCity] = useState('');
  const [pincode, setPincode] = useState('');

  // All Indian states
  const states = [
    "Andhra Pradesh","Arunachal Pradesh","Assam","Bihar","Chhattisgarh",
    "Goa","Gujarat","Haryana","Himachal Pradesh","Jharkhand","Karnataka",
    "Kerala","Madhya Pradesh","Maharashtra","Manipur","Meghalaya","Mizoram",
    "Nagaland","Odisha","Punjab","Rajasthan","Sikkim","Tamil Nadu","Telangana",
    "Tripura","Uttar Pradesh","Uttarakhand","West Bengal"
  ];

  // Dummy city list per state
  const citiesByState = {
    Maharashtra: ["Mumbai", "Pune", "Nagpur"],
    Gujarat: ["Ahmedabad", "Surat", "Vadodara"],
    Telangana: ["Hyderabad", "Warangal", "Nizamabad"],
  };

  const handlePrev = () => setSection((s) => s - 1);
  const handleNext = () => setSection((s) => s + 1);

  const handleSendOtp = () => {
    // if (!mail) {
    //   alert("Please enter email before sending OTP");
    //   return;
    // }
    // otp sending logic can go here...
    alert("OTP sent successfully ✅");
    setSection(2); // go to next section after OTP send
  };

  const handleSubmit = () => {
    const finalData = {
      firstName, lastName, mail, contact,
      otpEmail, otpMobile,
      addressType: addressType === "Other" ? customAddressType : addressType,
      address1, address2, state, city, pincode
    };
    console.log("Final User Data:", finalData);
    alert("Form Submitted ✅ (check console)");
  };

  return (
    <div className="flex flex-col justify-center items-start text-white md:ml-5 ml-3.5 my-5 w-full max-w-md relative font-[Poppins]">

      <h1 className="font-bold text-3xl">Create an account</h1>
      <p className='text-sm'>
          Already have an account?{' '}
          <u>
            <a className='text-white font-semibold underline' href="/auth/login">LogIn</a>
          </u>
        </p>

      {/* ---------------- Section 1 ---------------- */}
      {section === 1 && (
        <div className="mt-12 md:w-full w-[90%]">
          <input
            className="w-full h-12 mt-5 rounded-md px-3 text-[18px] bg-white/10"
            type="text"
            placeholder="First name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
          <input
            className="w-full h-12 mt-5 rounded-md px-3 text-[18px] bg-white/10"
            type="text"
            placeholder="Last name"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
          <input
            className="w-full h-12 mt-5 rounded-md px-3 text-[18px] bg-white/10"
            type="email"
            placeholder="Email"
            value={mail}
            onChange={(e) => setMail(e.target.value)}
          />
          <div className='w-full flex gap-2'>
            <input
              className="w-[56px] h-12 mt-5 rounded-md px-3 text-[18px] bg-white/10"
              type="text"
              placeholder="Phone Number"
              value={'+91'}
              disabled
            />
            <input
              className="w-full h-12 mt-5 rounded-md px-3 text-[18px] bg-white/10"
              type="text"
              placeholder="Phone Number"
              value={contact}
              onChange={(e) => setContact(e.target.value)}
            />
          </div>

          <button
            onClick={handleSendOtp}
            className="w-full h-12 mt-5 hover:bg-gradient-to-br hover:from-blue-300 hover:via-blue-500 hover:to-purple-500 bg-white/10 text-black hover:text-white cursor-pointer rounded-md flex justify-center items-center"
          >
            <p className="font-semibold text-[18px]  text-white">Send OTP</p>
          </button>
        </div>
      )}

      {/* ---------------- Section 2 ---------------- */}
      {section === 2 && (
        <div className="mt-12 md:w-full w-[90%]">
          {/* <input
            className="w-full h-12 mt-5  rounded-md px-3 text-[18px] bg-white/10 "
            type="text"
            value={firstName}
            disabled
          />
          <input
            className="w-full h-12 mt-5  rounded-md px-3 text-[18px] bg-white/10"
            type="text"
            value={lastName}
            disabled
          /> */}

          {/* OTP for Email only if email was given */}
          {mail && (
            <div className="mt-5">
              <p className="mb-2">We have sent an OTP on {mail}</p>
              <OtpInput
                value={otpEmail}
                onChange={setOtpEmail}
                numInputs={6}
                inputStyle={{
                  width: "2.5rem",
                  height: "2.9rem",
                  margin: "0 0.25rem",
                  fontSize: "1.5rem",
                  borderRadius: "0.25rem",
                  border: "1px solid white",
                  backgroundColor: "rgba(255,255,255,0.1)",
                  color: "white",
                  textAlign: "center"
                }}
                renderInput={(props) => <input {...props} />}
              />
            </div>
          )}

          {/* OTP for Mobile */}
          <div className="mt-5">
            <p className="mb-2">We have sent an OTP on {'+91 ' + contact}</p>
            <OtpInput
              value={otpMobile}
              onChange={setOtpMobile}
              numInputs={6}
              inputStyle={{
                  width: "2.5rem",
                  height: "2.9rem",
                  margin: "0 0.25rem",
                  fontSize: "1.5rem",
                  borderRadius: "0.25rem",
                  border: "1px solid white",
                  backgroundColor: "rgba(255,255,255,0.1)",
                  color: "white",
                  textAlign: "center"
                }}
                renderInput={(props) => <input {...props} />}
            />
          </div>

          <div className="flex justify-between mt-5">
            <button onClick={handlePrev} className="px-5 py-2 bg-gray-500 rounded-md cursor-pointer hover:scale-105">← Previous</button>
            <button onClick={handleNext} className="px-5 py-2 bg-gradient-to-br from-blue-300 via-blue-500 to-purple-500 rounded-md cursor-pointer hover:scale-105">Next →</button>
          </div>
        </div>
      )}

      {/* ---------------- Section 3 ---------------- */}
      {section === 3 && (
        <div className="my-6 md:w-full w-[90%]">
          <div className='md:max-h-[400px] max-h-[500px] overflow-y-auto pr-2 [&::-webkit-scrollbar]:hidden'>
          <input
            className="w-full h-12 mt-5  rounded-md px-3 text-[18px] bg-white/10 "
            type="text"
            value={firstName}
            disabled
          />
          <input
            className="w-full h-12 mt-5  rounded-md px-3 text-[18px] bg-white/10"
            type="text"
            value={lastName}
            disabled
          />
          {/* Address Type */}
          <select
            className="w-full h-12 mt-5 px-3 rounded-md bg-white/10 text-white"
            value={addressType}
            onChange={(e) => setAddressType(e.target.value)}
          >
            <option className='bg-white/10 text-white'>Home</option>
            <option className='bg-white/10 text-white'>Office</option>
            <option className='bg-white/10 text-white'>Other</option>
          </select>

          {addressType === "Other" && (
            <input
              className="w-full h-12 mt-5 rounded-md px-3 bg-white/10"
              type="text"
              placeholder="Specify Address Type"
              value={customAddressType}
              onChange={(e) => setCustomAddressType(e.target.value)}
            />
          )}

          <input
            className="w-full h-12 mt-5 rounded-md px-3 bg-white/10"
            type="text"
            placeholder="Address Line 1"
            value={address1}
            onChange={(e) => setAddress1(e.target.value)}
          />
          <input
            className="w-full h-12 mt-5 rounded-md px-3 bg-white/10"
            type="text"
            placeholder="Address Line 2"
            value={address2}
            onChange={(e) => setAddress2(e.target.value)}
          />

          {/* State Dropdown */}
          <select
            className="w-full h-12 mt-5 rounded-md px-3 bg-white/10"
            value={state}
            onChange={(e) => { setState(e.target.value); setCity(''); }}
          >
            <option value="">Select State</option>
            {states.map((st) => <option key={st}>{st}</option>)}
          </select>

          {/* City Dropdown based on state */}
          {state && (
            <select
              className="w-full h-12 mt-5 rounded-md px-3 bg-white/10"
              value={city}
              onChange={(e) => setCity(e.target.value)}
            >
              <option value="">Select City</option>
              {citiesByState[state]?.map((c) => <option key={c}>{c}</option>)}
            </select>
          )}

          <input
            className="w-full h-12 mt-5 rounded-md px-3 bg-white/10"
            type="text"
            placeholder="Pincode"
            value={pincode}
            onChange={(e) => setPincode(e.target.value)}
          />
          </div>
          <div className="flex justify-between mt-5">
            <button onClick={handlePrev} className="px-5 py-2 bg-gray-500 rounded-md hover:scale-105 cursor-pointer">← Previous</button>
            <button onClick={handleSubmit} className="px-5 py-2 bg-gradient-to-br from-blue-300 via-blue-500 to-purple-500 rounded-md hover:scale-105 cursor-pointer">Submit</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default InternalSignUP;
