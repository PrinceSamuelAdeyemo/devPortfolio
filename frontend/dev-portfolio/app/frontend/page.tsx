import Image from "next/image";
import Link from "next/link";

// Components
import Navbar from "@/components/Navbar";
import FeaturedProject from "@/components/FeaturedProject";
import Footer from "@/components/Footer";


export default function Frontend(){

    return(
        <div>
            <Navbar />

            <div className="flex flex-col gap-10 lg:gap-24 pb-32">
                {/* HERO SECTION */}
                <div className="pt-20">
                    <div className="flex flex-col items-center gap-4">
                        <p className="text-5xl font-bold">Frontend Development</p>
                        <p className="text-base text-gray-400 text-center w-[30%]">Crafting beautiful, responsive, and high-performance user interfaces that captivate and convert. Explore a selection of projects showcasing expertise in modern web technologies.</p>
                    </div>
                </div>

                {/* MAIN SECTION */}
                <div className="flex flex-col gap-8 lg:gap-20 items-center">
                    {/* Skills */}
                    <div className="flex flex-col gap-6 w-4/5">
                        <p className="font-semibold text-2xl text-center ">Core Frontend Skills & Technologies</p>
                        <div className="grid sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
                            <p className="bg-gray-100 text-sm font-semibold rounded w-fit px-2">HTML</p>
                            <p className="bg-gray-100 text-sm font-semibold rounded w-fit px-2">CSS</p>
                            <p className="bg-gray-100 text-sm font-semibold rounded w-fit px-2">Javascript</p>
                            <p className="bg-gray-100 text-sm font-semibold rounded w-fit px-2">Typescript</p>
                            <p className="bg-gray-100 text-sm font-semibold rounded w-fit px-2">React.js</p>
                            <p className="bg-gray-100 text-sm font-semibold rounded w-fit px-2">Next.js</p>
                            <p className="bg-gray-100 text-sm font-semibold rounded w-fit px-2">React</p>
                            <p className="bg-gray-100 text-sm font-semibold rounded w-fit px-2">React</p>
                            <p className="bg-gray-100 text-sm font-semibold rounded w-fit px-2">React</p>
                            <p className="bg-gray-100 text-sm font-semibold rounded w-fit px-2">React</p>
                            <p className="bg-gray-100 text-sm font-semibold rounded w-fit px-2">React</p>
                            <p className="bg-gray-100 text-sm font-semibold rounded w-fit px-2">React</p>
                        </div>
                    </div>

                    {/* featured frontend projects */}
                    <div className="flex flex-col gap-6 w-4/5">
                        <p className="font-semibold text-2xl text-center ">Core Frontend Skills & Technologies</p>
                        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                            <FeaturedProject />
                            <FeaturedProject />
                            <FeaturedProject />
                            <FeaturedProject />
                            <FeaturedProject />
                            <FeaturedProject />
                            <FeaturedProject />
                            <FeaturedProject />
                        </div>
                    </div>

                    {/* Articles/Writeups */}
                    <div className="flex flex-col gap-6 w-4/5">
                        <p className="font-semibold text-2xl text-center ">Frontend Trends & Insights</p>
                        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            <FeaturedProject />
                            <FeaturedProject />
                            <FeaturedProject />
                        </div>
                    </div>


                </div>
            


            </div>

            <Footer />
        </div>
    )
}