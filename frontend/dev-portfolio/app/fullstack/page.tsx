import Image from "next/image";
import Link from "next/link";

// Components
import Navbar from "@/components/Navbar";
import FeaturedProject from "@/components/FeaturedProject";
import Footer from "@/components/Footer";
import Skills from "@/components/Skills";

export default function Fullstack(){

    return(
        <div>
            <Navbar />

            <div className="flex flex-col gap-10 lg:gap-24 pb-32 pt-16">
                {/* HERO SECTION */}
                <div className="flex justify-center py-10">
                    <div className="flex flex-col w-[95%] gap-12">
                        <p className="text-3xl font-bold">My Fullstack Projects</p>
                        <div className="flex gap-4">
                            <input className="outline-1 outline-gray-400 bg-white px-4 rounded-md lg:w-[63%] xl:w-[70%] h-8" type="search" name="" id="" />
                            <button className="outline-1 outline-gray-400 bg-white px-4 rounded-md lg:w-[12%] xl:w-[10%]" type="button">Filter by tech</button>
                            <button className="outline-1 outline-gray-400 bg-white px-4 rounded-md lg:w-[12%] xl:w-[10%]" type="button">Filter by type</button>
                            <button className="outline-1 outline-gray-400 bg-white px-4 rounded-md lg:w-[12%] xl:w-[10%]" type="button">Sort by</button>
                        </div>
                    </div>
                </div>

                {/* MAIN SECTION */}
                <div className="flex flex-col gap-8 lg:gap-20 items-center">

                    {/* featured frontend projects */}
                    <div className="flex flex-col gap-6 w-4/5">
                        <p className="font-semibold text-2xl">Featured Fullstack Projects</p>
                        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {/* <FeaturedProject />
                            <FeaturedProject />
                            <FeaturedProject /> */}
                        </div>
                    </div>

                    {/* All projects */}
                    <div className="flex flex-col gap-6 w-4/5">
                        <p className="font-semibold text-2xl">All Projects</p>
                        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {/* <FeaturedProject />
                            <FeaturedProject />
                            <FeaturedProject />
                            <FeaturedProject />
                            <FeaturedProject />
                            <FeaturedProject />
                            <FeaturedProject />
                            <FeaturedProject />
                            <FeaturedProject /> */}
                        </div>
                        <div>
                            
                        </div>
                    </div>

                    {/* Articles/Writeups */}
                    <div className="flex flex-col gap-6 w-4/5">
                        <p className="font-semibold text-2xl text-center ">All Articles</p>
                        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {/* <FeaturedProject />
                            <FeaturedProject />
                            <FeaturedProject /> */}
                        </div>
                    </div>


                </div>
            


            </div>

            <Footer />
        </div>
    )
}