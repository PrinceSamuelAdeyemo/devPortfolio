"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

import { useState } from "react";

export default function Navbar() {
  const pathname = usePathname();

  const [toggleNavbar, setToggleNavbar] = useState<boolean>(false)
  
  return (
    <nav className="flex p-4 gap-10 border-b-1 border-gray-200 w-full relative lg:fixed lg:z-30">
      <h1 className="flex items-center gap-1 font-semibold z-30"><span><i><Image src={"/icons/logo.svg"} alt="" width={30} height={30} /></i></span>My Portfolio</h1>
      <div className="flex">
        <ul className={`${toggleNavbar===false ? 'hidden' : 'flex flex-col pt-16 pb-4 bg-personallightblue z-20'} lg:flex lg:flex-row lg:py-0 lg:bg-inherit items-center w-full gap-10 lg:w-1/2 absolute top-0 left-0 lg:static`}>
            <li><Link className={`${pathname=='/' ? 'text-personalpurple font-bold' : 'text-black font-semibold lg:font-normal'}`} href={"/"}>Home</Link></li>
            <li><Link className={`${pathname=='/frontend' ? 'text-personalpurple font-bold' : 'text-black font-semibold lg:font-normal'}`} href={"/frontend"}>Frontend</Link></li>
            <li><Link className={`${pathname=='/backend' ? 'text-personalpurple font-bold' : 'text-black font-semibold lg:font-normal'}`} href={"/backend"}>Backend</Link></li>
            <li><Link className={`${pathname=='/fullstack' ? 'text-personalpurple font-bold' : 'text-black font-semibold lg:font-normal'}`} href={"/fullstack"}>Fullstack</Link></li>
            <li><Link className={`${pathname=='/blockchain' ? 'text-personalpurple font-bold' : 'text-black font-semibold lg:font-normal'}`} href={"/blockchain"}>Blockchain</Link></li>
            <li><Link className={`${pathname=='/ai_ml' ? 'text-personalpurple font-bold' : 'text-black font-semibold lg:font-normal'}`} href={"/ai-ml"}>AI/ML</Link></li>
        </ul>
      </div>
      <div onClick={() => setToggleNavbar(!toggleNavbar)} className="flex flex-col lg:hidden gap-1 z-20 ml-auto w-[2.3rem] h-6">
        <div className={`${toggleNavbar===true ? 'rotate-45 translate-2 origin-center' : 'rotate-none' } w-full h-1 bg-gray-500 rounded`}></div>
        <div className={`${toggleNavbar===true ? 'hidden' : 'rotate-none w-full h-1 bg-gray-500 rounded' }`}></div>
        <div className={`${toggleNavbar===true ? '-rotate-48 translate-x-1.5 transition-all' : 'rotate-none' } w-full h-1 bg-gray-500 rounded`}></div>
      </div>
    </nav>
  );
}