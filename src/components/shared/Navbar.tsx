"use client";
import React from "react";
import { useState } from "react";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "../ui/dialog";
import { DialogTrigger } from "../ui/dialog";
import { Copy } from "lucide-react";
// import { Input } from 'postcss'
import { FaBars } from "react-icons/fa6";
import { Button } from "../ui/button";
import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "../ui/navigation-menu";
import { UrlObject } from "url";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { WhatWeDo } from "@/wwd";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navigation = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about-us" },
    { name: "Services and Products", href: "/" },
    { name: "Careers", href: "/careers" },
  ];
  const subMenu = [
    { name: "Advisory", href: "/" },
    { name: "Consultancy", href: "/" },
    { name: "Training & Development", href: "/" },
    { name: "Energy & Natural Resources", href: "/" },
    { name: "Infrastructure", href: "/" },
    { name: "Procurement", href: "/" },
    { name: "Investment & trading", href: "/" },
  ];
  const logo = "/img/logo/full_logo.png";
  return (
    <div className="py-4 px-[120px] max-mobile:px-6 flex justify-between">
      <div className="">
        <div className="text-start flex gap-2 items-center">
          <img src={logo} className="h-10" alt="" />
        </div>
      </div>
      <div className="max-mobile:hidden flex gap-12 items-center">
        <div className="flex gap-6">
          {navigation.map((item) => (
            <div key={item.name}>
              {item.name !== "Services and Products" ? (
                <Link
                  href={item.href}
                  className="text-sm font-medium text-gray-900 hover:text-primary hover:border-b hover:border-primary transition-all duration-300 hover:font-semibold"
                >
                  {item.name}
                </Link>
              ) : (
                <div className="relative">
                  <ServicesAndProducts subMenu={subMenu} item={item} />
                </div>
              )}
            </div>
          ))}
        </div>
        <div className="">
          <Button>
            <Link href={"/contact-us"}>Contact Us</Link>
          </Button>
        </div>
      </div>
      <div className="hidden max-mobile:flex">
        <MobileMenu navigation={navigation} logo={logo} subMenu={subMenu} />
      </div>
    </div>
  );
}

const MobileMenu = ({ navigation, logo, subMenu }: any) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <FaBars />
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-dvw p-3">
        {navigation.map(
          (
            nav: {
              href: string;
              name:
                | string
                | number
                | bigint
                | boolean
                | React.ReactElement<
                    unknown,
                    string | React.JSXElementConstructor<any>
                  >
                | Iterable<React.ReactNode>
                | React.ReactPortal
                | Promise<
                    | string
                    | number
                    | bigint
                    | boolean
                    | React.ReactPortal
                    | React.ReactElement<
                        unknown,
                        string | React.JSXElementConstructor<any>
                      >
                    | Iterable<React.ReactNode>
                    | null
                    | undefined
                  >
                | null
                | undefined;
            },
            i: React.Key | null | undefined
          ) => (
            <DropdownMenuItem key={i}>
              <div className="p-2">
                {nav.name !== "Services and Products" ? (
                  <Link href={nav.href} key={i}>
                    {nav.name}
                  </Link>
                ) : (
                  <div
                    className="relative"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <ServicesAndProducts subMenu={subMenu} item={nav} />
                  </div>
                )}
              </div>
            </DropdownMenuItem>
          )
        )}
      </DropdownMenuContent>
    </DropdownMenu>

    //     <Dialog>
    //   <DialogTrigger asChild>
    //     <FaBars />
    //   </DialogTrigger>
    //   <DialogContent className="sm:max-w-md h-[50dvh] justify-start !top-[1%] !translate-y-[-1%] flex flex-col !gap-5">
    //     <DialogHeader className='flex justify-start items-start'>
    //       <DialogTitle className='text-start flex gap-2 items-center'>
    //       <img src={logo} className='h-10' alt="" />
    //         </DialogTitle>
    //     </DialogHeader>
    //     <div className="flex items-center space-x-2">
    //       <div className="grid flex-1 gap-2">
    //         {
    //             navigation.map((nav: { href: string; name: string | number | bigint | boolean | React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | Promise<string | number | bigint | boolean | React.ReactPortal | React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | null | undefined> | null | undefined }, i: React.Key | null | undefined)=>(
    //                 <div className="p-2" key={i}>
    //                   {
    //         nav.name !== "Services and Products" ?
    //         <Link href={nav.href} key={i}>{nav.name}</Link>
    //        :
    //         <ServicesAndProducts subMenu={subMenu} item={nav} />
    //       }
    //                 </div>
    //             ))
    //         }
    //       </div>
    //     </div>
    //   </DialogContent>
    // </Dialog>
  );
};

const ServicesAndProducts = ({
  subMenu,
  item,
}: {
  subMenu: any;
  item: any;
}) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <div className="text-sm font-medium text-gray-900 hover:text-primary hover:border-b hover:border-primary transition-all duration-300 hover:font-semibold">
          {item.name}
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="">
        {WhatWeDo.map((menu, i: React.Key | null | undefined) => (
          <DropdownMenuItem key={i}>
            <Link
              href={`/what-we-do/${menu.slug}`}
              className="text-sm font-medium text-gray-900 hover:text-primary hover:border-b hover:border-primary transition-all duration-300 hover:font-semibold"
            >
              {menu.title}
            </Link>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
