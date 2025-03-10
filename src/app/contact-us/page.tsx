"use client"
import Contact from '@/components/Contact';
import React from 'react'
import { FaLinkedinIn, FaInstagram, FaFacebookF, FaTwitter } from 'react-icons/fa6'
import { FiLinkedin, FiPhoneCall, FiTwitter, FiYoutube } from 'react-icons/fi'
import { GrMail } from "react-icons/gr";
import { IoLocation } from "react-icons/io5";
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
      <div className="bg-white rounded-[10px] p-[30px] flex gap-[50px] max-mobile:flex-col max-mobile:gap-[50px] mb-10">
        <div className="flex max-mobile:flex-col gap-[30px]">
          {[
            {
              icon: FiPhoneCall,
              title: "Call Anytime",
              top: "+ 234 702 5359 031",
              bottom: "+ 234 803 7737 393",
            },
            {
              icon: GrMail,
              title: "Send Email",
              top: "Info@mangrovehills.com",
              bottom: "",
            },
            {
              icon: IoLocation,
              title: "Visit Us",
              top: "Address- Suite 440, Ikeja plaza, 81 Mobolaji bank  ",
              bottom: "Anthony way, Ikeja, Lagos",
            },
          ].map((it, i) => (
            <div className="flex gap-[15px] w-full" key={i}>
              <div className="p-5 flex bg-[#f7f7f7] text-primary rounded-[10px] h-[70px]">
                <it.icon className="h-[30px] w-[30px]" />
              </div>
                <div className="flex flex-col gap-[10px] w-full">
                  <div className="font-extrabold text-primary text-xl">{it.title}</div>
                  <div className="flex flex-col gap-[2px] text-[#0E1F51] text-base font-medium w-full break-all">
                    <div className="">{it.top}</div>
                    <div className="">{it.bottom}</div>
                  </div>
                </div>
            </div>
          ))}
        </div>
        <div className="flex flex-col max-mobile:flex-row max-mobile:justify-between">
          <div className="text-center text-[#0e1f51] font-bold text-xl">Follow Us</div>
        <div className="flex gap-4">
                   <FaFacebookF className='w-6 h-6 hover:text-primary cursor-pointer transition-all transform hover:scale-105 duration-300' />
                   <FiYoutube className='w-6 h-6 hover:text-primary cursor-pointer transition-all transform hover:scale-105 duration-300' />
                   <FiTwitter className='w-6 h-6 hover:text-primary cursor-pointer transition-all transform hover:scale-105 duration-300' />
                   <FiLinkedin className='w-6 h-6 hover:text-primary cursor-pointer transition-all transform hover:scale-105 duration-300' />
                   </div>
        </div>
      </div>
      <Contact />
      </div>
    </div>
  </div>
  )
}
