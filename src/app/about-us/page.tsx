"use client"
import React from 'react'

export default function page() {
  return (
    <div className="flex flex-col">
    <div
      className="bg-no-repeat bg-center bg-cover rounded-[10px] h-[450px]"
      style={{
        backgroundImage: `url(/img/wwd.jpg)`,
      }}
    >
      <div className="h-full w-full  py-[60px] lg:px-[137px] flex flex-col justify-center items-center text-white gap-[30px] text-center max-mobile:px-6">
        <div className="text-d1 max-mobile:text-h1 max-mobile:w-dvw text-wrap">
          Contact Us
        </div>
        <div className="text-md">Home / Contact Us</div>
      </div>
    </div>
    <div className="pt-24">
      <div className="px-[120px] max-mobile:px-6 py-24 flex flex-col">

      </div>
      </div>
      </div>
  )
}
