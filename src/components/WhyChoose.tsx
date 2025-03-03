import React from 'react'
import { FaCheckCircle } from "react-icons/fa";

export default function WhyChoose() {
  const wcu = [
    "Engineering design",
    "Project Management",
    "Testing and commissioning of storage, handling, system support and operational infrastructures",
    "bulk storage system facilities management",
    "technical competence support",
    "professional services on health, safety and environment",
    "Business & transaction advisory",
    "consultancy & equipment supplies",
    "private jet charter services (Mangrove's fly class)"
  ]
  return (
    <div className="px-[120px] max-mobile:px-6 py-24 ">
    <div className="flex max-mobile:flex-col-reverse flex-row-reverse max-mobile:gap-[50px] gap-[156.41px]">
      <div className="relative flex items-center justify-center w-[453.59px] max-mobile:w-full">
        <div className="relative w-[355px] h-[507px]">
          <div className="absolute  w-[355px] h-[507px] inset-0 transform translate-y-[23.05px] -translate-x-[25.93px] bg-primary/20 rounded-2xl shadow-lg z-0">
            <div className="w-full h-full flex items-center justify-center">
              <h3 className="text-lg font-semibold">Third Card</h3>
            </div>
          </div>
          <div className="relative w-[355px] h-[507px] rounded-2xl overflow-hidden shadow-lg z-10">
            <img
              src="/img/wwd.jpg"
              alt="Top Image"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
      <div className="flex flex-col max-mobile:max-w-full max-mobile:w-full">
          <div className="pb-3 text-primary">
              Why Choose Us
          </div>
          <div className="text-black text-h1">
              Why Choose <span className="text-primary">
                   MHCL
                  </span>
          </div>
          <div className="text-md flex flex-col text-dark-grey py-8">
              <div className="">
              We provide specialized support in development of standards, operations and competence tailored to the specific requirements of your company, leveraging our intensive and extensive global experience in the management and auditing of aviation programs. Our services are designed to effectively mitigat risks and enhance safety. Our comprehensive consultancy offerings encompass:
              </div>
          </div>
          <div className="text-medium text-dark-grey grid grid-cols-2 max-mobile:grid-cols-1 gap-2">
                {
                  wcu.map((val, i) => (
                    <div key={i}>
                      <div className="flex items-center gap-5">
                        <div className="text-primary font-bold">
                          <FaCheckCircle size={24} className="text-primary"/>
                        </div>
                        <div className="text-sm">{val}</div>
                      </div>
                    </div>
                  ))
                }
            </div>
      </div>
    </div>
  </div>
  )
}
