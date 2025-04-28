"use client"
import React from 'react'
import { FaLinkedinIn, FaInstagram, FaFacebookF, FaTwitter } from 'react-icons/fa6'
import { FiPhoneCall } from 'react-icons/fi'
import { GrMail } from "react-icons/gr";
import { IoLocation } from "react-icons/io5";
import { Input } from './ui/input';

export default function Contact() {
    const [state, setState] = React.useState({
        email: "",
        message: "",
        phone: "",
        name: "",
        sent: false
      })
      const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setState({
          ...state,
          [e.target.id]: e.target.value
        })
      }
      const handleMessage = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setState({
          ...state,
          message: e.target.value
        })
      }
  return (
    <form className="py-24 flex flex-col">
        <div className="text-primary pb-3">Contact Us</div>
        <div className="grid grid-cols-2 max-mobile:grid-cols-1 gap-[60px]">
            <div className="">
                <img src="/img/contact.jpg" alt="" className='h-[527px] w-full object-center object-cover' />
            </div>
            <div className="">
            <div className="rounded-[10px] lg:col-span-2 p-[30px]">
        <div className="flex flex-col gap-5 pb-[30px]">
          {[
            {type: 'text', id: 'name', placeholder: 'Name'},
            {type: 'email', id: 'email', placeholder: 'Email'},
            {type: 'number', id: 'phone', placeholder: 'Phone Number'},
          ].map((inp) => (
            <Input
            key={inp.id}
            onChange={handleChange}
              type={inp.type}
              className="h-[50px] rounded-[10px] p-[15px] placeholder-[#252525] text-[#252525] bg-[#f7f7f7] focus-within:border-[#0e1f51] focus:border-[#0e1f51] active:border-[#0e1f51]"
              placeholder={inp.placeholder}
              id={inp.id}
            />
          ))}
          <textarea
          onChange={handleMessage}
          id="message"
            className="h-[150px] rounded-[10px] p-[15px] placeholder-[#252525] text-[#252525] bg-[#f7f7f7] focus-within:border-[#0e1f51] focus:border-[#0e1f51] active:border-[#0e1f51]"
            placeholder="Your Message"
          />
        </div>
        <div className="flex w-full justify-start">
          <a href={`mailto:Info@eagleviewltd.com?subject=New Message from ${state.name}&body=${state.email} ${state.phone} ${state.message}`} className="bg-primary rounded-[5px] py-3 px-6 text-white cursor-pointer font-medium text-base">
            Send Now
          </a>
        </div>
      </div>
            </div>
        </div>
    {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[30px] w-full">
      <div className="bg-white rounded-[10px] lg:col-span-2 p-[30px]">
        <div className="flex flex-col gap-5 pb-[30px]">
          {[
            {type: 'text', id: 'name', placeholder: 'Name'},
            {type: 'email', id: 'email', placeholder: 'Email'},
            {type: 'number', id: 'phone', placeholder: 'Phone Number'},
          ].map((inp) => (
            <Input
            onChange={handleChange}
              type={inp.type}
              className="h-[50px] rounded-[10px] p-[15px] placeholder-[#252525] text-black border"
              placeholder={inp.placeholder}
              id={inp.id}
            />
          ))}
          <textarea
          onChange={handleMessage}
          id="message"
            className="h-[150px] rounded-[10px] p-[15px] placeholder-[#252525] text-[#252525] bg-[#f7f7f7] focus-within:border-[#0e1f51] focus:border-[#0e1f51] active:border-[#0e1f51]"
            placeholder="Your Message"
          />
        </div>
        <div className="flex w-full justify-start">
          <a href={`mailto:Info@eagleviewltd.com?subject=New Message from ${state.name}&body=${state.email} ${state.phone} ${state.message}`} className="bg-primary rounded-[5px] py-3 px-6 text-white cursor-pointer font-medium text-base">
            Send Now
          </a>
        </div>
      </div>
      <div className="bg-white rounded-[10px] p-[30px] flex flex-col gap-[50px]">
        <div className="flex flex-col gap-[30px]">
          {[
            {
              icon: FiPhoneCall,
              title: "Call Anytime",
              top: "+ 234 807 7775 059",
              bottom: "+ 234 802 1001 755",
            },
            {
              icon: GrMail,
              title: "Send Email",
              top: "Info@eagleviewltd.com",
              bottom: "",
            },
            {
              icon: IoLocation,
              title: "Visit Us",
              top: "Address- 67, Old Abeouka ",
              bottom: "motor road , Agege Lagos",
            },
          ].map((it, i) => (
            <div className="flex gap-[15px] w-full" key={i}>
              <div className="p-5 bg-[#f7f7f7] text-primary rounded-[10px]">
                <it.icon className="h-[30px] w-[30px]" />
              </div>
                <div className="flex flex-col gap-[10px] w-full">
                  <div className="font-extrabold text-primary text-xl">{it.title}</div>
                  <div className="flex flex-col gap-[2px] text-[#0E1F51] text-base font-medium w-full break-all">
                    <div className="">{it.top}</div>
                    <div className="">{it.bottom}</div>
                  </div>
                </div>
            </div>
          ))}
        </div>
        <div className="flex flex-col gap-[30px]">
          <div className="text-center text-[#0e1f51] font-bold text-2xl">Follow Us</div>
        <div className="flex justify-between">
        <a href="https://www.linkedin.com/in/eagle-view-technology-limited-3992ba266" target="_blank" rel="noreferrer" className="flex items-center justify-center h-[60px] w-[60px] bg-primary rounded-[10px] text-white"><FaLinkedinIn className='h-5 w-5' /></a>
              <a href="https://www.instagram.com/eagleviewtechng/" target="_blank" rel="noreferrer" className="flex items-center justify-center h-[60px] w-[60px] bg-primary rounded-[10px] text-white" ><FaInstagram className='h-5 w-5' /></a>
              <a href="https://www.facebook.com/profile.php?id=100089945092671&mibextid=ZbWKwL" target="_blank" rel="noreferrer" className="flex items-center justify-center h-[60px] w-[60px] bg-primary rounded-[10px] text-white"><FaFacebookF className='h-5 w-5' /></a>
              <a href="https://twitter.com/EagleView_Tech/status/1628979356440616960?t=xaPsWT3KMaVtILXKG0Z5bQ&s=19"  target="_blank" rel="noreferrer" className="flex items-center justify-center h-[60px] w-[60px] bg-primary rounded-[10px] text-white"><FaTwitter className='h-5 w-5' /></a>
          </div>
        </div>
      </div>
    </div> */}
  </form>
  )
}
