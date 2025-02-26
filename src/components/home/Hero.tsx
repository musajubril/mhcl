"use client"
import React from 'react'
import { Button } from '../ui/button'
import { FaFacebookF } from "react-icons/fa";
import { FiYoutube, FiTwitter, FiLinkedin } from "react-icons/fi";
import StackedCards from '../shared/StackedCards';
export default function Hero() {
  return (
    <div className='px-[120px] max-mobile:px-6 pb-[100px] pt-24 max-mobile:py-5 max-mobile:pb-20'>
      <div className="grid grid-cols-2 max-mobile:grid-cols-1 gap-3">
        <div className="flex flex-col gap-6">
          <div className="flex">
            <div className="bg-primary/30 px-4 rounded-tr-lg text-md">
              Strategize & Succeed
            </div>
          </div>
          <div className="text-d2 max-mobile:text-h1">
          Your Trusted Partner in
Energy and Infrastructure Solutions.
          </div>
          <div className="text-dark-grey font-normal text-md">
          Providing specialized support in the development of standards, operations and competence tailored to the specific requirements of your company, leveraging our intensive and expensive global experience in the management and auditing of aviation programs
          </div>
          <div className="flex gap-6">
            <Button className='uppercase transition-all transform hover:scale-105 duration-300'>
              CONTACT US
            </Button>
            <Button variant={"outline"} className='text-primary border-primary uppercase hover:text-primary transition-all transform hover:scale-105 duration-300'>
              FREE CONSULT
            </Button>
          </div>
          <div className="flex flex-col gap-3">
            <div className="">
            Follow Us On:
            </div>
            <div className="flex gap-4">
            <FaFacebookF className='w-6 h-6 hover:text-primary cursor-pointer transition-all transform hover:scale-105 duration-300' />
            <FiYoutube className='w-6 h-6 hover:text-primary cursor-pointer transition-all transform hover:scale-105 duration-300' />
            <FiTwitter className='w-6 h-6 hover:text-primary cursor-pointer transition-all transform hover:scale-105 duration-300' />
            <FiLinkedin className='w-6 h-6 hover:text-primary cursor-pointer transition-all transform hover:scale-105 duration-300' />
            </div>
          </div>
        </div>
        <div className="max-mobile:pt-10 w-full">
          {/* <div className="w-full h-[507px]">
            <img src="/img/hero.jpg" className='h-[507px] w-full object-center object-cover' alt="" />
          </div> */}
          <StackedCards />
        </div>
      </div>
    </div>
  )
}
