import React from 'react'
import { WhatWeDo } from '@/wwd'
import Link from 'next/link'
export default function StrategicPlanning() {
  return (
    <div className="px-[120px] max-mobile:px-6 py-24 flex flex-col">
        <div className="text-primary pb-3">
        What We Do
        </div>
        <div className="grid grid-cols-3 max-mobile:grid-cols-1 gap-10">
            <div className="flex flex-col gap-8 max-mobile:pb-8">
                
                <div className="text-h1 text-black">
                Market Insights and Analysis.
                </div>
                <div className=" text-base text-dark-grey font-normal">
                Help businesses improve their operations, achieve their goals, and stay competitive in today's.
                </div>
            </div>
            <>
            {
                WhatWeDo.map((wwd, i)=>(
            <Link href={`/what-we-do/${wwd.slug}`} className="flex flex-col gap-8 bg-primary/80 hover:bg-white hover:border-primary hover:border-2 hover:text-primary rounded-lg text-[#fff] transition-all transform duration-500 hover:scale-105 items-center justify-center cursor-pointer" key={i}>
                <div className="flex flex-col gap-3 p-5 items-center justify-center text-center">
                    <div className="">
                        <wwd.icon className=' w-14 h-14' />
                    </div>
                <div className="text-h4">
                    {wwd.title}
                </div>
                </div>
                    {/* <div className="text-base font-normal text-dark-grey">
                        {wwd.description.slice(0,135)}
                        </div> */}
                        </Link>

                ))
            }
            </>
            <div className="flex flex-col gap-8"></div>
        </div>
        <div className=""></div>
    </div>
  )
}
