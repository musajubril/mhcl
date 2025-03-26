import React from "react";
import { Button } from "../ui/button";

export default function HomeAboutUs() {
  const values = [
    {letter: "H", details: "High Ethical Standards"},
    {letter: "I", details: "Integrity"},
    {letter: "L", details: "Lifelong Client's Loyalty"},
    {letter: "L", details: "Leadership through learning for our talents"},
    {letter: "S", details: "Sustainability drives in all our dealing with our valuable clients"},
  ]
  return (
    <div className=" py-24 ">
      <div className="flex max-mobile:flex-col max-mobile:gap-[50px] gap-[156.41px]">
        <div className="relative flex items-center justify-center w-[453.59px] max-mobile:w-full">
          <div className="relative w-[355px] h-[507px]">
            <div className="absolute  w-[355px] h-[507px] inset-0 transform translate-y-[23.05px] -translate-x-[25.93px] bg-primary/20 rounded-2xl shadow-lg z-0">
              <div className="w-full h-full flex items-center justify-center">
                <h3 className="text-lg font-semibold">Third Card</h3>
              </div>
            </div>
            <div className="relative w-[355px] h-[507px] rounded-2xl overflow-hidden shadow-lg z-10">
              <img
                src="/img/hau.jpg"
                alt="Top Image"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col max-mobile:max-w-full max-mobile:w-full">
            <div className="pb-3 text-primary">
                About us
            </div>
            <div className="text-black text-h1">
                Your Trusted Advisors in <span className="text-primary">
                     Business Success
                    </span>
            </div>
            <div className="text-md flex flex-col text-dark-grey py-8">
                <div className="">
                we understand the challenges and complexities that businesses face in today's dynamic marketplace. That's why we offer a comprehensive suite of consulting services.
                </div>
                <div className="">
                Founded on the principles of innovation, integrity, and excellence, we are a team of  seasoned professionals.
                </div>
            </div>
            <div className="flex justify-start pb-10">
                <Button className="uppercase">
                    Read More
                </Button>
            </div>
            <div className="py-4 grid grid-cols-2 max-mobile:grid-cols-1 gap-8">
              <div className="">
              <div className="text-black text-h2">
                Vision
              </div>
              <div className="text-medium text-dark-grey">
                To become an unrivaled choice for clients in their quest for excellence add to talent, a place for career fulfillment
              </div>
              </div>
              <div className="">
              <div className="text-black text-h2">
                Core Values
              </div>
              <div className="text-medium text-dark-grey flex flex-col gap-2">
                  {
                    values.map((val, i) => (
                      <div key={i}>
                        <div className="flex items-center gap-2">
                          <div className="text-black font-bold">{val.letter}</div>
                          <div className="">-</div>
                          <div className="text-sm">{val.details}</div>
                        </div>
                      </div>
                    ))
                  }
              </div>
              </div>
            </div>
            <div className="pt-4 border-t w-full grid grid-cols-3 max-mobile:grid-cols-1 gap-[34px] text-center">
                <div className="flex flex-col gap-1">
                    <div className="text-black text-h1">500+</div>
                    <div className="text-medium text-dark-grey">Satisfied Customers</div>
                </div>
                <div className="flex flex-col gap-1">
                    <div className="text-black text-h1">10+</div>
                    <div className="text-medium text-dark-grey">Years Experience</div>
                </div>
                <div className="flex flex-col gap-1">
                    <div className="text-black text-h1">40+</div>
                    <div className="text-medium text-dark-grey">Projects Completed</div>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
}
