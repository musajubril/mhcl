"use client"
import Contact from '@/components/Contact'
import CTA from '@/components/home/CTA'
import HomeAboutUs from '@/components/home/HomeAboutUs'
import PartnersAndClients from '@/components/home/PartnersAndClients'
import StrategicPlanning from '@/components/home/StrategicPlanning'
import Team from '@/components/Team'
import WhyChoose from '@/components/WhyChoose'
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
      <div className="h-full w-full bg-[#034833]/80  py-[60px] lg:px-[137px] flex flex-col justify-center items-center text-white gap-[30px] text-center max-mobile:px-6">
        <div className="text-d1 max-mobile:text-h1 max-mobile:w-dvw text-wrap">
          About Us
        </div>
        <div className="text-md">Home / About Us</div>
      </div>
    </div>
    <div className="">
      <div className="px-[120px] max-mobile:px-6 py-24 flex flex-col">
            <HomeAboutUs />
            <PartnersAndClients />
            <StrategicPlanning />
            {/* <Team /> */}
            <WhyChoose />
            </div>
      </div>
      </div>
  )
}
