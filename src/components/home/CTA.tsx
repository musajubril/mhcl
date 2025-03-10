import React from 'react'

export default function CTA() {
  return (
    <div className="px-[120px] max-mobile:px-6 pb-24">
    <div className='bg-no-repeat bg-center bg-cover rounded-[10px]' style={{
      backgroundImage: `url(/img/cta.jpg)`
    }}>
            <div className="h-full w-full bg-black/30  py-[60px] lg:px-[137px] rounded-[10px] flex flex-col justify-center items-center text-white gap-[30px] ">
                <div className="font-bold lg:text-[32px] lg:leading-[50px] text-2xl text-center">
                Request a Customized Solution for Your Business!
                </div>
                <div className="text-medium text-center">
                Every business is unique. Request a tailored solution crafted specifically for your  organization's challenges and goals.
                </div>
                <div className="flex items-center">
                    <a href='mailto:Info@mangrovehills.com' className="py-[9px] px-[18px] bg-primary rounded-[5px]">Get In Touch</a>
                </div>
            </div>
      </div>
    </div>
  )
}
