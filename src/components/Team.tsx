"use client"
import React from 'react'
import { Button } from './ui/button'
import TeamData from '@/team_data'
import { FiLinkedin, FiTwitter, FiYoutube } from "react-icons/fi"
import { FaFacebookF } from 'react-icons/fa'


export default function Team() {
  return (
    <div className="px-[120px] max-mobile:px-6 py-24 flex flex-col">
        <div className="text-primary pb-3">
        Our Team
        </div>
        <div className="grid grid-cols-3 max-mobile:grid-cols-1 gap-10">
            <div className="flex flex-col gap-8 max-mobile:pb-8">
                
                <div className="text-h1 text-black">
                Meet Our <span className='text-primary'>Smart People</span>.
                </div>
                <div className=" text-base text-dark-grey font-normal">
                With a diverse range of expertise and commitment to excellence, our team is dedicated to delivering innovative marketing solutions that drive result Get to know the individuals behind our success.
                </div>
                <div className="flex">
                <Button variant='outline' className='text-primary border-primary hover:bg-primary hover:text-white transition-all duration-500'>
                    View All
                </Button>
                </div>
            </div>
            <>
            {
                TeamData.slice(0,5).map((person, i)=>(
            <div className="flex flex-col gap-[21px]  transition-all duration-500" key={i}>
                    <div className="">
                        <img className=' w-full h-[385px] max-w-[386px] max-mobile:max-w-full object-center object-cover rounded-2xl' src={`https://placehold.co/386x385`} />
                    </div>
                    <div className="flex items-center justify-between">
                        <div className="flex flex-col gap-3">
                <div className="text-h5">
                    {person.name} <span className='ml-2 text-xs'>{person.certificates}</span>
                </div>
                <div className="text-primary text-base capitalize">
                    {person.position}
                </div>
                        </div>
                        {/* <div className="">
                             <div className="flex gap-4">
                                                    <FaFacebookF className='w-6 h-6 hover:text-primary cursor-pointer transition-all transform hover:scale-105 duration-300' />
                                                    <FiYoutube className='w-6 h-6 hover:text-primary cursor-pointer transition-all transform hover:scale-105 duration-300' />
                                                    <FiTwitter className='w-6 h-6 hover:text-primary cursor-pointer transition-all transform hover:scale-105 duration-300' />
                                                    <FiLinkedin className='w-6 h-6 hover:text-primary cursor-pointer transition-all transform hover:scale-105 duration-300' />
                                                    </div>
                        </div> */}
                    </div>
                    {/* <div className="text-base font-normal text-dark-grey">
                        {wwd.description.slice(0,135)}
                        </div> */}
                        </div>

                ))
            }
            </>
        </div>
    </div>
  )
}
