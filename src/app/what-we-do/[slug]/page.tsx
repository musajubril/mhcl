import { WhatWeDo } from '@/wwd';
import Link from 'next/link';
import React from 'react'
import { LiaExternalLinkAltSolid } from "react-icons/lia";

interface PageProps {
    params: { slug: string };
  }
export default function page({ params }: PageProps) {
    const slugData = WhatWeDo.find(_=> _.slug===params.slug)
    console.log(slugData)
  return (
    <div className='px-[120px] max-mobile:px-6 pb-24'>
         {/* <h1 className="text-2xl font-bold">Page: {slugData?.title}</h1>
         <p>This is the content for the slug: {slugData?.description}</p> */}
         <div className="grid grid-cols-3 max-mobile:grid-cols-1 gap-8">
            <div className="col-span-2 max-mobile:col-span-1 flex flex-col gap-8">
                <div className="w-full">
                    <img src={slugData?.img} alt="" className='object-center object-cover h-[535px] rounded-3xl w-full' />
                </div>
                <div className="text-h1 max-mobile:text-h2">
                    {slugData?.title}
                </div>
                <div className="text-base font-normal">
                    {slugData?.description}
                </div>
            </div>
            <div className="col-span-1 flex flex-col gap-8">
                <div className="pr-6 pl-8 py-12 shadow gap-10 flex flex-col rounded-2xl">
                    <div className="text-h3">Other Services</div>
                    <div className="flex flex-col gap-8 text-lg">
                        {WhatWeDo.filter(item=>item.slug!==params.slug).map(item=>(
                            <Link href={`/what-we-do/${item.slug}`} key={item.slug} className='border-b border-black flex items-center gap-2 justify-between hover:text-primary hover:border-primary transition-all duration-500'>
                                    <div>{item.title}</div>
                                <div className="">
                                <LiaExternalLinkAltSolid className='h-6 w-6' />
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
                <div className=""></div>
                <div className=""></div>
            </div>
         </div>
    </div>
  )
}
