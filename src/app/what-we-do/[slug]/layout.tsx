
import { WhatWeDo } from '@/wwd';
import React from 'react'
import PathName from './PathName';


interface paramsProps { slug: string };
export default function layout({ children, params }: { children: React.ReactNode, params: { slug: string }}) {
   
    const slugData = WhatWeDo.find(_=> _.slug===params.slug)
        console.log(slugData)
  return (
    
      <div className="flex flex-col">
    <div className='bg-no-repeat bg-center bg-cover rounded-[10px] h-[450px] max-mobile:block hidden' style={{
        backgroundImage: `url(/img/wwd.jpg)`
      }}>
        <div className="h-full w-full bg-[#034833]/80  py-[60px] lg:px-[137px] flex flex-col justify-center items-center text-white gap-[30px] text-center max-mobile:px-6">
        <div className="text-d1 max-mobile:text-h1 max-mobile:w-dvw text-wrap">
        {slugData?.title}
        </div>
        <PathName />
        </div>
        </div>
        <div className="pt-24">
        {children}
        </div>
    </div>
  )
}
