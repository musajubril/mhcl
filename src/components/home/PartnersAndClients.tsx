import React from 'react'
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
  } from "@/components/ui/carousel"
  import Autoplay from "embla-carousel-autoplay"
  
export default function PartnersAndClients() {
    const partners = ['/img/partners/barka.png', "/img/partners/aero.png", "/img/partners/cjg.webp"]
    const clients = ['/img/clients/i (1).jpg', "/img/clients/i (1).png", "/img/clients/i (2).png", "/img/clients/i (3).png", "/img/clients/i (4).png", "/img/clients/i (5).png"]
    const plugin = React.useRef(
        Autoplay({ delay: 4000, stopOnInteraction: false })
      )
  return (
    <div className='py-[60px] max-mobile:py-20 flex-col flex gap-10'>
        <div className="text-base text-primary text-center">Partners and Clients</div>
        <Carousel
      opts={{
        align: "start",
      }}
      plugins={[plugin.current]}
      className="w-full max-mobile:px-6 "
    >
      <CarouselContent>
        {[clients[1], partners[0], partners[1], partners[2], clients[4], clients[3]].map((_, index) => (
          <CarouselItem key={index} className="md:basis-1/3 lg:basis-1/4 xl:basis-1/5">
              <img src={_} alt="" className='rounded-[20px]' />
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
        {/* <div className="grid grid-cols-6 max-mobile:grid-cols-2 gap-[45px]">
            {[clients[1], partners[0], partners[1], partners[2], clients[4], clients[3]].map(client => <img src={client} key={client} className='h-[46.32px]' />)}
        </div> */}
    </div>
  )
}
