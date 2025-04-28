"use client"
/* eslint-disable jsx-a11y/anchor-is-valid */
import { FaLinkedinIn, FaInstagram, FaFacebookF, FaTwitter } from "react-icons/fa"
import { AiFillMail, AiFillPhone } from "react-icons/ai"
import { IoLogoWhatsapp, IoMdTimer } from "react-icons/io"
import { GoLocation } from "react-icons/go"
import { BsCalendar2Day } from "react-icons/bs"
import { FiLinkedin, FiTwitter, FiYoutube } from "react-icons/fi"
import { WhatWeDo } from "@/wwd"
import Link from "next/link"
const RedPill = () => (
    <div className="h-[5px] w-[50px] rounded-[5px] bg-primary mt-[20px] mb-[30px]"></div>
)
export default function Footer() {
  return (
    <div className='bottom-0 py-[100px] lg:px-[150px] px-6 bg-white text-black flex flex-col'>
    <div className='grid md:grid-cols-2 xl:grid-cols-4 gap-5 '>
        <div className="flex flex-col">
            <div className="font-bold text-2xl">About Us</div>
            <RedPill />
            <div className=" text-base font-medium lg:max-w-[260px] mb-[74px]">
            Your Trusted Advisors in Business Success
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
        <div className="flex flex-col">
            <div className="font-bold text-2xl">Services</div>
            <RedPill />
            <div className="flex flex-col gap-5">
                {
                    WhatWeDo.map((it, i)=>(
                        <Link href={`/what-we-do/${it.slug}`} key={i} className="text-sm font-medium capitalize hover:text-primary hover:border-primary hover:border-b transition-all duration-500">{it.title}</Link>
                    ))
                }
            </div>
        </div>
        <div className="flex flex-col  text-sm">
            <div className="font-bold text-2xl">Company</div>
            <RedPill />
            <div className="flex flex-col items-start gap-4">
                <a href="mailto:Info@mangrovehills.com" target="_blank" className="flex items-center gap-4" rel="noreferrer">
                    <AiFillMail className='h-5 w-5' />
                    <div className="cursor-pointer" >Info@mangrovehills.com</div>
                </a>
                <div className="flex items-center gap-4">
                    <GoLocation className='h-5 w-5 ' />
                    <div className="">Suite 440, Ikeja plaza, 81 Mobolaji bank Anthony way, Ikeja, Lagos</div>
                </div>
                <a href={`https://wa.me/${'+2347025359031'}`} target="_blank" className="flex items-center gap-4" rel="noreferrer">
                    <IoLogoWhatsapp className='h-5 w-5' />
                    <div className="">+2347025359031</div>
                </a>
                <a href="tel:+2348037737393" className="flex items-center gap-4">
                    <AiFillPhone className='h-5 w-5' />
                    <div className="">+2348037737393</div>
                </a>
                <div className="flex items-center gap-4">
                    <BsCalendar2Day className='h-5 w-5' />
                    <div className="">Available Mondays to Fridays</div>
                </div>
                <div className="flex items-center gap-4">
                    <IoMdTimer className='h-5 w-5' />
                    <div className=""> 8am to 5pm</div>
                </div>
            </div>
        </div>
        <div className="flex flex-col">
            <div className="font-bold text-2xl">Subscribe</div>
            <RedPill />
            <div className="font-medium text-md lg:max-w-[260px] mb-[30px]">
                Be the first to find out about our new products and services
            </div>
            <input type="email" className='h-[50px] rounded-[10px] pl-6 placeholder-black' placeholder='Email Address' />
            <div className="w-full flex justify-end mt-5">
                <a href="mailto:Info@mangrovehills.com" className="rounded-[10px] py-2 px-4 bg-primary text-white">
                    Submit
                </a>
            </div>
        </div>
    </div>
    <p className="mt-8 text-base text-center">&copy; {new Date().getFullYear()} Mangrove Hills Consulting Limited. All rights reserved.</p>
    </div>
  )
}
