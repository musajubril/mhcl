"use client";
import TeamData from "@/team_data";
import React from "react";

export default function page() {
  return (
    <div className="flex flex-col">
      <div
        className="bg-no-repeat bg-center bg-cover rounded-[10px] h-[450px]"
        style={{
          backgroundImage: `url(/img/wwd.jpg)`,
        }}
      >
        <div className="h-full w-full bg-[#034833]/80  py-[60px] lg:px-[137px] flex flex-col justify-center items-center text-white gap-[30px] text-center max-mobile:px-6">
          <div className="text-d1 max-mobile:text-h1 max-mobile:w-dvw text-wrap">
            Our Team
          </div>
          <div className="text-md">Home / Team</div>
        </div>
      </div>
      <div className="pt-24">
        <div className="px-[120px] max-mobile:px-6 py-24 flex flex-col">
          <div className="flex flex-col gap-3 text-center">
            <div className="text-primary text-base font-normal">Our Team</div>
            <div className="text-h1 text-black">
              Meet Our <span className="text-primary">Smart People</span>.
            </div>
          </div>
          <div className=" text-base text-dark-grey font-normal py-8 text-center max-mobile:max-w-full max-w-[986px] mx-auto">
            With a diverse range of expertise and commitment to excellence, our
            team is dedicated to delivering innovative marketing solutions that
            drive result Get to know the individuals behind our success.
          </div>
          <div className="grid grid-cols-3 max-mobile:grid-cols-1 gap-10">
            {TeamData.map((person, i) => (
              <div
                className="flex flex-col gap-[21px]  transition-all duration-500"
                key={i}
              >
                <div className="">
                  <img
                    className=" w-full h-[385px] max-w-[386px] max-mobile:max-w-full object-center object-cover rounded-2xl"
                    src={`https://placehold.co/386x385`}
                  />
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex flex-col gap-3">
                    <div className="text-h5">
                      {person.name}{" "}
                      <span className="ml-2 text-xs">
                        {person.certificates}
                      </span>
                    </div>
                    <div className="text-primary text-base capitalize">
                      {person.position}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
