
import { WhatWeDo } from '@/wwd';
import React from 'react'
import PathName from './PathName';
import Title from './Title';


interface paramsProps { slug: string };
export default function layout({ children }: { children: React.ReactNode}) {
   
  return (
    
      <div className="flex flex-col">
    <div className='bg-no-repeat bg-center bg-cover rounded-[10px] h-[450px] max-mobile:block hidden' style={{
        backgroundImage: `url(/img/wwd.jpg)`
      }}>
        <div className="h-full w-full bg-[#034833]/80  py-[60px] lg:px-[137px] flex flex-col justify-center items-center text-white gap-[30px] text-center max-mobile:px-6">
        <Title />
        <PathName />
        </div>
        </div>
        <div className="pt-24">
        {children}
        </div>
    </div>
  )
}
