import React from 'react'

export default function PartnersAndClients() {
    const partners = ['/img/partners/barka.png', "/img/partners/aero.png", "/img/partners/cjg.webp"]
    const clients = ['/img/clients/i (1).jpg', "/img/clients/i (1).png", "/img/clients/i (2).png", "/img/clients/i (3).png", "/img/clients/i (4).png", "/img/clients/i (5).png"]
  return (
    <div className='px-[120px] py-[60px] max-mobile:px-6 max-mobile:py-20 flex-col flex gap-10'>
        <div className="text-base text-primary text-center">Partners and Clients</div>
        <div className="grid grid-cols-6 max-mobile:grid-cols-2 gap-[45px]">
            {[clients[1], partners[0], partners[1], partners[2], clients[4], clients[3]].map(client => <img src={client} key={client} className='h-[46.32px]' />)}
        {/* <div className="flex flex-col gap-5">
            <div className="text-h1">
                Clients:
            </div>
            <div className="col-span-2 flex flex-wrap max-mobile:col-span-1  max-mobile:grid gap-5  max-mobile:grid-cols-2">
                {clients.map(client => <img src={client} key={client} className='h-[46.32px]' />)}
            </div>
        </div>
        <div className="flex flex-col gap-5">
            <div className="col-span-1 text-h1">
                Partners:
            </div>
            <div className="col-span-2 flex flex-wrap max-mobile:col-span-1  max-mobile:grid gap-5  max-mobile:grid-cols-2">
                {partners.map(partner => <img src={partner} key={partner} className='h-[46.32px]' />)}
            </div>
        </div> */}
        </div>
    </div>
  )
}
