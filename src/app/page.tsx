"use client"
import Contact from "@/components/Contact";
import CTA from "@/components/home/CTA";
import Hero from "@/components/home/Hero";
import HomeAboutUs from "@/components/home/HomeAboutUs";
import PartnersAndClients from "@/components/home/PartnersAndClients";
import StrategicPlanning from "@/components/home/StrategicPlanning";
import WhatWeDo from "@/components/home/WhatWeDo";
import Navbar from "@/components/shared/Navbar";
import Team from "@/components/Team";
import WhyChoose from "@/components/WhyChoose";
import Image from "next/image";

export default function Home() {
  return (
    <div className="">
      
      <Hero />
      <div className="px-[120px] max-mobile:px-6 py-24 flex flex-col">
      <PartnersAndClients />
      {/* <WhatWeDo /> */}
      <HomeAboutUs />
      <StrategicPlanning />
      <Team />
      <CTA />
      <WhyChoose />
      <Contact />
      </div>

      {/* <div className="py-8 w-full flex justify-center gap-12">
        <img src="/img/partners/aero.png" className="h-[46.32px]" alt="" />
        <img src="/img/partners/barka.png" className="h-[46.32px]" alt="" />
        <img src="/img/partners/cjg.webp" className="h-[46.32px]" alt="" />
      </div> */}
    </div>
  );
}
