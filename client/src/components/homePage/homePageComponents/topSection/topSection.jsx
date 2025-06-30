import React from 'react'
import { Navbar } from './navBar/navbar'

export const TopSection = () => {
  return (
    <div
      className="
        pt-0 mt-0 flex justify-center box-border
      "
    >
      {/* Uncomment the lamp images if you want to use them later */}
      {/* 
      <img 
        className="absolute top-0 left-0"
        src="../src/assets/images/leftTopLamp.svg" 
        alt="Top Left Lamp" 
      />
      */}

      <Navbar />

      {/* 
      <img 
        className="absolute top-0 right-0"
        src="../src/assets/images/rightTopLamp.svg" 
        alt="Top Right Lamp" 
      />
      */}
    </div>
  )
}
