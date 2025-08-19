"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  const pathname = usePathname();
  
  return (
    <nav className="flex p-4 gap-10 border-b-1 border-gray-200 lg:fixed lg:z-50 w-full">
      <h1 className="flex items-center gap-1 font-semibold"><span><i><Image src={"/icons/logo.svg"} alt="" width={30} height={30} /></i></span>My Portfolio</h1>
      <div className="flex">
        <ul className="nav-links flex gap-10 lg:w-1/2">
            <li><Link className={`${pathname=='/' ? 'text-personalpurple' : 'text-black'}`} href={"/"}>Home</Link></li>
            <li><Link className={`${pathname=='/frontend' ? 'text-personalpurple' : 'text-black'}`} href={"/frontend"}>Frontend</Link></li>
            <li><Link className={`${pathname=='/backend' ? 'text-personalpurple' : 'text-black'}`} href={"/backend"}>Backend</Link></li>
            <li><Link className={`${pathname=='/fullstack' ? 'text-personalpurple' : 'text-black'}`} href={"/fullstack"}>Fullstack</Link></li>
            <li><Link className={`${pathname=='/blockchain' ? 'text-personalpurple' : 'text-black'}`} href={"/blockchain"}>Blockchain</Link></li>
            <li><Link className={`${pathname=='/ai_ml' ? 'text-personalpurple' : 'text-black'}`} href={"/ai-ml"}>AI/ML</Link></li>
        </ul>  
      </div>
    </nav>
  );
}