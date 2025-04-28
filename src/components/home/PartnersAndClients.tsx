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
    const partners = ['/img/partners/i1.png', "/img/partners/i2.png", "/img/partners/i3.png", "/img/partners/i4.png", "/img/partners/i5.png", "/img/partners/i6.png", "/img/partners/i7.png"]
    const clients = ['/img/clients/i (1).jpg', "/img/clients/i1.png", "/img/clients/i2.png", "/img/clients/i3.png", "/img/clients/i4.png", "/img/clients/i6.png", "/img/clients/i7.png", "/img/clients/i8.png", "/img/clients/i9.png", "/img/clients/i10.png", "/img/clients/i11.png", "/img/clients/i12.png", "/img/clients/i13.png", "/img/clients/i14.png", "/img/clients/i15.png", "/img/clients/i16.png", "/img/clients/i17.png", "/img/clients/i18.png", "/img/clients/i19.png", "/img/clients/i20.png"]
    const plugin = React.useRef(
        Autoplay({ delay: 4000, stopOnInteraction: false })
      )
  return (
    <div className='py-[60px] max-mobile:py-20 flex-col flex gap-10'>
      <div className="">
        <div className="text-black text-h1 pb-3">Partners</div>
        <Carousel
      opts={{
        align: "start",
      }}
      plugins={[plugin.current]}
      className="w-full max-mobile:px-6 "
      >
      <CarouselContent>
        {partners.map((_, index) => (
          <CarouselItem key={index} className="md:basis-1/3 lg:basis-1/4 xl:basis-1/5">
              <img src={_} alt="" className='rounded-[20px]' />
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
            </div>
      <div className="">
        <div className="text-black text-h1 pb-3">Clients</div>
        <Carousel
      opts={{
        align: "start",
      }}
      plugins={[plugin.current]}
      className="w-full max-mobile:px-6 "
      >
      <CarouselContent>
        {clients.map((_, index) => (
          <CarouselItem key={index} className="md:basis-1/3 lg:basis-1/4 xl:basis-1/5">
              <img src={_} alt="" className='rounded-[20px] object-center' />
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
            </div>
    </div>
  )
}
