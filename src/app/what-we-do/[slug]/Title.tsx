"use client"
import React from 'react'
import { usePathname } from 'next/navigation'
import { WhatWeDo } from '@/wwd'

export default function Title() {
    const pathname = usePathname()
    const slug = pathname.split("/").pop();
    
    const slugData = WhatWeDo.find(_=> _.slug===slug)
        console.log(slugData, slug)
  return (
    <div className="text-d1 max-mobile:text-h1 max-mobile:w-dvw text-wrap">
            {slugData?.title}
            </div>
  )
}
