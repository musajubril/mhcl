"use client"
import React from 'react'
import { usePathname } from 'next/navigation'

export default function PathName() {
     const pathname = usePathname();
  return (
    <div className="text-md">
        Home{pathname}
        </div>
  )
}
